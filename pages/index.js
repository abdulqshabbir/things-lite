import Link from "next/link";
import firebase from "../firebase/clientApp";
import { useUser } from "../context/userContext";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
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
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
