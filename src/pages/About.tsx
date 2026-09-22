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
            Taking a photo of a place I've travelled to, or a moment at home, is
            my way of keeping that memory. It's also my way of justifying the
            price of developing film. So, welcome to my photo diary.
            <br />
            <br />
            I use a Minolta Maxxum 50, and sometimes I borrow my sister's Canon
            PowerShot. Many, many times I just use my iPhone 11.
            <br />
            <br />
            Enjoy!
            <br />
            Kavya
          </p>
        </div>
      </section>
    </>
  );
}
