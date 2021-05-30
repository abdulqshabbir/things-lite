export default async function deleteTodo(todoId: string) {
    await fetch(`/api/todos/${todoId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }).catch((e) =>
        console.log(e)
    );
}