import Link from 'next/link'

export default function Navbar({ slug, title}) {
    return (
        <nav className="bg-gray-200 p-3 rounded w-full mx-4">
            <Link href="/"><a className="text-gray-900 font-bold hover:underline">
                🠐 Back to Home
            </a></Link>
        </nav>
    )
}