export default async function deleteTodo(todoId: string) {
    await fetch(`/api/todo/${todoId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }).catch((e) =>
        console.log(e)
    );
}