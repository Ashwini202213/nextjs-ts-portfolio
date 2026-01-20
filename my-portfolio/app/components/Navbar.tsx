import Link from "next/link";
export default function Navbar() {
    return(
        <nav className="w-full px-6 py-4 flex justify-between items-center border-b">
            <h1 className="text-xl font-bold">Ashwini</h1>
            <ul className="flex gap-6">
                <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}