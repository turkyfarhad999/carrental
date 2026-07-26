

import { getallCars } from "@/lib/func";
import { ArrowRight, Gear } from "@gravity-ui/icons";
import Image from "next/image";


// _id": "6a6364144bcc744ff224b679",
// "id": 7,
// "name": "Toyota Corolla",
// "type": "Sedan",
// "location": "Kolatoli, Cox's Bazar",
// "seats": 5,
// "price": 3000,
// "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=700&q=80",
// "status": "Available",
// "transmission": "Automatic",
// "fuel": "Petrol",
// "bookingCount": 23,
// "description": "A dependable beach-town companion — easy to park, easy to drive, with plenty of boot space for luggage.",
// "ownerEmail": "farhana.akter@example.com",
// "createdAt": "2026-05-29T13:50:00Z"

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

const MainDisplay = async() => {
  const data= await getallCars()

    return (
          <>
      {/* HERO */}
      <section className= " mx-auto px-30 pt-16 md:pt-36 pb-12 grid md:grid-cols-2 gap-10 items-center justify-item-center border-b-2 border-black">
        <div>
          <h1 className="text-8xl font-bold leading-tight tracking-tight">
            DRIVE YOUR
            <br />
            AMBITION
          </h1>
          <p className="text-xl text-gray-500 mt-4 max-w-sm">
            The definitive fleet for the uncompromising professional. Brutal
            performance wrapped in architectural precision. No fluff, just
            machines built to dominate the road.
          </p>
          <button className="mt-6 bg-black text-white text-xs font-medium tracking-wide px-10 py-6 rounded-md flex">
            EXPLORE FLEET <ArrowRight></ArrowRight>
          </button>
        </div>
        <div className="relative w-full h-120 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
            alt="Sports car in architectural garage"
            width={600}
            height={200}
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* THE FLEET */}
      {/* THE FLEET */}
<section className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto px-6 py-20 border-t border-gray-200">
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-3xl font-bold tracking-wide flex items-center gap-2">
      <span className="w-1 h-5 bg-black inline-block" />
      THE FLEET
    </h2>
    <span className="text-xs text-gray-400">
      {data.length} / 2024 COLLECTION
    </span>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
    {data.slice(0, 4).map((car) => (
      <div 
        key={car.id}
        className="border-2 border-black rounded-lg overflow-hidden flex flex-col justify-between"
      >
        <div>
          {/* Image Container */}
          <div className="relative h-56 w-full">
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details Content */}
          <div className="p-5">
            {/* Tag / Status Badge */}
            {car.tag && (
              <div className="mb-2">
                <span className="text-xs bg-gray-100 border border-gray-200 px-2 py-0.5 rounded font-medium inline-block">
                  {car.tag}
                </span>
              </div>
            )}

            {/* Name & Price Row */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <h3 className="font-bold text-xl md:text-2xl truncate">{car.name}</h3>
              <h3 className="font-bold text-2xl text-right  whitespace-nowrap">
                {car.price} Taka<span className="  font-normal">/Day </span>
              </h3>
            </div>

            {/* Spec Rates */}
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="flex gap-1.5 font-semibold text-2xl items-center justify-center "><Gear></Gear>{car.transmission}</span>
              
            </div>
            <div className="flex items-center justify-between font-semibold mb-5">
              <span>Availability</span>
              <span className="font-medium text-black">{car.status}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="px-5 pb-5">
          <button className="w-full border-2 border-black text-sm font-medium py-2.5 rounded-md hover:bg-black hover:text-white transition">
            VIEW DETAILS
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* THREE STEPS */}
      <section className="bg-black text-white py-20 rounded-2xl">
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