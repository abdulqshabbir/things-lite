import useTodos from "../fetchData/useTodos";

export default function Home() {
  const { todos, isLoading, isError } = useTodos();

  if (isLoading) return <div>is loading...</div>;

  if (isError) return <div>error...</div>;

  return (
    <div>
      {todos.data.map((t) => (
        <li key={t._id}>{t.title}</li>
      ))}
    </div>
  );
}
