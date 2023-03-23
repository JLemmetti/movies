'use client';

import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type Props = {
  children: JSX.Element;
  session: Session;
};

export default function Providers({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
