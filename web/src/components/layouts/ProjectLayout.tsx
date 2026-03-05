import { useClipContent } from '../../context/ClipContentContext';
import { ReactNode } from 'react';

interface Prop {
  children: ReactNode;
}

export default function ProjectLayout({ children }: Prop) {
  useClipContent('dark-mode');

  return <>{children}</>;
}
