import React, { useState, useEffect} from 'react'
import { CardPortafolio } from '../../components/CardPortafolio/CardPortafolio'
import project from '../../assets/img/pistilo-project.jpg'
import languages from '../../assets/img/languages.jpg'
import reactJs from '../../assets/img/reactJs.png'
import enapsys from '../../assets/img/enapsys.png'
import Slider from 'react-slick'
import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const isBrowser = typeof window !== "undefined"

const dataPortafolio = [
  {
    title: 'programmingLanguages',
    description: 'descriptionLanguages',
    image: languages,
    link: 'https://www.google.com'
  },
  {
    title: 'myFrameworks',
    description: 'descriptionFrameworks',
    image: reactJs,
    link: 'https://www.google.com'
  },
  {
    title: 'projects',
    description: "descriptionProjects",
    image: project,
    link: 'https://www.google.com'
  },
  {
    title: 'work',
    description: "descriptionWork",
    image: enapsys,
    link: 'https://www.google.com'
  },
]
export const Portafolio = () => {

  const [windowSize, setWindowSize] = useState({
    width: 2000
  })


  useEffect(() => {
    if(isBrowser){
      setWindowSize({
        width: window.innerWidth
      })
      window.addEventListener('resize', handleResize)
    }
    return () => {
      if(isBrowser){
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [isBrowser])

  const handleResize = () => {
    if(isBrowser){
      setWindowSize({
        width: window.innerWidth
      })
    }
  }

  const settingsSlider = {
    className: 'center',
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          className: 'center',
          centerMode: false,
          centerPadding: "60px",
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 5000,
          cssEase: 'linear',
          pauseOnHover: true,
          arrows: true,
        }
      },
      
    ]
  }

  return (
    <section id='portafolio' className='container-portafolio'>
        <div className="slides">
        
          <div 
          className='container-slide'  
          style={{
              width:(windowSize.width / 1.2).toFixed(2) + 'px'
            }}>
              
            <Slider {...settingsSlider}>
          
             { dataPortafolio.map((item) => (
                <CardPortafolio
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  link={item.link}
                />
              ))}  
          </Slider>
          </div>
    
        </div>
    </section>
  )
}
