import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
      <Link href="/aboutUs">About us</Link>
    </p></main>
  );
}
