import { Link } from "react-router-dom";
import Header from "../components/Header";
import { COLLECTIONS } from "../data";
import { usePageTitle } from "../hooks";

export default function Collections() {
  usePageTitle("Collections — Kavya");
  return (
    <>
      <section className="band">
        <Header />
        <h1>Collections</h1>
        <p>Some far and close from home(s)!</p>
      </section>

      <section className="list-wrap" aria-label="All collections">
        <ol className="clist">
          {COLLECTIONS.map((c) => (
            <li key={c.slug}>
              <Link to={`/${c.slug}`}>
                <span className="name">{c.name}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
