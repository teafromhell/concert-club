import './Posts.scss'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { IPosts } from '../../types/data'

interface IUserId {
    id: number;
}


const Posts: React.FC<IUserId> = ({ id }): JSX.Element => {

    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async (): Promise<void> => {
        try {
            const response =
                await axios.get('https://jsonplaceholder.typicode.com/posts')
            const data = await response.data
            setPosts([...data])
        } catch (e) { console.log(e) }

    }
    return (
        <div className='posts'>
            <h2 className='posts__header'>Посты</h2>
            <div className='posts__container'>
            {posts.filter((post) => post.userId === id)
                .map((post, index): JSX.Element | null => {
                    if (index > 6) {
                        return (
                            <div className='posts__single-post'>
                                <div className='posts__single-post-header'>
                                    <h4>{post.title}</h4>
                                    <p>12.01.2022</p>   
                                </div>
                                <p className='posts__text'>{post.body}</p>
                                
                            </div>
                        )
                    } else {
                        return null
                    }

                })
            }
            </div>
            <div className="app">
                <p>Test Test Test Test Test Test tttttttttt</p>
                </div>
        </div>
    )
}

export default Posts