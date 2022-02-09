import {createContext} from 'react';

export enum Theme {
    Dark = 'dark',
    Light = 'light',
}

export type ThemeType = {
    theme: Theme;
    setTheme: (Theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeType>({} as ThemeType);

