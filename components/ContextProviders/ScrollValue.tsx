import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { ScrollValue, useScrollValue } from "../../hooks";

export const ScrollValueContext = createContext<ScrollValue>("#home");
export const SetScrollValueContext = createContext<
  Dispatch<SetStateAction<ScrollValue>>
>((value) => {});

export function ScrollValueContextProvider({ children }: PropsWithChildren) {
  const [value, setValue] = useScrollValue();
  return (
    <ScrollValueContext.Provider value={value}>
      <SetScrollValueContext.Provider value={setValue}>
        {children}
      </SetScrollValueContext.Provider>
    </ScrollValueContext.Provider>
  );
}
