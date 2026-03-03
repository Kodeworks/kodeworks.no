import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ClipContentContextInterface {
  clipMode: string;
  changeClipMode: (mode: string) => void;
}

export const ClipContentContext = createContext<ClipContentContextInterface>({
  clipMode: '',
  changeClipMode: () => {},
});

interface Prop {
  children: ReactNode;
}

export function ClipContentProvider({ children }: Prop) {
  const [clipMode, setClipMode] = useState('');

  function changeClipMode(mode: string): void {
    setClipMode(mode);
  }

  return (
    <ClipContentContext.Provider value={{ clipMode, changeClipMode }}>
      {children}
    </ClipContentContext.Provider>
  );
}

export function useClipContent(clipMode?: string): ClipContentContextInterface {
  const context = useContext(ClipContentContext);

  useEffect(() => {
    if (context) {
      context.changeClipMode(clipMode || '');
    }
  });

  if (!context) {
    throw new Error('Cannot use useClipContent outside of ClipContentContext');
  }

  return context;
}
