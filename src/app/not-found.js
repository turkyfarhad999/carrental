"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center select-none">
      {/* Background Decorative Blur */}
      <div className="absolute w-72 h-72 bg-neutral-800/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-lg space-y-6">
        {/* Large 404 Text */}
        <h1 className="text-8xl sm:text-9xl font-extrabold tracking-widest text-neutral-200 drop-shadow-lg">
          4<span className="text-neutral-600">0</span>4
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            PAGE NOT FOUND
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-md mx-auto">
            The route you are looking for doesn't exist or has been relocated to another part of the fleet.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            onClick={() => router.back()}
            className="w-full sm:w-auto px-6 py-3 border border-neutral-700 rounded-md text-sm font-semibold hover:bg-neutral-900 transition-colors cursor-pointer"
          >
            GO BACK
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-md text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            RETURN HOME
          </Link>
        </div>
      </div>
    </div>
  );
}