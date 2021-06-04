import { MouseEvent } from 'react'
import styles from './Todo.module.css'
import { useRouter } from 'next/router'
import { ITodo } from '../models/Todo'
import TagSelector from '../components/TagSelector'

const Todo = ({title, text, _id }:ITodo) => {
    const router = useRouter()
    function handleClick(e: MouseEvent<HTMLDivElement>) {
        router.push(`/todos/${_id}`)
    }
    return(
        <div
            className={`${styles.todoContainer}`}
            onClick={handleClick}
        >
            <input className={`${styles.todoCheckbox}`} type="checkbox" id="todo-checkbox" name="todo-checkbox"/>
            <div className={`${styles.todoTitle}`}>{title}</div>
            <div className={`${styles.todoText}`}>{text}</div>
            <TagSelector />
        </div>
    )
}

export default Todo