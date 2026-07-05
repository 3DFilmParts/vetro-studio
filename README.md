# vetro studio. — website package

A single responsive site: the same `index.html` serves desktop and mobile
(the layout adapts automatically to the device's screen width — no separate
builds needed).

## Host on GitHub Pages

1. Create a new repository on GitHub (e.g. `vetro-studio-site`).
2. Upload the **entire contents of this folder** (keep the folder structure —
   `_ds/`, `uploads/`, and the `.js` files must sit next to `index.html`).
3. In the repo: Settings → Pages → Source: "Deploy from a branch" →
   Branch: `main`, folder `/ (root)` → Save.
4. Your site goes live at `https://<your-username>.github.io/vetro-studio-site/`.

Phones get the stacked mobile layout, desktops the full layout — same URL.

## Notes

- Fully self-contained: all imagery, the film, the 3D model (`assets/`),
  three.js (`vendor/`), and the webfonts (`_ds/.../tokens/fonts/`) are local.
  No internet connection or third-party CDN is needed once hosted.

## About Shopify

Shopify themes use their own template language (Liquid) — a static site can't
be uploaded as a theme directly. This package is your **design reference and
live preview**: hand it to a Shopify developer (or drop sections into a theme
like Dawn) to rebuild the layouts with real products, cart, and checkout.
Everything a theme needs is here: colours (#3B0A14 burgundy on #FAF7F2 ivory),
type (Cormorant Garamond / Jost / Courier Prime), copy, and all imagery URLs.
