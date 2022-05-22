import './Comments.scss'
import React, { useEffect, useState } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useAppDispatch, useAppSelector } from '../../utils/Hook';
import { fetchComments } from '../../store/slices/commentSlice';
import { postComment } from '../../store/slices/commentSlice';
import { nanoid } from 'nanoid'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

interface ICommentsProps {
    id: number;
}

const Comments: React.FC<ICommentsProps> = ({ id }): JSX.Element => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    });
    const comments = useAppSelector(state => state.comments.comments)
    const loading = useAppSelector(state => state.comments.loading)
    const [isOpen, setOpen] = useState(false)
    const dispatch = useAppDispatch()

    const handleOpenForm: React.MouseEventHandler<HTMLButtonElement> = (): void => {
        setOpen(true)
    }
    useEffect(() => {
        dispatch(fetchComments())

    }, [dispatch])



    const sendComment: SubmitHandler<FieldValues> = (data: any): void => {
        data.postId = id
        data.id = nanoid()

        dispatch(postComment(data))

        reset()

    }
    return (
        <>
            {loading ? (<LinearProgress />) :
                (comments
                    .filter((comment): boolean => comment.postId === id)
                    .map((comment, index: number): JSX.Element => {
                        return (
                            <div key={index} className='comment'>
                                <div>
                                    <h4>{comment.email}</h4>
                                    <h3>{comment.name}</h3>
                                    <p>{comment.body}</p>
                                </div>
                            </div>
                        )
                    }))}
            <button onClick={handleOpenForm}>Написать комментарий</button>
            {isOpen && (

                <form onSubmit={handleSubmit(sendComment)} className="comment__submit" action="">


                    <label >
                        Имя </label>

                    <input {...register("name", {
                        required: true,
                    })}
                        type="text" name='name'
                        style={{ outline: `${errors?.name ? '1px solid brown' : ''}` }}
                    />
                    <div className='comment__warning'>
                        {errors?.name && <p>Обязательно к заполнению</p>}
                    </div>

                    <label >Email</label>
                    <input {...register("email", {
                        required: "Обязательно к заполнению",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Неправильный формат емейла"
                          }
                    })}
                        type="text" name='email'
                        style={{ outline: `${errors?.email ? '1px solid brown' : ''}` }}
                    />
                    <div className='comment__warning'>
                        {errors?.email && <p>{errors?.email?.message}</p>}
                    </div>
                    <textarea id="" cols={30} rows={10}
                        {...register("body", {
                            required: true,
                        })}
                        placeholder='Разделите с другими ваше мнение о посте'></textarea>
                    <button>Отправить</button>
                </form>

            )}

        </>
    )
}

export default Comments