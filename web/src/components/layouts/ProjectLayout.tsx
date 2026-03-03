import { useClipContent } from '../../context/ClipContentContext';

import type { JSX } from "react";

interface Prop {
  children: JSX.Element;
}

export default function ProjectLayout({ children }: Prop): JSX.Element {
  useClipContent('dark-mode');

  return <>{children}</>;
}
