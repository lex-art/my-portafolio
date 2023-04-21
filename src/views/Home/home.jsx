import React, {useContext, useState, useEffect} from 'react'
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import { Header } from '../../components/Header/Header'
import myToy from "../../assets/img/toy.svg"
import { ThemeContext } from "../../context/theme-context"
import constants from '../../constants'
import './style.scss'

export const Home = () => {
  const { t } = useTranslation()
  const theme = useContext(ThemeContext)
  const { language } = useI18next()
  const isEs = language === constants.themes.ES

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth
  })

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth
    })
  }

  return (
    <section id='home' className="container-background">    
        <Header /> 
        <div className='container-info'>
          <div className='container-home'>
          <div class="left">
            <div className='wrapper-text'>
            <h1 className="title-text">{t('greeting')}</h1>
              <h3 
                className="sub-title-text"
                style={{width: isEs ? '32ch' : '28ch'}}
                >{t('myProfession')}</h3>
            </div>
          
          </div>
          <div class="right">
            <img src={myToy} alt="me" />
          </div>
        </div>
        </div>
    </section>
  )
}
