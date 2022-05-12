import { createContext, useContext, useState } from 'react';

interface ClipContentContextInterface {
  clipMode: boolean,
  changeClipMode: (mode: boolean) => void
}

export const ClipContentContext = createContext<ClipContentContextInterface>(
  { clipMode: false, changeClipMode: () => {} }
);

interface Prop {
  children: JSX.Element
}

export function ClipContentProvider({ children }: Prop): JSX.Element {
  const [clipMode, setClipMode] = useState(false);

  function changeClipMode(mode: boolean): void {
    setClipMode(mode);
  }

  return (
    <ClipContentContext.Provider value={{ clipMode, changeClipMode }}>
      { children }
    </ClipContentContext.Provider>
  );
}

export function useClipContent(clipMode? : boolean): ClipContentContextInterface {
  const context = useContext(ClipContentContext);

  if (!context) {
    throw new Error('Cannot use useClipContent outside of ClipContentContext');
  }

  if (clipMode !== undefined) {
    context.changeClipMode(clipMode);
  }

  return context;
}
