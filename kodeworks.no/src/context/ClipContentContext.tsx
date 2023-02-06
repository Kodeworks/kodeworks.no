import { createContext, useContext, useEffect, useState } from 'react';

interface ClipContentContextInterface {
  clipMode: boolean;
  changeClipMode: (mode: boolean) => void;
}

export const ClipContentContext = createContext<ClipContentContextInterface>({
  clipMode: false,
  changeClipMode: () => {},
});

interface Prop {
  children: JSX.Element | JSX.Element[];
}

export function ClipContentProvider({ children }: Prop): JSX.Element {
  const [clipMode, setClipMode] = useState(false);

  function changeClipMode(mode: boolean): void {
    setClipMode(mode);
  }

  return (
    <ClipContentContext.Provider value={{ clipMode, changeClipMode }}>
      {children}
    </ClipContentContext.Provider>
  );
}

export function useClipContent(clipMode?: boolean): ClipContentContextInterface {
  const context = useContext(ClipContentContext);

  useEffect(() => {
    if (context) {
      context.changeClipMode(clipMode || false);
    }
  });

  if (!context) {
    throw new Error('Cannot use useClipContent outside of ClipContentContext');
  }

  return context;
}
