import Link from "next/link";
import { useUser } from "../context/userContext";

export default function Home() {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser();

  if (loadingUser) {
    return <div>Loading...</div>;
  }

  if (user === null) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <main>
        <Link href={`/dashboard/${user.uid}`}> Go to User dashboard </Link>
      </main>
    </div>
  );
}
