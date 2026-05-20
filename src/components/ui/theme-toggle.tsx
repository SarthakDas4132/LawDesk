"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
      className="relative w-9 h-9 flex items-center justify-center rounded-full bg-[#f2f0ea] dark:bg-[#1f1f1f] border border-[#e5e0d8] dark:border-[#333333] text-[#4b5563] dark:text-[#a3a3a3] hover:text-[#111827] dark:hover:text-[#fafafa] transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
