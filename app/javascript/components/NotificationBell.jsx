export default function NotificationBell({ count }) {
  return (
    <button className="notification-bell">
      🔔

      <span className="notification-count">
        {count}
      </span>
    </button>
  );
}
