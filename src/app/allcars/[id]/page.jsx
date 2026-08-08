
import { getCarById } from "@/lib/func";
import { Gear, ArrowLeft } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Addcarbtn from "./Addcarbtn";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const page = async ({ params }) => {
  const session=await auth.api.getSession({
    headers:await headers()
  })
  const {token}=await auth.api.getToken({
    headers:await headers()
  })
  console.log("from id ",token)
  console.log(session)
  const { id } = await params;
  const car = await getCarById(id,token);

  if (!car) return notFound();
 

  return (
    <section className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto px-6 py-16">
      {/* Back link */}
      <Link
        href="/allcars"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-black transition mb-8"
      >
        <ArrowLeft width={16} height={16} />
        Back to fleet
      </Link>

      <div className="grid md:grid-cols-2 gap-10 border-2 border-black rounded-lg overflow-hidden">
        {/* Image */}
        <div className="relative h-72 md:h-full min-h-[320px] w-full">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover"
            priority
          />
          <span
            className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${
              car.status === "Available"
                ? "bg-white text-black border border-black"
                : "bg-black text-white"
            }`}
          >
            {car.status}
          </span>
        </div>

        {/* Details */}
        <div className="p-6 md:p-8 flex flex-col">
          <div className="mb-1 flex items-center gap-2 text-xs font-medium text-gray-400 tracking-wide uppercase">
            {car.type} · {car.location}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {car.name}
          </h1>

          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-3xl font-bold">{car.price} Taka</span>
            <span className="text-sm text-gray-500">/ day</span>
          </div>

          {/* Spec grid */}
          <div className="grid grid-cols-2 gap-4 mb-6 border-y border-gray-200 py-5">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Transmission
              </p>
              <p className="font-semibold flex items-center gap-1.5">
                <Gear width={16} height={16} />
                {car.transmission}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Fuel
              </p>
              <p className="font-semibold">{car.fuel}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Seats
              </p>
              <p className="font-semibold">{car.seats}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Bookings
              </p>
              <p className="font-semibold">{car.bookingCount} times</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-1">
            {car.description}
          </p>

          {/* CTA */}
          <Addcarbtn car={car} userEmail={session?.user?.email} token={token}></Addcarbtn>
        </div>
      </div>
    </section>
  );
};

export default page;