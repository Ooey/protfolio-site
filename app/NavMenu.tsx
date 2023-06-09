import Link from "next/link";

export default function NavMenu() {
    return (
        <nav className="py-5 bg-cyan-500 backdrop-blur-md   backdrop-opacity-70">
            <ul className="flex items-center justify-around">
                <li className="text-lg ">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-lg ">
                    <Link href="/about">About Me</Link>
                </li>
                <li className="text-lg ">
                    <Link href="/blog">My Blog</Link>
                </li>
                <li className="text-lg ">
                    <Link href="/projects">My Projects</Link>
                </li>
                <li className="text-lg ">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
