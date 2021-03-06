import fetch from "isomorphic-fetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({ notes }) {
  const [newTodo, setNewTodo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function createNewTodo(e) {
    e.preventDefault();
    setNewTodo("");
    setIsSubmitting(true);
    await fetch(`/api/todos`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTodo,
      }),
    }).catch((e) => console.log(e));
    setIsSubmitting(false);
    router.push("/todos");
  }

  if (!notes.success) {
    return (
      <div>
        <p>Something went wrong with fetching the notes...</p>
        <input
          type="text"
          placeholder="Type new todo here..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={(e) => createNewTodo(e)}>Create New Todo</button>
      </div>
    );
  } else {
    return (
      <>
        <div>
          {notes.data.map((n) => (
            <li key={n._id}>{n.title}</li>
          ))}
        </div>
        <div>
          {isSubmitting ? "Loading" : null}
          <input
            type="text"
            placeholder="Type new todo here..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={(e) => createNewTodo(e)}>Create New Todo</button>
        </div>
      </>
    );
  }
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/todos`);
  const notes = await res.json();
  return {
    props: {
      notes: notes,
    },
  };
}
