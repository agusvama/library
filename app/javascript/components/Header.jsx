import NotificationBell from "./NotificationBell";

export default function Header() {
  return (
    <header className="header">
      <h1>Authors</h1>

      <NotificationBell count={3} />
    </header>
  );
}
