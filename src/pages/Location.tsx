import type { CSSProperties } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Photo from "../components/Photo";
import Bar from "../components/Bar";
import { BLURB, COLLECTIONS, DEFAULT_PHOTOS, GALLERY_PATTERN, IMAGES } from "../data";
import { usePageTitle } from "../hooks";
import NotFound from "./NotFound";

export default function Location() {
  const { slug } = useParams<{ slug: string }>();
  const index = COLLECTIONS.findIndex((c) => c.slug === slug);
  const collection = COLLECTIONS[index];

  usePageTitle(collection ? `${collection.name} — Kavya` : "Not found — Kavya");
  if (!collection) return <NotFound />;

  const photos = IMAGES.galleries[collection.slug] ?? [];
  const count = photos.length || DEFAULT_PHOTOS;
  const next = COLLECTIONS[(index + 1) % COLLECTIONS.length];

  return (
    <>
      <section className="band">
        <Header />
        <h1>{collection.name}</h1>
        <p>{collection.blurb ?? BLURB}</p>
      </section>

      <section className="gallery" aria-label={`${collection.name} photos`}>
        {Array.from({ length: count }, (_, i) => {
          const t = GALLERY_PATTERN[i % GALLERY_PATTERN.length];
          const style = { "--s": t.span, marginTop: t.offset } as CSSProperties;
          return (
            <div className="tile" style={style} key={i}>
              <Photo src={photos[i]} label={`${collection.name} photo ${i + 1}`} ratio={t.ratio} />
            </div>
          );
        })}
      </section>

      <div className="next">
        <Bar to={`/${next.slug}`}>Next: {next.name}</Bar>
      </div>
    </>
  );
}
