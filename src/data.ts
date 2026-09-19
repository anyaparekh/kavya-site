/* =====================================================================
   EDIT ME: your photos and collections

   Photos: placed in /public/images/[slug]/
   ===================================================================== */

export type Collection = {
  slug: string; // used in the URL: /morocco
  name: string; // shown on the Collections page, menu and page title
  blurb?: string; // optional line next to the page title (falls back to BLURB)
};

/** Order here = order on the Collections page and in the dropdown menu. */
export const COLLECTIONS: Collection[] = [
  { slug: "morocco", name: "Morocco" },
  { slug: "washington-state", name: "Washington State" },
  { slug: "kolkata-hyderabad", name: "Kolkata and Hyderabad" },
  { slug: "dc-virginia", name: "DC and Virginia" },
  { slug: "maine-boston", name: "Maine and Boston" },
  { slug: "cdmx", name: "CDMX" },
  { slug: "singapore", name: "Singapore" },
];

export const BLURB = "A line or two about this trip goes here.";

// Glob all images inside /public/images/ without eager module imports ({ query: '?url' })
const globbedImages = import.meta.glob(
  "/public/images/*/*.{png,jpg,jpeg,webp,avif,gif,PNG,JPG,JPEG,WEBP,AVIF,GIF}",
  { eager: true, query: "?url", import: "default" }
);

function autoPopulateGalleries(): Record<string, string[]> {
  const galleries: Record<string, string[]> = {};

  // Initialize empty array for each collection slug
  COLLECTIONS.forEach(({ slug }) => {
    galleries[slug] = [];
  });

  Object.keys(globbedImages).forEach((filePath) => {
    const normalizedPath = filePath.replace(/\\/g, "/");
    
    // Extract collection slug and filename
    const match = normalizedPath.match(/\/public\/images\/([^/]+)\/(.+)$/);

    if (match && match[1]) {
      const slug = match[1];
      const fileName = match[2];

      if (galleries[slug]) {
        // Map to public web path: /images/[slug]/filename.jpg
        galleries[slug].push(`/images/${slug}/${fileName}`);
      }
    }
  });

  // Sort images alphabetically/numerically by filename
  Object.keys(galleries).forEach((slug) => {
    galleries[slug].sort();
  });

  return galleries;
}

export const IMAGES = {
  /** Home hero */
  hero: "/images/hero.jpg",

  /** The 3 photos on the home page, keyed by the collection they link to */
  picks: {
    morocco: "/images/morocco/pick.jpg",
    "washington-state": "/images/washington-state/pick.jpg",
    "kolkata-hyderabad": "/images/kolkata-hyderabad/pick.jpg",
  } as Record<string, string>,

  about: "/images/about.jpg",

  /** Automatically populated from public/images/[slug] */
  galleries: autoPopulateGalleries(),
};

export const DEFAULT_PHOTOS = 6;
export const CROP_TO_LAYOUT = false;