import { createContext } from "react";

export const ThemeContext = createContext({
    theme: "",
    //The funcionco will receive "light" or "dark" as a parameter
    toggleTheme: (theme) => { }
})