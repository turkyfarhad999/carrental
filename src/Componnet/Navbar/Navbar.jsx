"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { Person, ArrowUpRightFromSquare } from "@gravity-ui/icons";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore Cars", href: "/allcars" },
  { name: "Add Car", href: "/add-cars" },
  { name: "My Bookings", href: "/booked-cars" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Outside click e dropdown close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    setDropdownOpen(false);
    router.push("/");
    router.refresh();
  };

  return (
    <nav className="w-full border-b-2 border-black z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={"/"} className="text-xl font-bold tracking-wide">
          DRIVEFLEET
        </Link>

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

        {/* Auth Section */}
        <div className="flex items-center gap-4 text-sm font-medium">
          {isPending ? (
            // Session load hocche, ekta placeholder dekhao (layout shift avoid korার jonno)
            <div className="w-9 h-9 rounded-full bg-gray-100 animate-pulse" />
          ) : session?.user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-semibold text-sm hover:bg-gray-800 transition"
              >
                {session.user.name?.[0]?.toUpperCase() || (
                  <Person width={16} height={16} />
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-white border-2 border-black rounded-md overflow-hidden shadow-lg">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="font-semibold text-sm truncate">
                      {session.user.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {session.user.email}
                    </p>
                  </div>

                  <Link
                    href="/my-cars"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm hover:bg-gray-50 transition"
                  >
                    My Cars
                  </Link>
                  <Link
                    href="/my-bookings"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm hover:bg-gray-50 transition"
                  >
                    My Bookings
                  </Link>
                  <Link
                    href="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm hover:bg-gray-50 transition"
                  >
                    Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2.5 text-sm border-t border-gray-200 hover:bg-black hover:text-white transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className="hover:text-black">
                Login
              </Link>
              <Link
                href="/register"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}