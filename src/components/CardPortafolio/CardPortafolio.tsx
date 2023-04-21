import { useTranslation } from 'gatsby-plugin-react-i18next'
import React from 'react'

export const CardPortafolio = ({
    title,
    description,
    image,
    url,
}) => {
  const { t } = useTranslation()

  return (
    <div className='wrapper-card-portafolio'>
<div className="card-portafolio">
        <img src={image}alt="clipBait" />
        <div className='text-container'>
          <h3 className='card-title'>{t(title)}</h3>
          <p>{t(description)}</p>
        </div>
    </div>
    </div>
    
  )
}
