import './SinglePostPage.scss'
import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { useAppSelector } from '../../utils/Hook';
import Comments from '../../components/Comments/Comments';


const SinglePostPage: React.FC = (): JSX.Element => {
    const { title } = useParams()
    const posts = useAppSelector(state => state.posts.posts)

    return (
        <>
            <Navbar />

            <div >s</div>

            <div className='post-page'>
                {posts.filter((post): boolean => post.title === title)
                    .map((post): JSX.Element => {

                        return (
                            <div key={post.id}>
                                <div className='post-page__post'>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </div>
                                <h2>Комментарии:</h2>
                                <Comments id={post.id} />



                            </div>
                        )
                    }

                    )

                }


            </div>
        </>
    )
}

export default SinglePostPage