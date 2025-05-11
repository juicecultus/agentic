"use client";
import { useEffect } from "react";

export default function ThemeClient() {
  useEffect(() => {
    const setTheme = () => {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-bs-theme", isDark ? "dark" : "light");
    };
    setTheme();
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", setTheme);
    return () => mq.removeEventListener("change", setTheme);
  }, []);
  return null;
}
