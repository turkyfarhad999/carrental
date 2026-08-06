'use client'
import { addBookedCars, updateCar } from '@/lib/func';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Addcarbtn = ({car,userEmail}) => {
  const router=useRouter()
     const [loading, setLoading] = useState(false);
     const isBooked = car.status !== "Available";
    const handleAdd=async()=>{
         if(!userEmail){
          router.push('/login')
          return
         }
      const updatecar=await updateCar(car._id,{bookedBy:userEmail})
      const bookedCar={
        ...updatecar,
        carId:car._id,
        userEmail:userEmail,
        bookedBy:userEmail
     
      }
  await addBookedCars(bookedCar)
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