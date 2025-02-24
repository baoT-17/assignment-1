import Link from 'next/link'; // Import Link component from Next.js for client-side navigation

// Navbar component provides navigation links to different pages
export default function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      {/* Navigation links to different routes */}
      <Link href="/">Home</Link> | {/* Link to the homepage */}
      <Link href="/counter">Counter</Link> | {/* Link to the Counter page */}
      <Link href="/profile">Profile</Link> {/* Link to the Profile page */}
    </nav>
  );
}

