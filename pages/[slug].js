import { serialize } from 'next-mdx-remote/serialize'
import glob from 'glob';
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'


const PostPage = ({ frontMatter: { title }, mdxSource }) => {
    return (
        <div className="mt-4">
            <h1>{title}</h1>
            <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
        </div>
    )
}

const getStaticPaths = async () => {

    const allFiles = glob.sync('tutorials/**/*.mdx')

    const slugs = allFiles.map(filename => filename.split("/")).map(f => f[f.length - 1].replace('.mdx', ''))

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
    const allFiles = glob.sync('tutorials/**/*.mdx')
    let existPath = allFiles.find(f => f.includes(slug))

    const markdownWithMeta = fs.readFileSync(path.join(existPath), 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }
}

export { getStaticProps, getStaticPaths }
export default PostPage