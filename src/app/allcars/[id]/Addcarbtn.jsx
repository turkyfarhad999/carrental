'use client'
import { authClient } from '@/lib/auth-client';
import { addBookedCars, updateCar } from '@/lib/func';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Addcarbtn = ({car,userEmail,token}) => {

  const router=useRouter()
     const [loading, setLoading] = useState(false);
     
     const isBooked = car.status !== "Available";
    const handleAdd=async()=>{
         if(!userEmail){
          router.push('/login')
          return
         }
        console.log(token)
     
      const updatecar=await updateCar(car._id,{bookedBy:userEmail},token)
      const bookedCar={
        ...updatecar,
        carId:car._id,
        userEmail:userEmail,
        bookedBy:userEmail
     
      }
  await addBookedCars(bookedCar,token)
  toast('Car added to the booked-cars List')
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