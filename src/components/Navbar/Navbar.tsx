import './Navbar.scss'

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar:React.FC = ():JSX.Element => {
  return (
    <nav className='navbar'>
         <Link to={'/'} className='navbar__name'>CONCERT CLUB</Link>
        <div className='navbar__btns'>
            <button>Версия для слабовидящих</button>
            <button>Мой профиль</button>
        </div>
    </nav>
  )
}

export default Navbar