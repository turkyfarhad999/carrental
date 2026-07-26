export const getallCars = async (params = {}) => {
  const query = new URLSearchParams();

  if (params.search) query.append('search', params.search);
  if (params.sort) query.append('sort', params.sort);

  // Dynamic URL: http://localhost:8000/cars?search=bmw&sort=low-to-high
  const res = await fetch(`http://localhost:8000/cars?${query.toString()}`, {
    cache: 'no-store', // Real-time UI update
  });

  if (!res.ok) return [];
  return await res.json();
};

export const getCarById = async (id) => {
  const res = await fetch(`http://localhost:8000/cars/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) return null;
  return await res.json();
};