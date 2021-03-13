import styles from './Todo.module.css'

interface ITodoProps {
    title: string,
    text?: string,
    dueDate?: string,
    priority?: string
}

const Todo = ({title, text}:ITodoProps) => {
    return(
        <div className={`${styles.todoContainer}`}>
            <input className={`${styles.todoCheckbox}`} type="checkbox" id="todo-checkbox" name="todo-checkbox"/>
            <div className={`${styles.todoTitle}`}>{title}</div>
            <div className={`${styles.todoText}`}>{text}</div>
        </div>
    )
}

export default Todo