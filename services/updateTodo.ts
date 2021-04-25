import { ITodo } from '../models/Todo'

export default async function updateTodo(updatedTodo: ITodo) {
    await fetch(`/api/todo/${updatedTodo._id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: updatedTodo.title,
            text: updatedTodo.text ? updatedTodo.text : null
        }),
    }).catch((e) => console.log(e));
}