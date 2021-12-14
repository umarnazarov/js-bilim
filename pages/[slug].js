import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'

import SearchBar from '../components/SearchBar'


const PostPage = ({ frontMatter: { title }, mdxSource }) => {
    return (
        <div className="mt-4">
            <h1>{title}</h1>
            <MDXRemote {...mdxSource} components={{ SearchBar, SyntaxHighlighter }} />
        </div>
    )
}

const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('articles/part1/introduction'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(/[0-9, .]|mdx/g, '')
        }
    }))

    return {
        paths,
        fallback: false,
    }
}

const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('articles/part1/introduction',
        slug + '.mdx'), 'utf-8')

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