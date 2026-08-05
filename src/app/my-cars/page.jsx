import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getMyCars } from "@/lib/func";
import Image from "next/image";
import Link from "next/link";
import { Gear } from "@gravity-ui/icons";
import Deletefromcars from "./Deletefromcars";
const MyCarsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const myCars = await getMyCars(session.user.email);

  return (
    <section className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto px-6 py-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-wide flex items-center gap-2">
            <span className="w-1 h-5 bg-black inline-block" />
            MY CARS
          </h2>
          <span className="text-xs text-gray-400 ml-3.5">
            {myCars.length} LISTED
          </span>
        </div>

        <Link
          href="/add-car"
          className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-gray-800 transition"
        >
          + ADD CAR
        </Link>
      </div>

      {myCars.length === 0 ? (
        <div className="border-2 border-dashed border-gray-300 rounded-lg py-20 text-center">
          <p className="text-sm text-gray-500 mb-4">
            you haven't add any car yet
          </p>
          <Link
            href="/add-cars"
            className="inline-block border-2 border-black text-sm font-medium px-5 py-2.5 rounded-md hover:bg-black hover:text-white transition"
          >
            Add your first car
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {myCars.map((car) => (
            <div
              key={car._id}
              className="border-2 border-black rounded-lg overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                  <span
                    className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
                      car.status === "Available"
                        ? "bg-white text-black border border-black"
                        : "bg-black text-white"
                    }`}
                  >
                    {car.status}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="font-bold text-lg truncate">{car.name}</h3>
                    <span className="font-bold text-lg whitespace-nowrap">
                      {car.price} Taka<span className="text-xs font-normal">/day</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Gear width={14} height={14} />
                      {car.transmission}
                    </span>
                    <span>{car.bookingCount} bookings</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2 px-5 pb-5">
                <Link
                  href={`/allcars/${car._id}`}
                  className="text-center border border-black text-xs font-medium py-2.5 rounded-md hover:bg-black hover:text-white transition"
                >
                  VIEW
                </Link>
                  <Deletefromcars carId={car}></Deletefromcars>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyCarsPage;