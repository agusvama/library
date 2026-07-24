export default function AuthorCard({ name }) {
  return (
    <article className="author-card">
      <div className="author-photo">
        Photo
      </div>

      <h3>{name}</h3>

      <button>Subscribe</button>
    </article>
  );
}
