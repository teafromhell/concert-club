import './Header.scss'

import React, { useState } from 'react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

const Header: React.FC = (): JSX.Element => {
  const [nonActive, setActive] = useState<string>('left')
  return (
    <div className='header'>
      <div className='header__bandname'>
        <h2>Twenty One Pilots</h2>
        <h4>22.02.23 в 21:00</h4>
      </div>
      <div className='header__btns'>
        <div onClick={() => setActive('right')}
          className={`header__arrow 
             ${nonActive === 'left' ? 'header__arrow--non-active' : ''}`}><BsChevronLeft /></div>
        <button>Купить билет</button>
        <div onClick={() => setActive('left')}
          className={`header__arrow 
            ${nonActive === 'right' ? 'header__arrow--non-active' : ''}`}><BsChevronRight /></div>
      </div>
    </div>
  )
}

export default Header