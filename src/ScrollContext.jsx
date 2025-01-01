// ScrollContext.js
import { createContext, useContext, useState, useEffect } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
