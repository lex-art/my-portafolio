import constants from "../constants"

const isBrowser = typeof window !== "undefined"

export const getDefaultTheme = () => {
    const isBrowserDefaultDark = () => !isBrowser? constants.themes.DARK : window.matchMedia(`(${constants.themes.PREFERS_COLOR_SCHEME}: ${constants.themes.DARK})`).matches
    const localStorageTheme = (isBrowser && window.localStorage.getItem(constants.themes.DEFAULT_THEME)) ?? ''
    const brouserDefault = isBrowserDefaultDark() ? constants.themes.DARK : constants.themes.LIGHT
    
    return localStorageTheme || brouserDefault
}