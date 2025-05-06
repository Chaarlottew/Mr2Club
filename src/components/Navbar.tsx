// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-[10vh] p-10 bg-black/50 text-white flex justify-between z-20 fixed w-full border-b-2 border-white">
      <div className="flex w-full justify-evenly items-center text-2xl text-outline-white font-bold font-sans">
        <Link href="/" className="text-outline-black">
          Welcome
        </Link>
        <Link href="/events" className="text-outline-black">
          Events
        </Link>
        <Link href="/previousEvents" className="text-outline-black">
          Previous Events
        </Link>
        <Link href="/"></Link>
        <Link href="/about" className="text-outline-black">
          About Us
        </Link>
        <Link href="/gallery" className="text-outline-black">
          Gallery
        </Link>
        <Link href="/contact" className="text-outline-black">
          Contact
        </Link>
      </div>
    </nav>
  );
}
