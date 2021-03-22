import Link from 'next/link'

export default function Navbar({ slug, title}) {
    return (
        <nav className="bg-gray-200 p-3 rounded w-full mx-4">
            <ol className="flex text-gray-900">
                <li><Link href="/"><a className="font-bold">Home</a></Link></li>
                <li><span className="mx-2">/</span></li>
                <li>
                    <Link href={`/posts/${encodeURIComponent(slug)}`}>
                        <a className="font-bold">{title}</a>
                    </Link>
                </li>
            </ol>
        </nav>
    )
}