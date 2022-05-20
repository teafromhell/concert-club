import './UserPage.scss'
import Navbar from '../../components/Navbar/Navbar'
import React from 'react'
import { useParams } from 'react-router-dom'
import { IUsers } from '../../types/data';
import Posts from '../../components/Posts/Posts';

const UserPage = ({ users }: { users: IUsers[] }): JSX.Element => {
    const { name } = useParams()
    return (
        <>
            <Navbar />
            <div>s</div>

            {users.filter(user => user.name === name)
                .map((user, index) => {
                    return (
                        <>
                            <table className="user">
                                <tbody>
                                    <tr >
                                        <td width={60}></td>
                                        <td colSpan={5} style={{ padding: '11px 0 13px 18px' }} >
                                            <h3 className='user__username'>{user.username}</h3>
                                        </td>
                                        <td width={60}></td>
                                    </tr>
                                    <tr className='user__second-row'>
                                        <td width={60}></td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.website}</td>
                                        <td>{user.company.name}: {user.company.bs}</td>
                                        <td width={60}></td>
                                    </tr>
                                    <tr className='user__third-row'>
                                        <td width={60}></td>
                                        <td colSpan={5}>
                                            <button>Написать сообщение</button>
                                            <button>Предложить сходить на концерт</button>

                                        </td>
                                        <td width={60}></td>
                                    </tr>
                                </tbody>
                            </table>
                            
                                <Posts id={user.id}/>
                            
                        </>
                    )
                })
            }



        </>
    )
}

export default UserPage