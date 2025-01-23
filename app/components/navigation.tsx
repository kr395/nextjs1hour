"use client"
import Link from "next/link";
import {usePathname} from "next/navigation"

export const Navigation = () => {
    const pathname = usePathname()
    return (
        <nav>
            <Link className={pathname === "/" ? "font-bold mr-4 " : "mr-4 text-blue-500"} href="/">Home</Link>
            <Link className={pathname === "/about" ? "font-bold mr-4 " : "mr-4 text-blue-500"} href="/about">About</Link>
            <Link className={pathname === "/products/1" ? "font-bold mr-4 " : "mr-4 text-blue-500"} href="/products/1">Product 1</Link>
            <Link className={pathname === "/products/2" ? "font-bold mr-4 " : "mr-4 text-blue-500"} href="/products/2">Product 2</Link>


        </nav>
    )
}