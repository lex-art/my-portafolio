import React from 'react'
import './styles.scss';

export const Footer = () => {
    return (
        <footer className="footer-contain">
            <div className='wraper-icon-footer'>
            <div className="container-icon-footer">
            <a href="https://github.com/lex-art" target='_blank' className='link-icon-footer'>
                <i className='icon icon-git'></i>
            </a>
            <a href="https://www.instagram.com/this.al3x" target='_blank' className='link-icon-footer'>
                <i className='icon icon-ig'></i>
            </a>
            <a href="https://twitter.com/LexArt8" target='_blank' className='link-icon-footer'>
                <i className='icon icon-tw'></i>
            </a>
            </div>
        </div>
            </footer>
    )
}