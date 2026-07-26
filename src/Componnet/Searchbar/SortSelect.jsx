'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function SortSelect() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSort = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('sort', value);
    } else {
      params.delete('sort');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      defaultValue={searchParams.get('sort') || ''}
      onChange={(e) => handleSort(e.target.value)}
      className="border border-black px-3 py-1.5 rounded-md text-sm font-medium outline-none bg-white"
    >
      <option value="">Default Sort</option>
      <option value="low-to-high">Price: Low to High</option>
      <option value="high-to-low">Price: High to Low</option>
    </select>
  );
}