import Link from "next/link";
import firebase from "../firebase/clientApp";
import { useUser } from "../context/userContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser();
  const router = useRouter();

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

  return (
    <div>
      <main>
        <Link href={`/dashboard/${user.uid}`}> Go to User dashboard </Link>
        <button onClick={handleLogout}>logout</button>
      </main>
    </div>
  );
}
