'use client';

import { SessionProvider } from 'next-auth/react';

type Props = {
  children: JSX.Element;
};

export default function Providers({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
