import Header from "../components/Header";
import Photo from "../components/Photo";
import { IMAGES } from "../data";
import { usePageTitle } from "../hooks";

export default function About() {
  usePageTitle("About — Kavya");
  return (
    <>
      <section className="band">
        <Header />
        <h1>About</h1>
      </section>

      <section className="about">
        <Photo src={IMAGES.about} label="Portrait of Kavya" ratio="4/5" />
        <div>
          <p>
            Hi, I'm Kavya. These are photos from places I've traveled and places
            I've called home.
          </p>
        </div>
      </section>
    </>
  );
}
