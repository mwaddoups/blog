import Link from 'next/link'
import DefaultLayout from 'components/DefaultLayout'

export default function Blog(props) {
    return (
    <DefaultLayout title={props.title} description={props.description}>
      <p>List of posts:</p>
      <li>
        {
          props.posts.map((post, idx) => (
            <li key={idx}>
              <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
                <a>{post.slug}</a>
              </Link>
            </li>
          ))
        }
      </li>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const fs = require('fs');
  const path = require('path');

  const config = {
    title: "Mark Waddoups | Blog",
    description: "Mark Waddoups's personal site and blog."
  };

  const files = fs.readdirSync('_posts/');

  const allPosts = files.map( file => ({
    slug: file.replace('.md', ''),
  }));

  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  }
}
