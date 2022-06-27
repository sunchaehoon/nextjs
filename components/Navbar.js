import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    return (
        <nav>
            <Link href="/">
                <a className={`${router.pathname === "/" ? "active" : "none"}`}>Home</a>
            </Link>
            <Link href="/about">
                <a className={`${router.pathname === "/about" ? "active" : "none"}`}>About</a>
            </Link>
            <style jsx>{`
                a {
                    text-decoration: none;
                }
                .active {
                    color: tomato;
                }
            `}</style>
        </nav>
    )
}