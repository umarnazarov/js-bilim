import { serialize } from 'next-mdx-remote/serialize';
import glob from 'glob';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';


const PostPage = ({ frontMatter: { title }, mdxSource, filterSections }) => {
    return (
        <div className="mt-4">
            <h1>{title}</h1>
            <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
        </div>
    )
}

const getStaticPaths = async () => {

    const allFiles = glob.sync('tutorials/**/*.mdx');

    const slugs = allFiles.map(filename => filename
        .split("/"))
        .map(f => f[f.length - 1]
            .replace('.mdx', ''));

    const paths = slugs.map(slug => ({
        params: {
            slug: slug
        }
    }))



    return {
        paths,
        fallback: false,
    }

}

const getStaticProps = async ({ params: { slug } }) => {

    const allFiles = glob.sync('tutorials/**/*.mdx');
    let existPath = allFiles.find(f => f.includes(slug));

    // Getting right side content
    let tutorials = existPath.split('/');
    let sections = allFiles.filter(f => f.includes(tutorials[1]));

    let grupedSectionsWithChilds = sections.reduce((prev, val) => {
        const section = new Object;
        let folderName = val.split('/')[2]
        section.title = folderName;
        section.childs = sections
            .filter(c => c
                .includes(folderName))
            .map(c => c
                .replace(/[/]/g, " ")
                .replace('.mdx', '')
                .split(' ')[3])
        return [...prev, section];
    }, []);



    let filterSections = grupedSectionsWithChilds.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.title === value.title
        ))
    );
    console.log(filterSections)

    const markdownWithMeta = fs.readFileSync(path.join(existPath), 'utf-8');

    const { data: frontMatter, content } = matter(markdownWithMeta);
    const mdxSource = await serialize(content);

    return {
        props: {
            frontMatter,
            slug,
            mdxSource,
            filterSections
        }
    }
}

export { getStaticProps, getStaticPaths }
export default PostPage;