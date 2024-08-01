import Link from "next/link";

export default function blog(){
    return (
        <main>
            <h1> blog </h1>
            <Link href="/blog/post-1">post 1</Link>
            <Link href="/blog/post-2">post 2</Link>
        </main>
    )
}