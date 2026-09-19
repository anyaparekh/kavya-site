/* =====================================================================
   EDIT ME: your photos and collections

   Photos: put image files in /public/images/ and reference them with a
   path starting with "/images/". An empty string ("") shows a placeholder
   rectangle, e.g.  hero: "/images/morocco/ait-ben-haddou.jpg"
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

export const IMAGES = {
  /** Home hero: Aït Ben Haddou, people crossing the river */
  hero: "",

  /** The 3 photos on the home page, keyed by the collection they link to */
  picks: {
    morocco: "",
    "washington-state": "",
    "kolkata-hyderabad": "", // the Hyderabad photo
  } as Record<string, string>,

  about: "",

  /** One list of photos per location page, in display order.
      e.g. morocco: ["/images/morocco/01.jpg", "/images/morocco/02.jpg"] */
  galleries: {
    morocco: [],
    "washington-state": [],
    "kolkata-hyderabad": [],
    "dc-virginia": [],
    "maine-boston": [],
    cdmx: [],
    singapore: [],
  } as Record<string, string[]>,
};

/** Placeholder rectangles shown on a location page until you add photos. */
export const DEFAULT_PHOTOS = 6;

/** true  = photos are cropped to the layout shapes below.
    false = each photo keeps its natural aspect ratio. */
export const CROP_TO_LAYOUT = true;

/** Gallery rhythm; repeats every 6 photos.
    span = columns out of 12, ratio = shape, offset = optional vertical stagger. */
export type Tile = { span: number; ratio: string; offset?: string };
export const GALLERY_PATTERN: Tile[] = [
  { span: 7, ratio: "3/2" },
  { span: 5, ratio: "1/1" },
  { span: 4, ratio: "4/5" },
  { span: 4, ratio: "1/1", offset: "clamp(2rem,6vw,6rem)" },
  { span: 4, ratio: "4/5" },
  { span: 12, ratio: "21/9" },
];
