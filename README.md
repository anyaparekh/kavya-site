# Kavya: Visual Journeys

A responsive (mobile + desktop) photography site built with **React + TypeScript + Vite** and **React Router**.
Photo slots are placeholder rectangles until you add your own images.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

Requires Node 18+.

## Pages

| URL | What it is |
| --- | --- |
| `/` | Home: full-screen hero (Aït Ben Haddou), then 3 photos linking to their locations + "See more!" |
| `/collections` | Numbered list of all collections |
| `/morocco`, `/washington-state`, `/kolkata-hyderabad`, `/dc-virginia`, `/maine-boston`, `/cdmx`, `/singapore` | One gallery page per location |
| `/about` | Simple about page (not in your original spec, but it's in the nav) |

## Adding your photos

1. Put image files in `public/images/` (e.g. `public/images/morocco/01.jpg`).
2. Open **`src/data.ts`** and paste the paths in:

```ts
export const IMAGES = {
  hero: "/images/morocco/ait-ben-haddou.jpg",
  picks: {
    morocco: "/images/morocco/cover.jpg",
    "washington-state": "/images/wa/cover.jpg",
    "kolkata-hyderabad": "/images/hyderabad/cover.jpg",
  },
  galleries: {
    morocco: ["/images/morocco/01.jpg", "/images/morocco/02.jpg" /* … */],
    // …
  },
};
```

- An empty string (`""`) shows a placeholder rectangle.
- Each location gallery starts with 6 placeholders. Once you add photos, it shows exactly as many as you list. The layout pattern repeats every 6 photos (see `GALLERY_PATTERN`).
- Photos are cropped to the layout shapes by default. Set `CROP_TO_LAYOUT = false` in `data.ts` to show each photo at its natural aspect ratio.
- Alt text is the photo label (`"Morocco photo 3"`). For better accessibility, edit the label text in the pages/components where `<Photo label="…">` is used.
- Tip: export web-sized JPEGs (about 2000px on the long edge) so pages load fast.

## Other things you'll want to edit

- **Collections / order / names:** `COLLECTIONS` in `src/data.ts`. This also drives the dropdown, list page, and "Next" bars.
- **Line next to each location title:** `BLURB` (default for all) or `blurb` on an individual collection.
- **Footer year:** `src/components/Footer.tsx` currently says `20XX–2026`.
- **About text:** `src/pages/About.tsx`.
- **Colors and fonts:** the tokens at the top of `src/styles.css`. Dark mode is handled in the `prefers-color-scheme: dark` block.
- **Logo:** `src/components/Logo.tsx` + the `.logo` rules in `styles.css`.

## Project structure

```
src/
  main.tsx              entry (BrowserRouter)
  App.tsx               routes, scroll-to-top + focus handling
  data.ts               <- photos, collections, gallery layout
  hooks.ts              page title hook
  styles.css            all styling + responsive rules
  components/
    Header.tsx          nav pills + collections dropdown
    Logo.tsx            viewfinder logo
    Photo.tsx           image or placeholder rectangle
    Bar.tsx             brown link bar + circle icon
    Footer.tsx
  pages/
    Home.tsx  Collections.tsx  Location.tsx  About.tsx  NotFound.tsx
```

## Deploying

It's a static site: run `npm run build` and upload `/dist` anywhere.
Because it uses clean URLs (`/morocco`), the host needs a "send everything to index.html" rule.
This is already included:

- **Netlify:** `public/_redirects`
- **Vercel:** `vercel.json`
- **GitHub Pages / sub-folder hosting:** set `base: "/your-repo/"` in `vite.config.ts` (and use a 404.html copy of index.html for deep links).
