import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'

export default function Post({ source, frontMatter }) {
  const content = hydrate(source);
  
  return (
    <div>
      <h1 class="font-serif">{ frontMatter.title }</h1>
      { content }
    </div>
  )
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const source = await import(`_posts/${slug}.md`);

  const { content, data } = matter(source.default);
  const mdxSource = await renderToString(content);

  return { props: { source: mdxSource, frontMatter: data } };
}

export async function getStaticPaths() {
  const context = require.context('_posts', false, /\.md$/);

  const paths = context.keys().map( file_path => ({
    params: { slug: file_path.slice(2).replace('.md', '') }
  }));

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

