import { useEffect, useState } from "react";
import "../css/DarkModeToggle.css";

const STORAGE_KEY = "curriculum-portfolio-theme";
const DARK_THEME_CLASS = "dark-theme";
const SYSTEM_THEME_QUERY = "(prefers-color-scheme: dark)";

function getStoredTheme() {
  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return null;
}

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasStoredPreference, setHasStoredPreference] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(SYSTEM_THEME_QUERY);
    const storedTheme = getStoredTheme();
    const nextIsDarkMode = storedTheme ? storedTheme === "dark" : mediaQuery.matches;

    setHasStoredPreference(Boolean(storedTheme));
    setIsDarkMode(nextIsDarkMode);
    setIsReady(true);
    document.body.classList.toggle(DARK_THEME_CLASS, nextIsDarkMode);

    const handleSystemThemeChange = (event) => {
      if (getStoredTheme()) {
        return;
      }

      setIsDarkMode(event.matches);
      document.body.classList.toggle(DARK_THEME_CLASS, event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemThemeChange);

      return () => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      };
    }

    mediaQuery.addListener(handleSystemThemeChange);

    return () => {
      mediaQuery.removeListener(handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    document.body.classList.toggle(DARK_THEME_CLASS, isDarkMode);
  }, [isDarkMode, isReady]);

  const handleChange = () => {
    if (!isReady) {
      return;
    }

    const nextIsDarkMode = !isDarkMode;

    setIsDarkMode(nextIsDarkMode);
    setHasStoredPreference(true);
    window.localStorage.setItem(
      STORAGE_KEY,
      nextIsDarkMode ? "dark" : "light",
    );
  };

  const toggleLabel = hasStoredPreference
    ? isDarkMode
      ? "Passa alla light mode"
      : "Passa alla dark mode"
    : isDarkMode
      ? "Tema scuro attivo dalla preferenza di sistema"
      : "Tema chiaro attivo dalla preferenza di sistema";

  return (
    <label className="dark-mode-toggle" htmlFor="dark-mode-toggle">
      <input
        id="dark-mode-toggle"
        className="dark-mode-switch-input"
        type="checkbox"
        role="switch"
        aria-checked={isDarkMode}
        aria-label={toggleLabel}
        checked={isDarkMode}
        onChange={handleChange}
      />
      <span className="dark-mode-switch" aria-hidden="true">
        <span className="dark-mode-switch-circle"></span>
      </span>
      <span className="dark-mode-toggle__sr-only">{toggleLabel}</span>
    </label>
  );
}