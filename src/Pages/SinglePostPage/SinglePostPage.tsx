import './SinglePostPage.scss'
import React, { MutableRefObject, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { useAppSelector } from '../../utils/Hook';
import Comments from '../../components/Comments/Comments';


const SinglePostPage: React.FC = (): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null)
    const { title } = useParams()
    const posts = useAppSelector(state => state.posts.posts)

    const [isOpen, setOpen] = useState(false)


    const handleOpenForm:React.MouseEventHandler<HTMLButtonElement> =():void=>{
        
        setOpen(true)
        inputRef.current!.focus()
    }

    return (
        <>
            <Navbar />
            <div>s</div>
            <div className='post-page'>
                {posts.filter(post => post.title === title)
                    .map((post) => {
                        return (
                            <>
                                <div className='post-page__post'>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </div>
                                <h2>Комментарии:</h2>
                                <Comments userId={post.userId} />
                                
                                
                            </>
                        )
                    })

                }
                <button onClick={handleOpenForm}>Написать комментарий</button>
                {isOpen && (
                    <form  className='post-page__submit' action="">
                        <input ref={inputRef}   type="text" name='name' />
                        <input type="text" name='email' />
                        <textarea name="comment" id="" cols={30} rows={10}></textarea>
                        <button>Отправить</button>
                    </form>
                )}
            </div>
        </>
    )
}

export default SinglePostPage