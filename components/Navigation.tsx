import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <Link href="/inbox">Inbox</Link>
      <Link href="/today">Today</Link>
      <Link href="/upcoming">Upcoming</Link>
      <Link href="/anytime">Anytime</Link>
    </div>
  );
};

export default Navigation;
