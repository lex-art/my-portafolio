import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Header } from '../../components/Header/Header'
import myToy from "../../../public/static/img/toy.svg"
import './style.scss'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <section id='home' className="container-background">    
        <Header /> 
        <div className='container-home'>
          <div className='container-info'>
            <div>
              <h1 className="title-text">{t('greeting')}</h1>
              <h3 className="sub-title-text">{t('myProfession')}</h3>
            </div>
          </div>
          <div className='container-info'>
            <img src={myToy} alt="me" width="700px" height="700px" />
          </div>
        </div>
    </section>
  )
}
