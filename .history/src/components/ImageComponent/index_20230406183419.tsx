import { ReactNode } from 'react';

interface ImageComponentProps {
  children: ReactNode;
}

export function ImageComponent({ children }: ImageComponentProps) {
  return (
    <>
      <h1>ImageComponent</h1>
      {children}
    </>
  );
}
