import Link from 'next/link'

export default function PostList({ posts }) {
  return <div>
    <ul>
    {
      posts.map((post, idx) => (
        <li key={idx}>
            <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
            <a>{post.slug}</a>
            </Link>
        </li>
      ))
    }
    </ul>
  </div>
}