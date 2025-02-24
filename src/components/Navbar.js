import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <Link href="/">Home</Link> | 
      <Link href="/counter">Counter</Link> | 
      <Link href="/profile">Profile</Link>
    </nav>
  );
}

