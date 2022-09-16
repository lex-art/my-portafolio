import React, { useContext } from 'react'
import { ThemeContext } from '../../context/theme-context'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import constants from '../../constants'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import logo from '../../../public/static/img/logo.svg'
import './styles.scss';

export const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { t } = useTranslation()
    const { languages, changeLanguage } = useI18next()
    //Set the default theme in the localStorage
    const handleThemeChange = () => {
        const isCurrentDark = theme === constants.themes.DARK
        const selectedTheme = isCurrentDark ? constants.themes.LIGHT : constants.themes.DARK
        setTheme(selectedTheme)
        window.localStorage.setItem(constants.themes.DEFAULT, selectedTheme)
    }

    return (
        <header className='container-header'>
            <img src={logo} alt="Logo" />
            <nav>
                <ul>
                    <li>
                        <Link>{t('home')}</Link>
                    </li>
                    <li>
                        <Link>{t('portafolio')}</Link>
                    </li>
                    <li>
                        <Link>{t('contact')}</Link>
                    </li>
                    <li>
                        <input type={'checkbox'} />
                    </li>
                    <li>
                        <input type={'checkbox'} />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

