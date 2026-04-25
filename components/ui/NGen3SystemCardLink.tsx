import Link from 'next/link'

export function NGen3SystemCardLink() {
    return (
        <Link
            href="/NGen3%20System%20Card.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-full border border-gray-300 bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-gray-100"
        >
            NGen 3 System Card
        </Link>
    )
}
