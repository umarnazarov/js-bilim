import fs from 'fs';
import glob from 'glob';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Courses from "../components/Courses"

export default function Home({ frontMatter: { content } }) {
  return (
    <>
      <Hero />
      <Courses content={content} />
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const articles = glob.sync('tutorials/**/*index.mdx');

  const markdownWithMeta = fs.readFileSync(path.join(articles[0]), 'utf-8');
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      mdxSource,
    }
  }
}