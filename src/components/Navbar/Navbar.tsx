import './Navbar.scss'

import React from 'react'

const Navbar:React.FC = ():JSX.Element => {
  return (
    <nav className='navbar'>
        <h2 className='navbar__name'>CONCERT CLUB</h2>
        <div className='navbar__btns'>
            <button>Версия для слабовидящих</button>
            <button>Мой профиль</button>
        </div>
    </nav>
  )
}

export default Navbar