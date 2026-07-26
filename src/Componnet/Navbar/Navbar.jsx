"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore Cars", href: "/allcars" },
  { name: "Add Car", href: "/add-car" },
  { name: "My Bookings", href: "/my-bookings" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b-2 border-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={'/'} className="text-xl font-bold tracking-wide">DRIVEFLEET</Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8 text-sm font-medium text-gray-800">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive
                    ? "underline underline-offset-4 decoration-2 text-black"
                    : "hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="/login" className="hover:text-black">
            Login
          </Link>
          <Link
            href="/register"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}