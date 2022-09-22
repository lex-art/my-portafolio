import React from 'react'
import './style.scss'

export const Switch = ({ idKey, isToggled, onToggle, classBg, classIcon}) => {
    return (
        <label className='switch'>
            <input 
                id={idKey}
                type={'checkbox'} 
                checked={isToggled} 
                onChange={onToggle}
            />
            <samp className={`slider ${classBg} ${classIcon}`}></samp>
        </label>
    )
}
