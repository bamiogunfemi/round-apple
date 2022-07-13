import React, { useState, createContext } from "react";
import {
  AppContextProps,
  ChildrenProps,
  LinkProps,
} from "../types/types.interface";

const defaultState = {
  showElement: false,
  solidColor: "#242429",
  showCustomize: false,
  links: [],
};
export const AppContext = createContext<AppContextProps>(defaultState);

export const AppContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [showElement, setShowElement] = useState<boolean>(false);
  const [solidColor, setSolidColor] = useState<string>("#242429");
  const [showCustomize, setShowCustomize] = useState<boolean>(false);
  const [links, setLinks] = useState<LinkProps[]>([]);
  return (
    <AppContext.Provider
      value={{
        showElement,
        setShowElement,
        solidColor,
        setSolidColor,
        showCustomize,
        setShowCustomize,
        links,
        setLinks,
      }}>
      {children}
    </AppContext.Provider>
  );
};
