'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

type Props = {
  href: string;
  children: string;
};

export default function NavLink({ href, children }: Props): JSX.Element {
  // Workaround for https://github.com/vercel/next.js/pull/42299
  const layoutSegments = useSelectedLayoutSegments();
  const segment = layoutSegments[0] ?? '';

  const active = href === `/${segment}`;

  return (
    <Link className={active ? 'underline underline-offset-4' : ''} href={href}>
      {children}
    </Link>
  );
}
