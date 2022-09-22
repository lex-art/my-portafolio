import React from 'react'
import './styles.scss';

export const Aside = () => {
  return (
    <aside className='container-aside'>
      <div className='wraper-icon'>
        <div className="container-icon">
          <a href="https://github.com/lex-art" target='_blank' className='link-icon'>
            <i className='icon icon-git'></i>
          </a>
          <a href="https://www.instagram.com/this.al3x" target='_blank' className='link-icon'>
            <i className='icon icon-ig'></i>
          </a>
          <a href="https://twitter.com/LexArt8" target='_blank' className='link-icon'>
            <i className='icon icon-tw'></i>
          </a>
        </div>
      </div>
    </aside>
  )
}
