export default function Todo({ todo }) {
  console.log(todo);
  return (
    <div>
      <p>Todo id: {todo.data.title}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const todoId = context.query.tid;
  const res = await fetch(`http://localhost:3000/api/todo/${todoId}`);
  const todo = await res.json();
  return {
    props: {
      todo,
    },
  };
}
