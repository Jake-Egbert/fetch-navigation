import { createContext, useState } from "react";

export const BrowseContext = createContext();

export function BrowseProvider({ children }) {
  const [history, setHistory] = useState([]);
  const [lastCategory, setLastCategory] = useState(null);

  const addToHistory = (entry) => {
    setHistory((prev) => [...prev, entry]);
  };

  return (
    <BrowseContext.Provider
      value={{ history, addToHistory, lastCategory, setLastCategory }}
    >
      {children}
    </BrowseContext.Provider>
  );
}
