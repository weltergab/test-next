import { ReactNode } from 'react';

interface TopbarProps {
  children: ReactNode;
}

export function Topbar({ children }: TopbarProps) {
  return (
    <>
      <h1>Topbar</h1>
      {children}
    </>
  );
}
