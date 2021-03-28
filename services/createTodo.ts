export default async function createTodo(todoText: string) {
    await fetch(`/api/todos`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: todoText,
        }),
    }).catch((e) => console.log(e));
}