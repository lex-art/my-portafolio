import constants from "../constants"


export const getDefaultTheme = () => {
    const isBrowserDefaultDark = () => window === undefined ? constants.themes.DARK : window.matchMedia(`(${constants.themes.PREFERS_COLOR_SCHEME}: ${constants.themes.DARK})`).matches
    const localStorageTheme = window.localStorage.getItem(constants.themes.DEFAULT_THEME)
    const brouserDefault = isBrowserDefaultDark() ? constants.themes.DARK : constants.themes.LIGHT
    
    return localStorageTheme || brouserDefault
}