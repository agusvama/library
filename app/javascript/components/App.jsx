import Header from "./Header";
import AuthorsGrid from "./AuthorsGrid";

export default function App({ authors }) {
  return (
    <>
      <Header />
      <AuthorsGrid authors={authors} />
    </>
  );
}
