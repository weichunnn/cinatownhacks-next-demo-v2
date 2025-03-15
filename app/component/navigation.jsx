"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname(); // "/about/inside" or "/"

  return (
    <nav className="flex flex-row gap-2 justify-center p-4">
      <Link
        href="/"
        target="_blank"
        className={pathname === "/" ? "text-red-500" : "text-black"}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={pathname === "/about" ? "text-red-500" : "text-black"}
      >
        About
      </Link>
      <Link
        href="/about/inside"
        className={pathname === "/about/inside" ? "text-red-500" : "text-black"}
      >
        About Inside
      </Link>
    </nav>
  );
}
