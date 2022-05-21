import './UserPage.scss'
import Navbar from '../../components/Navbar/Navbar'
import React from 'react'
import { useParams } from 'react-router-dom'
import { IUsers } from '../../types/data';
import Posts from '../../components/Posts/Posts';
import { useAppSelector } from '../../utils/Hook';

const colors: string[] = ['#63B4EE', '#2B9FF2', '#547FED', '#4366E1', '#2040B0', '#0C257C']

const UserPage: React.FC = (): JSX.Element => {
    const { name } = useParams()
    const users = useAppSelector(state => state.users.users)


    const createPublications = (): JSX.Element[] => {
        const publications: JSX.Element[] = [];
        for (let i = 0; i < 6; i++) {

            publications.push(
                <div key={i} style={{ background: `${colors[i]}` }}></div>
            );
        }
        return publications;
    }

    return (
        <>
            <Navbar />
            <div>s</div>

            {users.filter((user: IUsers): boolean => user.name === name)
                .map((user: IUsers, index: number): JSX.Element => {
                    return (
                        <div key={index}>
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

                            <Posts id={user.id} />

                        </div>
                    )
                })
            }

            <div className='user__publications'>
                <h2 className='user__publications-header'>Публикации</h2>
                <div className='user__publications-container'>
                    {createPublications()}
                </div>
            </div>

        </>
    )
}

export default UserPage