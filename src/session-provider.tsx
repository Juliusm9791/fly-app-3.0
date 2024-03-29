'use client';
import { Session } from 'next-auth';
import { SessionProvider as Provider } from 'next-auth/react';

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export default function SessionProvider({ children, session }: Props) {
  console.log('session ', session);
  return (
    <Provider session={session} refetchInterval={60}>
      {children}
    </Provider>
  );
}
