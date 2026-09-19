import { Link } from "react-router-dom";
import Header from "../components/Header";
import Photo from "../components/Photo";
import Bar from "../components/Bar";
import { IMAGES } from "../data";
import { usePageTitle } from "../hooks";

type PickProps = {
  slug: string;
  cls: "a" | "b" | "c";
  ratio: string;
  tag: string;
};

function Pick({ slug, cls, ratio, tag }: PickProps) {
  return (
    <Link className={`pick pick-${cls}`} to={`/${slug}`}>
      <Photo src={IMAGES.picks[slug]} label={`${tag} photo`} ratio={ratio} />
      <span className="tag">{tag}</span>
    </Link>
  );
}

export default function Home() {
  usePageTitle("Kavya — Visual Journeys");
  return (
    <>
      {/* Section 1: hero with full original typography styles */}
      <section
        className="hero"
        aria-label="Featured photo"
        style={{ position: "relative", minHeight: "auto", display: "block" }}
      >
        {/* Top Header */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <Header />
        </div>

        {/* Hero Photo */}
        <Photo
          src={IMAGES.hero}
          label="Hero photo: Aït Ben Haddou, people crossing the river"
        />

        {/* Text using pure stylesheet hero-body and h1 styling */}
        <div
          className="hero-body"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 5,
            pointerEvents: "none",
          }}
        >
          <h1>Visual Journeys</h1>
        </div>
      </section>

      {/* Section 2: three places + See more */}
      <section className="picks" aria-label="Selected collections">
        <div className="picks-grid">
          <Pick slug="morocco" cls="a" ratio="16/9" tag="Morocco" />
          <Pick
            slug="washington-state"
            cls="b"
            ratio="4/3"
            tag="Washington State"
          />
          <Pick slug="kolkata-hyderabad" cls="c" ratio="3/4" tag="Hyderabad" />
          <Bar to="/collections" className="more">
            See more!
          </Bar>
        </div>
      </section>
    </>
  );
}
