import { getallCars } from "@/lib/func";
import { ArrowRight, Gear } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";

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

const MainDisplay = async () => {
  const data = await getallCars({});

  return (
    <>
      {/* HERO */}
      <section className="w-full px-4 sm:px-6 md:px-8 pt-8 sm:pt-16 md:pt-24 lg:pt-36 pb-8 sm:pb-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center border-b-2 border-black">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
            DRIVE YOUR
            <br />
            AMBITION
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 mt-3 sm:mt-4 md:mt-6 max-w-sm">
            The definitive fleet for the uncompromising professional. Brutal
            performance wrapped in architectural precision. No fluff, just
            machines built to dominate the road.
          </p>
          <button className="mt-4 sm:mt-6 bg-black text-white text-xs sm:text-sm font-medium tracking-wide px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 rounded-md hover:bg-gray-800 transition flex items-center gap-2 w-fit">
            EXPLORE FLEET
            <ArrowRight width={16} height={16} />
          </button>
        </div>

        <div className="relative w-full h-40 sm:h-60 md:h-80 lg:h-96 rounded-lg overflow-hidden order-first md:order-last">
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
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-0 py-10 sm:py-16 md:py-20">
        <div className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide flex items-center gap-2">
              <span className="w-1 h-4 sm:h-5 bg-black inline-block" />
              THE FLEET
            </h2>
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {data.length} / 2024 COLLECTION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {data.slice(0, 4).map((car) => (
              <div
                key={car._id || car.id}
                className="border-2 border-black rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-lg transition"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-40 sm:h-48 w-full">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details Content */}
                  <div className="p-3 sm:p-4 md:p-5">
                    {/* Tag / Status Badge */}
                    {car.tag && (
                      <div className="mb-2">
                        <span className="text-xs bg-gray-100 border border-gray-200 px-2 py-0.5 rounded font-medium inline-block">
                          {car.tag}
                        </span>
                      </div>
                    )}

                    {/* Name & Price Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <h3 className="font-bold text-lg sm:text-xl md:text-2xl truncate">{car.name}</h3>
                      <h3 className="font-bold text-lg sm:text-xl md:text-2xl whitespace-nowrap">
                        {car.price}
                        <span className="text-sm font-normal">/Day</span>
                      </h3>
                    </div>

                    {/* Spec Rates */}
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="flex gap-1.5 font-semibold text-lg sm:text-xl items-center">
                        <Gear width={18} height={18} />
                        {car.transmission}
                      </span>
                    </div>

                    <div className="flex items-center justify-between font-semibold mb-4 sm:mb-5">
                      <span className="text-sm sm:text-base">Availability</span>
                      <span className="font-medium text-black text-sm sm:text-base">{car.status}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5">
                  <Link href={`/allcars/${car._id}`} className=" block  text-center w-full border-2 border-black text-xs sm:text-sm font-medium py-2 sm:py-2.5 rounded-md hover:bg-black hover:text-white transition">
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE STEPS */}
      <section className="w-full bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto">
          <h2 className="text-center text-base sm:text-lg md:text-xl font-bold tracking-widest mb-8 sm:mb-12 md:mb-16">
            THREE STEPS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-2">
                  {step.number}
                </span>
                <h3 className="text-xs sm:text-sm font-bold tracking-widest mb-2 border-b border-gray-700 pb-2 sm:pb-3 w-fit">
                  {step.title.toUpperCase()}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-2 sm:mt-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-300">"</span>
          <p className="text-base sm:text-lg md:text-xl font-semibold italic leading-relaxed mt-2 sm:mt-4">
            Drivefleet doesn't just provide cars; they provide the framework
            for a superior driving experience. The precision is unmatched.
          </p>
          <div className="w-8 sm:w-10 h-px bg-gray-400 mx-auto my-4 sm:my-6" />
          <p className="text-xs sm:text-sm font-medium tracking-wide">MARCUS THORNE</p>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Creative Director, Apex Studio</p>
        </div>
      </section>
    </>
  );
};

export default MainDisplay;