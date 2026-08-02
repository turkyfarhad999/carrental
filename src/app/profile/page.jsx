"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleEditClick = () => {
    setName(session?.user?.name || "");
    setEditing(true);
    setMessage("");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await authClient.updateUser({ name });
      setEditing(false);
      setMessage("Profile updated successfully.");
      router.refresh();
    } catch (err) {
      setMessage("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  if (isPending) {
    return <p className="text-center py-24 text-sm text-gray-500">Loading...</p>;
  }

  if (!session?.user) {
    return (
      <p className="text-center py-24 text-sm text-gray-500">
        Please log in to view your profile.
      </p>
    );
  }

  const { user } = session;

  return (
    <section className="w-11/12 md:w-3/5 lg:w-2/5 mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold tracking-wide flex items-center gap-2 mb-10">
        <span className="w-1 h-5 bg-black inline-block" />
        PROFILE
      </h2>

      <div className="border-2 border-black rounded-lg p-8">
        {/* Avatar */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold">
            {user.name?.[0]?.toUpperCase() || "U"}
          </div>
          <div>
            <p className="font-bold text-lg">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        {message && (
          <p
            className={`text-sm mb-6 px-4 py-2.5 rounded-md ${
              message.includes("success")
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-600 border border-red-200"
            }`}
          >
            {message}
          </p>
        )}

        {editing ? (
          <form onSubmit={handleSave} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2">
                FULL NAME
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-black transition"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-black text-white text-sm font-semibold py-2.5 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading ? "SAVING..." : "SAVE CHANGES"}
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="flex-1 border border-gray-300 text-sm font-medium py-2.5 rounded-md hover:bg-gray-50 transition"
              >
                CANCEL
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-5">
            {/* Info rows */}
            <div className="border-t border-gray-200 pt-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Full Name
              </p>
              <p className="font-medium">{user.name}</p>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Email Address
              </p>
              <p className="font-medium">{user.email}</p>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Member Since
              </p>
              <p className="font-medium">
                {new Date(user.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="flex gap-3 pt-5">
              <button
                onClick={handleEditClick}
                className="flex-1 border-2 border-black text-sm font-medium py-2.5 rounded-md hover:bg-black hover:text-white transition"
              >
                EDIT PROFILE
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 border-2 border-red-500 text-red-600 text-sm font-medium py-2.5 rounded-md hover:bg-red-500 hover:text-white transition"
              >
                LOGOUT
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfilePage;