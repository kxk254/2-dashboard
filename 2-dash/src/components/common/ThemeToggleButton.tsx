import React from "react";
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();
  return (
    <button>
      <svg></svg>
      <svg></svg>
    </button>
  );
};
