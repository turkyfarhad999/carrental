const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

// Get all cars
export const getallCars = async (params = {}) => {
  const query = new URLSearchParams();

  if (params.search) {
    query.append("search", params.search);
  }

  if (params.sort) {
    query.append("sort", params.sort);
  }

  const res = await fetch(
    `${SERVER_URL}/cars?${query.toString()}`,
    {
      
      cache: "no-store",
    }
  );

  if (!res.ok) return [];

  return await res.json();
};


// Get single car
export const getCarById = async (id,) => {
  
  const res = await fetch(
    `${SERVER_URL}/cars/${id}`,
    {
    
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  return await res.json();
};


// Add a car
export const postAcar = async (carData, token) => {
  const res = await fetch(
    `${SERVER_URL}/cars`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(carData),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to add car");
  }

  return await res.json();
};


// Get cars owned by a user
export const getMyCars = async (email, token) => {
  const res = await fetch(
    `${SERVER_URL}/cars?ownerEmail=${encodeURIComponent(email)}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) return [];

  return await res.json();
};


// Get booked cars
export const getBookedCars = async (userEmail, token) => {
  const res = await fetch(
    `${SERVER_URL}/booked-cars?userEmail=${encodeURIComponent(userEmail)}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) return [];

  return await res.json();
};


// Add booked car
export const addBookedCars = async (carData, token) => {
  const res = await fetch(
    `${SERVER_URL}/booked-cars`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(carData),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to add booking");
  }

  return await res.json();
};


// Update car
export const updateCar = async (
  id,
  updateData = { status: "booked" },
  token
) => {
  const res = await fetch(
    `${SERVER_URL}/cars/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updateData),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update car");
  }

  return await res.json();
};


// Delete car from allCars
export const deleteCarsFromAllcars = async (id, token) => {
  const res = await fetch(
    `${SERVER_URL}/cars/${id}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to delete car");
  }

  return await res.json();
};


// Delete booking
export const deleteCarsFromBookedcars = async (id, token) => {
  const res = await fetch(
    `${SERVER_URL}/booked-cars/${id}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to delete booking");
  }

  return await res.json();
};


// Update booked car
export const updateBookCar = async (
  id,
  updateData = { status: "Available" },
  token
) => {
  const res = await fetch(
    `${SERVER_URL}/booked-cars/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updateData),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update booked car");
  }

  return await res.json();
};