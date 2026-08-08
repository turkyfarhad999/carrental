import SearchBar from '@/Componnet/Searchbar/Searchbar';
import SortSelect from '@/Componnet/Searchbar/SortSelect';
import { auth } from '@/lib/auth';
import { getallCars } from '@/lib/func';
import { ArrowRight, Gear } from "@gravity-ui/icons";
import { headers } from 'next/headers';
import Image from "next/image";
import Link from 'next/link';

import React from 'react';

const page = async({searchParams}) => {
    const {token}=await auth.api.getToken({
        headers: await headers()
       })
       console.log("from all car",token)
    const resolvedParams = await searchParams;
    const data=await getallCars(resolvedParams,token)
    return (
       <section className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto px-6 py-20 border-t border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h2 className="text-3xl font-bold tracking-wide flex items-center gap-2">
          <span className="w-1 h-5 bg-black inline-block" />
          THE FLEET
        </h2>

        {/* Search & Sort Controls */}
        <div className="flex items-center gap-3">
          <SearchBar></SearchBar>
          <SortSelect />
        </div>
      </div>


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
    {data.map((car) => (
      <div 
        key={car._id}
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
        <div className=" w-full px-5 pb-5">
          <Link href={`/allcars/${car._id}`} className="block text-center w-full border-2 border-black text-sm font-medium py-2.5 rounded-md hover:bg-black hover:text-white transition">
            VIEW DETAILS
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>
    );
};

export default page;