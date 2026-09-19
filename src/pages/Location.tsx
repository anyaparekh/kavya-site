import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Bar from "../components/Bar";
import { BLURB, COLLECTIONS, IMAGES } from "../data";
import { usePageTitle } from "../hooks";
import NotFound from "./NotFound";

export default function Location() {
  const { slug } = useParams<{ slug: string }>();
  const index = COLLECTIONS.findIndex((c) => c.slug === slug);
  const collection = COLLECTIONS[index];

  usePageTitle(collection ? `${collection.name} — Kavya` : "Not found — Kavya");
  if (!collection) return <NotFound />;

  const photos = IMAGES.galleries[collection.slug] ?? [];
  const next = COLLECTIONS[(index + 1) % COLLECTIONS.length];

  return (
    <>
      <section className="band">
        <Header />
        <h1>{collection.name}</h1>
        <p>{collection.blurb ?? BLURB}</p>
      </section>

      <section
        style={{
          width: "100%",
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "2rem 2rem",
          boxSizing: "border-box",
        }}
        aria-label={`${collection.name} photos`}
      >
        {photos.length > 0 ? (
          <div
            style={{
              columns: "3 300px",
              columnGap: "1rem",
              width: "100%",
            }}
          >
            {photos.map((src, i) => (
              <div
                key={i}
                style={{
                  breakInside: "avoid",
                  marginBottom: "1rem",
                  width: "100%",
                }}
              >
                <img
                  src={src}
                  alt={`${collection.name} photo ${i + 1}`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: "0px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <p style={{ opacity: 0.6 }}>No photos in this collection yet.</p>
        )}
      </section>

      <div className="next">
        <Bar to={`/${next.slug}`}>Next: {next.name}</Bar>
      </div>
    </>
  );
}
