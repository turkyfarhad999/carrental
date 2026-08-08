import { methods } from "better-auth/react";
import { authClient } from "./auth-client";
import { getToken } from "./getToken";


export const getallCars = async (params = {},token) => {
  const query = new URLSearchParams();

  if (params.search) query.append('search', params.search);
  if (params.sort) query.append('sort', params.sort);

  // Dynamic URL: http://localhost:8000/cars?search=bmw&sort=low-to-high
  const res = await fetch(`http://localhost:8000/cars?${query.toString()}`, {
    headers: {
      authorization:`Bearer ${token}`
    },
    cache: 'no-store', // Real-time UI update
  });

  if (!res.ok) return [];
  return await res.json();
};

export const getCarById = async (id,token) => {
  const res = await fetch(`http://localhost:8000/cars/${id}`, {
    headers:{
      authorization:`Bearer ${token}`
    },
    cache: 'no-store',
  });

  if (!res.ok) return null;
  return await res.json();
};
export const postAcar=async(carData)=>{
    const res = await fetch('http://localhost:8000/cars',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(carData)
    })
}
export const getMyCars = async (email,token) => {
  const res = await fetch(`http://localhost:8000/cars?ownerEmail=${email}`,{
    headers:{
      authorization: `Bearer ${token}`
    }
  }); 
  return await res.json();
};
export const getBookedCars = async (userEmail,token) => {
  
  console.log(token)
  const res = await fetch(`http://localhost:8000/booked-cars?userEmail=${userEmail}`,{
    headers:{
      authorization:`Bearer ${token}`
    }
  }); 
  return await res.json();
};
export const addBookedCars=async(carData,token)=>{
  console.log("form tokenfunc ",token)
  const res= await fetch('http://localhost:8000/booked-cars',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      authorization:`Bearer ${token}`
    },
    body:JSON.stringify(carData)
  })
}
export const updateCar=async(id,updateData = { status: "booked" },token)=>{
  console.log("form tokenfunc ",token)
   const res = await fetch(`http://localhost:8000/cars/${id}`,
    {method:'PATCH',
      headers: {
      'Content-Type': 'application/json',
      authorization:`Bearer ${token}`
    },
    body: JSON.stringify(updateData)
    },
    
   )
   const data=await res.json()
   return data;

}
//deletecars
export const deleteCarsFromAllcars =async(id,token)=>{
  const res=await fetch(`http://localhost:8000/cars/${id}`,{
    method:'DELETE',
     headers:{
       authorization:`Bearer ${token}`
    }
  }
)
const data = await res.json()
return data


}
export const deleteCarsFromBookedcars =async(id,token)=>{
  const res=await fetch(`http://localhost:8000/booked-cars/${id}`,{
    method:'DELETE',
    headers:{
       authorization:`Bearer ${token}`
    }
  }
)
const data = await res.json()
return data


}
export const updateBookCar=async(id,updateData = { status: "Available" })=>{
   const res = await fetch(`http://localhost:8000/booked-cars/${id}`,
    {method:'PATCH',
      headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
    },
    
   )
   const data=await res.json()
   return data;

}

