import fs from 'fs';
import glob from 'glob';
import path from 'path';
import Link from 'next/link'
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import SyntaxHighlighter from 'react-syntax-highlighter';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LeftSideContent from '../components/LeftSideContent'
import RightSideContent from '../components/RightSideContent'

const heading = Tag => ({ id, children, ...props }) =>
  <Tag id={children.toLowerCase().split(' ').join('-')} {...props}>
        <a style={{textDecoration: 'none'}} href={'#' + children.toLowerCase().split(' ').join('-')}>{children}</a>
  </Tag>

const PostPage = ({ frontMatter: { content }, mdxSource, filterSections }) => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <LeftSideContent content={content} filterSections={filterSections} />
                <div className="content">
                    <MDXRemote {...mdxSource} components={{ SyntaxHighlighter, Link, h1: heading('h1'), h2: heading('h2'), }} />
                </div>
                <RightSideContent filterSections={filterSections} />
            </div>
            <Footer />
        </div>
    )
}




const getStaticPaths = async () => {

    const allFiles = glob.sync('tutorials/**/*.mdx');

    const slugs = allFiles.map(filename => filename
        .split("/"))
        .map(f => f[f.length - 1]
            .replace(/[0-9, .]/g, '')
            .replace('mdx', ''));

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
        section.title = folderName.replace(/[0-9, -]/g, '');
        section.childs = sections
            .filter(c => c
                .includes(folderName))
            .map(c => c
                .replace(/[0-9, ., /]/g, ' ')
                .replace('mdx', '')
                .split(' ')[8])
        return [...prev, section];
    }, []);



    let filterSections = grupedSectionsWithChilds.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.title === value.title
        ))
    );

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