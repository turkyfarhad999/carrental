'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <input
      type="text"
      placeholder="Search car..."
      defaultValue={searchParams.get('search') || ''}
      onChange={(e) => handleSearch(e.target.value)}
      className="border border-black px-3 py-1.5 rounded-md text-sm outline-none"
    />
  );
}