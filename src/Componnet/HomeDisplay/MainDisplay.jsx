"use client";

import Image from "next/image";

// Demo data — replace with API call later
const fleetCars = [
  {
    id: 1,
    name: "VANTAGE GT",
    tag: "V8",
    rate: "$450.00",
    specs: "V8 / 503 HP",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  },
  {
    id: 2,
    name: "DEFENDER X",
    tag: "V6T",
    rate: "$308.00",
    specs: "I6 / 395 HP",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80",
  },
];

const steps = [
  {
    number: "01",
    title: "Select",
    desc: "Browse our curated collection of high-performance vehicles. Filter by space, availability, and aesthetic.",
  },
  {
    number: "02",
    title: "Reserve",
    desc: "Seamless digital booking with instant confirmation. No paperwork, no friction, just efficiency.",
  },
  {
    number: "03",
    title: "Drive",
    desc: "Collect your ride from an architectural hub or choose contactless delivery. The road is now yours to command.",
  },
];

const MainDisplay = () => {
    return (
          <>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            DRIVE YOUR
            <br />
            AMBITION
          </h1>
          <p className="text-sm text-gray-500 mt-4 max-w-sm">
            The definitive fleet for the uncompromising professional. Brutal
            performance wrapped in architectural precision. No fluff, just
            machines built to dominate the road.
          </p>
          <button className="mt-6 bg-black text-white text-xs font-medium tracking-wide px-5 py-3 rounded-md hover:bg-gray-800">
            EXPLORE FLEET →
          </button>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
            alt="Sports car in architectural garage"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* THE FLEET */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-bold tracking-wide flex items-center gap-2">
            <span className="w-1 h-5 bg-black inline-block" />
            THE FLEET
          </h2>
          <span className="text-xs text-gray-400">
            06 AVAILABLE / 2024 COLLECTION
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetCars.map((car) => (
            <div
              key={car.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm">{car.name}</h3>
                  <span className="text-[10px] bg-gray-100 px-2 py-1 rounded font-medium">
                    {car.tag}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>DAILY RATE</span>
                  <span className="font-semibold text-black">{car.rate}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>SPECS</span>
                  <span>{car.specs}</span>
                </div>
                <button className="w-full border border-black text-xs font-medium py-2 rounded-md hover:bg-black hover:text-white transition">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}

          {/* Placeholder slots for remaining cards from API */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="border border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center text-xs text-gray-400"
            >
              More cars from API
            </div>
          ))}
        </div>
      </section>

      {/* THREE STEPS */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-xl font-bold tracking-widest mb-16">
            THREE STEPS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-5xl font-bold text-gray-700">
                  {step.number}
                </span>
                <h3 className="text-sm font-bold tracking-widest mt-4 mb-2 border-b border-gray-700 pb-3 w-fit">
                  {step.title.toUpperCase()}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mt-4 max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center px-6">
          <span className="text-4xl font-serif text-gray-300">"</span>
          <p className="text-lg font-semibold italic leading-relaxed">
            Drivefleet doesn't just provide cars; they provide the framework
            for a superior driving experience. The precision is unmatched.
          </p>
          <div className="w-10 h-px bg-gray-400 mx-auto my-6" />
          <p className="text-xs font-medium tracking-wide">MARCUS THORNE</p>
          <p className="text-[10px] text-gray-400">Creative Director, Apex Studio</p>
        </div>
      </section>
    </>
    );
};

export default MainDisplay;