'use client'
import { addBookedCars } from '@/lib/func';
import React, { useState } from 'react';

const Addcarbtn = ({car}) => {
     const [loading, setLoading] = useState(false);
    const handleAdd=()=>{
  
  addBookedCars(car)

 }
    return (
        <div>
            <button 
            disabled={loading}
            onClick={handleAdd} className="w-full bg-black text-white text-sm font-medium py-3 rounded-md hover:bg-gray-800 transition">
            BOOK THIS CAR
          </button>
        </div>
    );
};

export default Addcarbtn;