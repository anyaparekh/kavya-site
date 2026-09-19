/* =====================================================================
   EDIT ME: your photos and collections

   Photos: placed in /src/images/[slug]/
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

// Glob all images inside src/images/
const globbedImages = import.meta.glob<{ default: string }>(
  "/src/images/*/*.{png,jpg,jpeg,webp,avif,gif,PNG,JPG,JPEG,WEBP,AVIF,GIF}",
  { eager: true }
);

function autoPopulateGalleries(): Record<string, string[]> {
  const galleries: Record<string, string[]> = {};

  // Initialize empty array for each collection slug
  COLLECTIONS.forEach(({ slug }) => {
    galleries[slug] = [];
  });

  Object.entries(globbedImages).forEach(([filePath, module]) => {
    const normalizedPath = filePath.replace(/\\/g, "/");
    const match = normalizedPath.match(/\/images\/([^/]+)\//);

    if (match && match[1]) {
      const slug = match[1];
      if (galleries[slug]) {
        galleries[slug].push(module.default);
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
  hero: "/src/images/hero.jpg",

  /** The 3 photos on the home page, keyed by the collection they link to */
  picks: {
    morocco: "",
    "washington-state": "",
    "kolkata-hyderabad": "",
  } as Record<string, string>,

  about: "",

  /** Automatically populated from src/images/[cityname] */
  galleries: autoPopulateGalleries(),
};

export const DEFAULT_PHOTOS = 6;
export const CROP_TO_LAYOUT = false;