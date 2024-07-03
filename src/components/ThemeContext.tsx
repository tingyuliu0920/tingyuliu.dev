import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// Define the context type
type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

// Create the context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(
    window.localStorage.getItem("darkMode")?.toLowerCase() === "true" || false,
  );

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevMode) => !prevMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const contextValue: ThemeContextType = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
