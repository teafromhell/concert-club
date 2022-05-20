import './ConcertMainPage.scss'

import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import ConcertInfo from '../../components/ConcertInfo/ConcertInfo'
import { IUsers } from '../../types/data'

const ConcertMainPage = ({users}:{users: IUsers[]}):JSX.Element => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <ConcertInfo users={users}/>
    </div>
  )
}

export default ConcertMainPage