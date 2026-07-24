import AuthorCard from "./AuthorCard";

export default function AuthorsGrid({ authors }) {
  return (
    <div className="authors-grid">
      {authors.map(author => (
        <AuthorCard
          key={author.id}
          name={author.name}
        />
      ))}
    </div>
  );
}
