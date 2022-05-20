import './Header.scss'

import React from 'react'
import {BsChevronRight, BsChevronLeft } from 'react-icons/bs'

const Header:React.FC = ():JSX.Element => {
  return (
    <div className='header'>
        <div className='header__bandname'> 
            <h2>Twenty One Pilots</h2>
            <h4>22.02.23 в 21:00</h4>
        </div>
        <div className='header__btns'>
            <div className='header__arrow'><BsChevronLeft /></div>
            <button>Купить билет</button>
            <div className='header__arrow'><BsChevronRight /></div>
        </div>
    </div>
  )
}

export default Header