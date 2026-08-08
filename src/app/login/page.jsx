"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
    const router=useRouter()
  const [showPassword, setShowPassword] = useState(false);
    const handleSubmit=async(e)=>{
      e.preventDefault()
      const formdata=new FormData(e.target)
      const data=Object.fromEntries(formdata)
      console.log(data)
      const { data:res, error } = await authClient.signIn.email({
     
      email: data.email, 
      password:data.password,
      
      
  });
  toast('Sucessfully login')
  router.push('/')
  router.refresh()
    }
    const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* LEFT — Brand panel */}
      <div className="relative bg-black text-white flex flex-col justify-between px-10 py-10 overflow-hidden">
        <div>
          <h2 className="text-sm font-bold tracking-widest">DRIVEFLEET</h2>
        </div>

        <div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight mb-16">
            ENGINEERED
            <br />
            FOR THE
            <br />
            DRIVEN.
          </h1>

          <div className="relative w-full h-40 mb-8">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
              alt="Architectural facade"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-gray-700 pt-6">
          <div>
            <h3 className="text-xs font-bold tracking-widest mb-2">
              THE FLEET
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Access an uncompromising selection of performance vehicles. No
              fluff. Just power.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-widest mb-2">
              THE NETWORK
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Seamless logistics for the modern professional. Global reach,
              local precision.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT — Form panel */}
      <div className="flex items-center justify-center px-6 py-16 bg-white">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold tracking-tight mb-1">
            WELCOME BACK.
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Enter your credentials to access the fleet.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                placeholder="user@drivefleet.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-black transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold tracking-wide">
                  PASSWORD
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold underline hover:text-gray-600"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-black transition"
              />
            </div>

            <label className="flex items-center gap-2 text-xs font-medium text-gray-600 cursor-pointer">
              <input type="checkbox" className="accent-black" />
              STAY AUTHENTICATED
            </label>

            <button
              type="submit"
              className="w-full bg-black text-white text-sm font-semibold py-3 rounded-md hover:bg-gray-800 transition"
            >
              SIGN IN
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-[10px] text-gray-400 tracking-wide">
              OR CONNECT VIA
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button onClick={signIn} className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2.5 text-sm font-medium hover:bg-gray-50 transition cursor-pointer"suppressHydrationWarning>
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            GOOGLE
          </button>

          <p className="text-center text-xs text-gray-500 mt-6">
            New to the fleet?{" "}
            <Link href="/register" className="font-semibold underline">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;