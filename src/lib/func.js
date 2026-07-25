export const getallCars =async()=>{
const res = await fetch('http://localhost:8000/cars')
const data = await res.json();
return data;
}