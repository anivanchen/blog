import Link from 'next/Link';
export default function Header() {
  return (
    <header>
      <p>Ivan's Blog | Powered by Next.js | <Link href='/'><a>Home</a></Link></p>
    </header>
  )
}
