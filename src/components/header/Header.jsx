import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/theme-context'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import constants from '../../constants'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import logo from '../../assets/img/logo.svg'
import logoLight from '../../assets/img/logo_light.svg'
import './styles.scss';
import { Switch } from '../Swicth/Switch'

export const Header = () => {
    //const [isDark, setIsDark] = useState(false)
    const { theme, setTheme } = useContext(ThemeContext)
    const { t } = useTranslation()
    const { changeLanguage, language } = useI18next()
    const isCurrentDark = theme === constants.themes.DARK
    const isEs = language === constants.themes.ES
    const changeLg = isEs ? constants.themes.EN : constants.themes.ES

    //Set the default theme in the localStorage
    const handleThemeChange = () => {
        const selectedTheme = isCurrentDark ? constants.themes.LIGHT : constants.themes.DARK
        setTheme(selectedTheme)
        window.localStorage.setItem(constants.themes.DEFAULT_THEME, selectedTheme)
    }

    return (
        <header className='container-header'>
            <Link to="/#home">
                <img src={isCurrentDark ? logo : logoLight} alt="Logo" className='logo' />
            </Link>
            <nav>
                <Link className='animation-link' to="/#home">{t('home')}</Link>
                <Link className='animation-link' to="/#portafolio" >{t('portafolio')}</Link>
                <Link className='animation-link' to="/#about">{t('about')}</Link>
                <Switch
                    key={'theme'}
                    idKey={'theme'}
                    isToggled={!isCurrentDark}
                    onToggle={() => handleThemeChange()}
                    classBg={'slider-theme'}
                    classIcon={''}
                />
                <Switch
                    key={'language'}
                    idKey={'language'}
                    isToggled={!isEs}
                    onToggle={() => changeLanguage(changeLg)}
                    classBg={'slider-lg'}
                    classIcon={!isCurrentDark ? 'icon-lg-activate' : ''}
                />
            </nav>
        </header>
    )
}

