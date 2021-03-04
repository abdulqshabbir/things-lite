import { useUser } from "../../context/userContext";

export default function UserDashboard() {
  const { user, loadingUser } = useUser();

  if (loadingUser) {
    return <div>Loading...</div>;
  }

  if (user === null) {
    return <div>There is no user...</div>;
  }

  return (
    <div>
      <main>
        <p>{user.uid}</p>
        <p>{user.email}</p>
        <p>{user.dipslayName}</p>
      </main>
    </div>
  );
}
