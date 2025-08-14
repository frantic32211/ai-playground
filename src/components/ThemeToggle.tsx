import { useEffect, useState } from "react";
import { useApp } from '../contexts/AppContext'

export default function ThemeToggle() {
  const { theme, setTheme } = useApp()

  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Runs once on client
  useEffect(() => {
    setMounted(true);

    // Check localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  if (!mounted) return null; // Avoid SSR mismatch

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setTheme(theme === 'light' ? 'dark' : 'light')
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <button
      aria-pressed={darkMode}
      onClick={toggleTheme}
      className="p-2 rounded border border-gray-300 dark:border-gray-600 transition-colors duration-200"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
