import Hero from "../components/Hero"

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'


export default function Home({ articles }) {
  return (
    <div >
      <Hero />
      {articles.map((post, index) => (
        <Link href={'/' + post.slug} passHref key={index}>
          <div>
            <h5>{post.frontMatter.title}</h5>
          </div>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('tutorials'))

  const articles = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('tutorials', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.replace(/[0-9, .]|mdx/g, '')
    }
  })

  console.log(articles)
  return {
    props: {
      articles
    }
  }
}