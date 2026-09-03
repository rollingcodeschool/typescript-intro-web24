import { createContext } from "react";
import type { ThemeContextType } from "../interfaces/theme";

export const ThemeContext = createContext<ThemeContextType | null>(null);
