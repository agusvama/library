import { useState } from "react";

export default function AuthorCard({ id, name }) {
  const [subscribed, setSubscribed] = useState(false);

  async function handleSubscribe() {
    // verify requester via token
    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      .content;

    // send petition
    const response = await fetch(`/authors/${id}/subscribe`, {
      method: "POST",
      headers: {
        "X-CSRF-Token": csrfToken
      }
    });

    const data = await response.json();
    console.log(data);
    // setSubscribed(true);

    // setTimeout(() => {
    //   setSubscribed(false);
    // }, 2000)
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
