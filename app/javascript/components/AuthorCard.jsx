import { useState } from "react";

export default function AuthorCard({ name }) {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe() {
    setSubscribed(true);

    setTimeout(() => {
      setSubscribed(false);
    }, 2000)
  }

  return (
    <article className="author-card">
      <div className="author-photo">
        Photo
      </div>

      <h3>{name}</h3>

      <button
        className={subscribed ? "subscribed" : ""}
        onClick={handleSubscribe}>
        {subscribed ? "Subscribed!" : "Subscribe"}
      </button>
    </article>
  );
}
