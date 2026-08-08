"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { Person, Bars, Xmark } from "@gravity-ui/icons";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    router.push("/");
    router.refresh();
  };

  return (
    <nav className="w-full border-b-2 border-black z-50 sticky top-0 bg-white">
      <div className="w-full px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="text-lg md:text-xl font-bold tracking-wide">
            DRIVEFLEET
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium text-gray-800">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all ${
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

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 text-xs lg:text-sm font-medium">
            {isPending ? (
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-gray-100 animate-pulse" />
            ) : session?.user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-black text-white flex items-center justify-center font-semibold text-xs hover:bg-gray-800 transition"
                >
                  {session.user.name?.[0]?.toUpperCase() || (
                    <Person width={14} height={14} />
                  )}
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-black rounded-md overflow-hidden shadow-lg">
                    <div className="px-3 py-2 border-b border-gray-200">
                      <p className="font-semibold text-xs truncate">
                        {session.user.name}
                      </p>
                      <p className="text-[10px] text-gray-500 truncate">
                        {session.user.email}
                      </p>
                    </div>

                    <Link
                      href="/my-cars"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-2 text-xs hover:bg-gray-50 transition"
                    >
                      My Cars
                    </Link>
                    <Link
                      href="/my-bookings"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-2 text-xs hover:bg-gray-50 transition"
                    >
                      My Bookings
                    </Link>
                    <Link
                      href="/profile"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-3 py-2 text-xs hover:bg-gray-50 transition"
                    >
                      Profile
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-xs border-t border-gray-200 hover:bg-black hover:text-white transition"
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
                  className="bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800 text-xs"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <Xmark width={24} height={24} />
            ) : (
              <Bars width={24} height={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
          >
            <div className="flex flex-col gap-3 mb-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-medium px-2 py-2 rounded transition-all ${
                      isActive
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="border-t border-gray-200 pt-4">
              {isPending ? (
                <div className="w-8 h-8 rounded-full bg-gray-100 animate-pulse" />
              ) : session?.user ? (
                <div className="space-y-2">
                  <div className="px-2 py-2 bg-gray-50 rounded">
                    <p className="font-semibold text-xs truncate">
                      {session.user.name}
                    </p>
                    <p className="text-[10px] text-gray-500 truncate">
                      {session.user.email}
                    </p>
                  </div>

                  <Link
                    href="/my-cars"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-2 text-xs hover:bg-gray-50 rounded transition"
                  >
                    My Cars
                  </Link>
                  <Link
                    href="/booked-cars"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-2 text-xs hover:bg-gray-50 rounded transition"
                  >
                    My Bookings
                  </Link>
                  <Link
                    href="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-2 text-xs hover:bg-gray-50 rounded transition"
                  >
                    Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-2 py-2 text-xs bg-black text-white rounded hover:bg-gray-800 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-2 text-xs hover:bg-gray-50 rounded text-center"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-2 text-xs bg-black text-white rounded hover:bg-gray-800 text-center"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}