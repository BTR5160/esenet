import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "esen-synapse-theme";

const isBrowser = () => typeof window !== "undefined" && typeof document !== "undefined";

const getPreferredTheme = (): Theme => {
  if (!isBrowser()) {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

const applyTheme = (theme: Theme) => {
  if (!isBrowser()) {
    return;
  }

  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => getPreferredTheme());

  useEffect(() => {
    applyTheme(theme);
    if (isBrowser()) {
      window.localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme]);

  const value = useMemo<ThemeContextValue>(() => {
    const setTheme = (nextTheme: Theme) => {
      setThemeState(nextTheme);
    };

    const toggleTheme = () => {
      setThemeState((current) => (current === "dark" ? "light" : "dark"));
    };

    return { theme, setTheme, toggleTheme };
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
