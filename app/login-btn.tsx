'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import UserInformation from './user-information';
import Image from 'next/image';

export default function Component() {
  const { data: session } = useSession();
  const avatarUrl = session?.user?.image ?? '';

  if (session) {
    return (
      <div className="flex items-center space-x-2">
        <p>Signed in as {session.user?.email}</p>
        <Image
          className="rounded-full"
          src={avatarUrl}
          priority
          width="40"
          height="40"
          alt="avatar"
        />
        <button onClick={() => signOut()}>Sign out</button>
        {/* <UserInformation data={session.user} /> */}
      </div>
    );
  }
  return (
    <div className="flex items-center space-x-2">
      <p>Not signed in</p>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
