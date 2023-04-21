import React from 'react'
import './style.scss'
import profile from '../../assets/img/profile.jpg'
import { useTranslation } from 'react-i18next'

export const About = () => {
  const { t } = useTranslation()
  
  return (
    <section id='about' className='container-portafolio'>

      <div className='description-container'>
        <img src={profile} alt="me" height={300} />
      </div>

      <div className='description-container'>
        <h1 className="">{t('greeting')}</h1>
        <h3 className="">{t('myProfession')}</h3>
        <p>{t('aboutMe')}</p>
      </div>

    </section>
  )
}
