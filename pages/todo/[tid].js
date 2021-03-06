export default function Todo({ todo }) {
  if (!todo.success) {
    return <p>Sorry we could not find the todo you were looking for.</p>;
  }
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
