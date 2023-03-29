'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const Filters = (): JSX.Element => {
  const searchParams = useSearchParams();
  const currentRating = searchParams?.get('rating');
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams ?? '');
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const buttonHandler = (rating: string) => {
    if (currentRating !== rating) {
      router.push(pathname + '?' + createQueryString('rating', rating));
    } else {
      router.push(pathname ?? '');
    }
  };

  const Filter = ({ rating }: { rating: string }) => {
    return (
      <button
        className={`capitalize ${
          currentRating === rating
            ? 'outline-dashed outline-4 outline-offset-2 outline-slate-500'
            : ''
        }`}
        onClick={() => buttonHandler(rating)}
      >
        {rating}
      </button>
    );
  };

  return (
    <ul className="flex space-x-3">
      <li>
        <Filter rating="good" />
      </li>
      <li>
        <Filter rating="meh" />
      </li>
      <li>
        <Filter rating="bad" />
      </li>
    </ul>
  );
};
