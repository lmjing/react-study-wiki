import { createContext, useContext, useEffect, useState } from "react";

type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType | null>(null);

interface DarkModeProviderType {
  children: React.ReactNode;
}

export const DarkModeProvider = ({ children }: DarkModeProviderType) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    const isDark = !darkMode;
    updateDarkMode(isDark);
  };

  const updateDarkMode = (darkMode: boolean) => {
    setDarkMode(darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
