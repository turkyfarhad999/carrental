"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddCarPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user?.email) {
      setError("Please log in to add a car.");
      return;
    }

    setLoading(true);
    setError("");

    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);

    const carData = {
      ...data,
      price: Number(data.price),
      seats: Number(data.seats),
      ownerEmail: session.user.email,
      status: "Available",
      bookingCount: 0,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://localhost:8000/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carData),
      });

      if (!res.ok) throw new Error("Failed to add car");

      router.push("/my-cars");
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return <p className="text-center py-24 text-sm text-gray-500">Loading...</p>;
  }

  if (!session?.user) {
    return (
      <p className="text-center py-24 text-sm text-gray-500">
        Please log in to add a car.
      </p>
    );
  }

  return (
    <section className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto px-6 py-16">
      <div className="mb-10">
        <h2 className="text-lg font-bold tracking-wide flex items-center gap-2 mb-2">
          <span className="w-1 h-5 bg-black inline-block" />
          ADD A CAR
        </h2>
        <p className="text-sm text-gray-500">
          List your vehicle on the fleet. Fill in the details below.
        </p>
      </div>

      {error && (
        <p className="text-sm text-red-600 border border-red-300 bg-red-50 px-4 py-3 rounded-md mb-6">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* SECTION: Basic Info */}
        <div>
          <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Basic Information
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2">
                CAR NAME
              </label>
              <input
                type="text"
                name="name"
                placeholder="Toyota Premio"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-black transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2">
                TYPE
              </label>
              <input
                type="text"
                name="type"
                placeholder="Sedan"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-black transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2">
                LOCATION
              </label>
              <input
                type="text"
                name="location"
                placeholder="Gulshan, Dhaka"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-black transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2">
                IMAGE URL
              </label>
              <input
                type="url"
                name="image"
                placeholder="https://..."
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-black transition"
              />
            </div>
          </div>
        </div>

        {/* SECTION: Specs */}
        <div>
          <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Specifications
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2">
                SEATS
              </label>
              <input
                type="number"
                name="seats"
                placeholder="5"
                required
                min="1"
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-black transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2">
                TRANSMISSION
              </label>
              <select
                name="transmission"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-black transition bg-white"
              >
                <option value="">Select</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2">
                FUEL TYPE
              </label>
              <select
                name="fuel"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-black transition bg-white"
              >
                <option value="">Select</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>
        </div>

        {/* SECTION: Pricing & Description */}
        <div>
          <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Pricing & Description
          </h3>
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2">
                PRICE PER DAY (TAKA)
              </label>
              <input
                type="number"
                name="price"
                placeholder="3200"
                required
                min="0"
                className="w-full md:w-1/2 border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-black transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide mb-2">
                DESCRIPTION
              </label>
              <textarea
                name="description"
                placeholder="A clean, quiet sedan ideal for city commutes..."
                rows={4}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-black transition resize-none"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto md:px-10 bg-black text-white text-sm font-semibold py-3 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
        >
          {loading ? "ADDING..." : "ADD CAR"}
        </button>
      </form>
    </section>
  );
};

export default AddCarPage;