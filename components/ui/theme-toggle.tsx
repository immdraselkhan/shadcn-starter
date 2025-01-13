"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

type ThemeToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: React.HTMLProps<HTMLElement>["className"];
};

export default function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={className}
      {...props}
    >
      <Sun className="h-5 w-5 dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
    </Button>
  );
}
