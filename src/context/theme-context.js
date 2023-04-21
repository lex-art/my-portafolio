import { createContext } from "react";

export const ThemeContext = createContext({
    theme: "",
    //The funcionco will receive "light" or "dark" as a parameter
    toggleTheme: (theme) => { }
})

export const Provider = ThemeContext.Provider;
export const Consumer = ThemeContext.Consumer;

export default ThemeContext;