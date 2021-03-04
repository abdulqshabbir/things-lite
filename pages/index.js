import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUser } from "../context/userContext";
import dbConnect from "../database/dbConnect";
import firebase from "../firebase/clientApp";
import Todo from "../models/Todo";

export default function Home({ todos }) {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser();
  const router = useRouter();
  const [todoText, setTodoText] = useState("");

  function handleLogout() {
    firebase.auth().signOut();
  }

  if (loadingUser) {
    return <div>Loading...</div>;
  }

  if (user === null) {
    router.push("/signup");
    return null;
  }

  function addTodoToDatabase() {}

  return (
    <div>
      <main>
        <Link href={`/dashboard/${user.uid}`}> Go to User dashboard </Link>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={addTodoToDatabase}></button>
      </main>
      {todos.map((t) => (
        <li key={t._id} id={t._id}>
          {t.title}
        </li>
      ))}
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  // find all todos and turn them to plain javascript obejcts
  const todoDocs = await Todo.find({});

  const todos = todoDocs.map((doc) => {
    // convert to serializable object
    const todo = doc.toObject();
    todo._id = todo._id.toString();
    return todo;
  });

  return {
    props: {
      todos,
    },
  };
}
