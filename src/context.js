import { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode };
        case "SET":
            return { darkMode: action.payload };
        default:
            return state;
    }
};

const init = () => {
    try {
        const saved = localStorage.getItem('hardik_theme');
        if (saved !== null) return { darkMode: saved === 'dark' };
    } catch (e) {
        // ignore
    }
    return { darkMode: true };
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, undefined, init);

    useEffect(() => {
        try {
            const theme = state.darkMode ? 'dark' : 'light';
            localStorage.setItem('hardik_theme', theme);
            document.documentElement.setAttribute('data-theme', theme);
        } catch (e) {}
    }, [state.darkMode]);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    );
};