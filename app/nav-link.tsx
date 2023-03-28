'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

type Props = {
  href: string;
  children: string;
};

export default function NavLink({ href, children }: Props): JSX.Element {
  const { data: session } = useSession();
  // Workaround for https://github.com/vercel/next.js/pull/42299
  const layoutSegments = useSelectedLayoutSegments();
  const segment = layoutSegments[0] ?? '';

  const active = href === `/${segment}`;

  // Hide navigation if user is not authorized
  if (!session) return <div />;

  return (
    <Link
      className={`text-slate-800 hover:text-slate-900 font-medium ${
        active ? 'underline underline-offset-4 text-slate-900' : ''
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
