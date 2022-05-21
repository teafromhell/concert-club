import './Cards.scss'

import React from 'react'
import { IUsers } from '../../types/data';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../utils/Hook';


const Cards: React.FC = (): JSX.Element => {
    const users = useAppSelector(state => state.users.users)

    return (
        <div className='cards'>
            {users.map((user: IUsers): JSX.Element => {
                return (

                    <div key={user.id} className='cards__single-card'>
                        <div>
                            <h4>{user.name}</h4>
                            <p>{user.address.city}</p>
                        </div>
                        <Link to={`/${user.name}`} ><button>Смотреть Профиль</button></Link>
                    </div>

                )
            })}
        </div>
    )
}

export default Cards