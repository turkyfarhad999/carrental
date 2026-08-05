'use client'
import { addBookedCars, updateCar } from '@/lib/func';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Addcarbtn = ({car}) => {
  const router=useRouter()
     const [loading, setLoading] = useState(false);
     const isBooked = car.status !== "Available";
    const handleAdd=async()=>{
  
      const updatecar=await updateCar(car._id)
  await addBookedCars(updatecar)
  router.refresh()
  console.log(car.status)

 }
    return (
        <div>
            <button 
            disabled={car.status==='booked'}
            onClick={handleAdd} className="w-full bg-black text-white text-sm font-medium py-3 rounded-md hover:bg-gray-800 transition">
            {car.status==="Available"?"Book this Car":"Already Booked"}
          </button>
        </div>
    );
};

export default Addcarbtn;