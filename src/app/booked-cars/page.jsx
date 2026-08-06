import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getBookedCars } from "@/lib/func";
import Image from "next/image";
import { Button } from "@heroui/react";
import DeleteFromBooked from "./DeleteFromBooked";

const BookedCarsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const bookedCars = await getBookedCars(session.user.email);
  console.log(bookedCars)

  return (
    <section className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold tracking-wide flex items-center gap-2 mb-2">
        <span className="w-1 h-5 bg-black inline-block" />
        BOOKED CARS
      </h2>
      <p className="text-sm text-gray-400 mb-8 ml-3.5">
        {bookedCars.length} ACTIVE BOOKING{bookedCars.length !== 1 && "S"}
      </p>

      {bookedCars.length === 0 ? (
        <div className="border-2 border-dashed border-gray-300 rounded-lg py-20 text-center">
          <p className="text-sm text-gray-500">
          you haven't booked any car
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookedCars.map((booking) => (
            <div
              key={booking._id}
              className="border-2 border-black rounded-lg overflow-hidden flex flex-col sm:flex-row"
            >
              {/* Car image */}
              <div className="relative w-full sm:w-48 h-40 sm:h-auto shrink-0">
                <Image
                  src={booking.image || booking.carImage}
                  alt={booking.name || booking.carName}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {booking.name || booking.carName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Booked by: {session.user.name || booking.userEmail || booking.customerEmail}
                  </p>
                  {(booking.startDate || booking.endDate) && (
                    <p className="text-sm text-gray-500">
                      {booking.startDate} → {booking.endDate}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {booking.status && (
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        booking.status === "booked"
                          ? "bg-black text-white"
                          : "bg-gray-100 border border-gray-300"
                      }`}
                    >
                      {booking.status}
                    </span>
                  )}
                  {booking.price && (
                    <span className="font-bold text-lg whitespace-nowrap">
                      {booking.price} Taka
                      <span className="text-xs font-normal">/day</span>
                    </span>
                  )}
                 <DeleteFromBooked booking={booking}></DeleteFromBooked>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BookedCarsPage;