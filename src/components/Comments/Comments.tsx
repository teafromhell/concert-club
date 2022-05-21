import './Comments.scss'
import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../utils/Hook';
import { fetchComments } from '../../store/slices/commentSlice';
import { IComments } from '../../types/data'

interface ICommentsProps {
    userId: number;
}

const Comments: React.FC<ICommentsProps> = ({ userId }): JSX.Element => {
    const comments = useAppSelector(state => state.comments.comments)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])

    return (
        <>
            {comments.filter((comment: IComments): boolean => comment.postId === userId)
                .map((comment: IComments): JSX.Element => {
                    return (
                        <div className='comment'>
                            <div>
                                <h4>{comment.email}</h4>
                                <h3>{comment.name}</h3>
                                <p>{comment.body}</p>
                            </div>
                        </div>
                    )
                })}
        </>
    )
}

export default Comments