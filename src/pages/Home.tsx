import { Link } from "react-router-dom";
import Header from "../components/Header";
import Photo from "../components/Photo";
import Bar from "../components/Bar";
import { IMAGES } from "../data";
import { usePageTitle } from "../hooks";

type PickProps = {
  slug: string;
  cls: "a" | "b" | "c" | "d";
  ratio: string;
  tag: string;
  width?: string;
};

function Pick({ slug, cls, ratio, tag }: PickProps) {
  return (
    <Link className={`pick pick-${cls} pick-${slug}`} to={`/${slug}`}>
      <Photo src={IMAGES.picks[slug]} label={`${tag} photo`} ratio={ratio} />
      <span className="tag">{tag}</span>
    </Link>
  );
}

export default function Home() {
  usePageTitle("Kavya — Visual Journeys");
  return (
    <>
      {/* Section 1: hero */}
      <section className="hero" aria-label="Featured photo">
        {/* Top Header */}
        <Header />

        {/* Hero Photo Background */}
        <div className="hero-photo">
          <Photo
            src={IMAGES.hero}
            label="Hero photo: Aït Ben Haddou, people crossing the river"
          />
        </div>

        {/* Hero Title */}
        <div className="hero-body">
          <h1>Visual Journeys</h1>
        </div>
      </section>

      {/* Section 2: three places + See more */}
      <section className="picks" aria-label="Selected collections">
        <div className="picks-grid">
          <Pick slug="morocco" cls="a" ratio="16/9" tag="Morocco" />
          <div className="pick-col-right">
            <Pick
              slug="washington-state"
              cls="c"
              ratio="3/4"
              tag="Washington State"
            />
            <Pick slug="cdmx" cls="d" ratio="4/3" tag="CDMX" />
          </div>
          <Pick
            slug="kolkata-hyderabad"
            cls="b"
            ratio="5/6"
            tag="Kolkata and Hyderabad"
          />

          <div className="more-wrap">
            <Bar to="/collections">See more!</Bar>
          </div>
        </div>
      </section>
    </>
  );
}
