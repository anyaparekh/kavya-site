import { Link } from "react-router-dom";

/** Dark block with viewfinder corners that tighten on hover (see .logo in styles.css). */
export default function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Kavya, home">
      <span className="c c1" aria-hidden="true" />
      <span className="c c2" aria-hidden="true" />
      <span className="c c3" aria-hidden="true" />
      <span className="c c4" aria-hidden="true" />
      KAVYA
    </Link>
  );
}
