import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import DefaultLayout from 'components/DefaultLayout';
import Navbar from 'components/Navbar';

// These need to be closed tags (e.g. <p />)
const components = {
  p: props => <p {...props} className="pb-4 leading-normal text-gray-800" />,
}

export default function Post({ source, frontMatter }) {
  const content = hydrate(source, { components });
  return (
    <DefaultLayout title={frontMatter.title} description={frontMatter.title}>
      <Navbar slug={frontMatter.slug} title={frontMatter.title}/>
      <div className="px-8 py-2">
        <h1 className="pb-4 text-2xl font-bold leading-normal text-gray-900 sm:text-3xl sm:truncate">{ frontMatter.title }</h1>
        { content }
      </div>
    </DefaultLayout>
  )
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const source = await import(`_posts/${slug}.md`);

  const { content, data } = matter(source.default);
  const mdxSource = await renderToString(content);

  // Add slug to params
  data.slug = slug;

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

