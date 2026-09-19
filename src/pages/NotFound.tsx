import Header from "../components/Header";
import Bar from "../components/Bar";

export default function NotFound() {
  return (
    <>
      <section className="band">
        <Header />
        <h1>Not found</h1>
        <p>That page doesn't exist.</p>
      </section>
      <div className="next" style={{ paddingTop: "3rem" }}>
        <Bar to="/collections">Browse collections</Bar>
      </div>
    </>
  );
}
