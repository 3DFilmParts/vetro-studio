# vetro studio — Design System

**vetro studio.** is a Melbourne-based boutique making high-end, uniquely crafted glass vases, sold worldwide. The range is deliberately tiny — 4–5 pieces — each treated like an art object. The brand sits in the quiet-luxury space of galleries and niche perfumeries: generous whitespace, editorial serif headlines, and a single signature colour — deep burgundy.

## Sources provided
- `uploads/400111.png` — the wordmark: **"vetro studio."** set in a bold burgundy typewriter mono (Courier-style), lowercase, with a full stop. Cropped single-row version at `assets/vetro-wordmark.png`.
- Reference sites (tone/visual direction only; nothing copied):
  - https://anticohome.com.au/collections/vases — handcrafted glass vases, minimal Shopify luxe, sparse product grid
  - https://allaviolettaboutique.com/ — niche luxury boutique, editorial merchandising
- No codebase, Figma, or font binaries were provided. Components below are an authored standard set sized to a small e-commerce brand; fonts are Google Fonts substitutions (see Caveats).

## Products (sample catalogue)
The catalogue used across this system (placeholder names/prices — replace with real ones):
1. **Onda Vase** — rippled clear glass, AUD $429
2. **Alba Vase** — rose-tinted, flared lip, AUD $389
3. **Vesper Vase** — smoke grey, tall column, AUD $459
4. **Mira Vase** — amber, low round belly, AUD $349
5. **Sella Vase** — clear with burgundy thread, limited run, AUD $589

**Product photography** lives in `assets/products/` (rostrato-style glass vases: gold + clear colourways, hero shot with magazines, hydrangea lifestyle shot, cut-crystal piece). Image-to-product mapping is provisional — confirm which photo belongs to which vase.

## CONTENT FUNDAMENTALS
- **Voice:** quiet, assured, editorial. Short declarative sentences. No exclamation marks, no urgency ("hurry", "sale ends"), no emoji — ever.
- **Casing:** the brand name is always lowercase with a trailing period: `vetro studio.` Headlines are sentence case in the serif ("Each piece is made once."). UI labels/eyebrows are UPPERCASE mono or sans with wide tracking (`HAND BLOWN · MELBOURNE`).
- **Person:** "we" for the studio, "you" sparingly. More often, the object is the subject: "Formed by hand. No two alike."
- **Product copy pattern:** name (serif) → one-line material/colour descriptor (muted) → price. Descriptions are 2–3 short sentences about material, process, and dimensions — never marketing superlatives.
- **Numbers:** prices as `$429 AUD`. Dimensions as `H 32cm · Ø 14cm`.
- **Example copy:**
  - Hero: "Glass, blown once." / "A small studio in Melbourne making singular vases for the rest of the world."
  - Product: "Onda Vase — rippled clear glass. Each ripple is pulled by hand while the glass is still moving. H 32cm · Ø 14cm."
  - Footer signoff: "made slowly in melbourne."

## VISUAL FOUNDATIONS
- **Colour:** one brand colour — burgundy `#3B0A14` — on warm ivory `#FAF7F2`. Burgundy is used decisively: full inverse sections, buttons, headlines, hairlines. Glass accent tones (smoke/rose/amber/clear) appear only as swatches tied to actual colourways, never as decoration. No gradients anywhere.
- **Type:** three voices. Cormorant Garamond (500) for display/headlines, large and airy; Jost (300–500) for body/UI; Courier Prime bold, lowercase, for the wordmark and brand-mono moments (eyebrows, footer signoff, SKU-like labels). Uppercase labels track at 0.18em.
- **Spacing:** generous — 96–140px between marketing sections, 1280px container with 48px side padding. Product grids: 2–3 columns, 24px gaps, lots of air.
- **Backgrounds:** flat ivory or flat burgundy. Full-bleed photography for heroes (placeholder until supplied). No patterns, textures, illustrations, or gradients.
- **Borders & corners:** square corners everywhere (radius 0); 2px max on tiny inputs; pill only on small badges. 1px hairlines in `--border-hairline` divide sections; a 1px burgundy border is the secondary-button style.
- **Shadows:** essentially none. Cards are flat, separated by tone and hairlines. Only overlays (cart drawer, dialogs) get a soft large shadow.
- **Cards:** flat white on ivory, square, image on top, no border by default; hover reveals a hairline + image zooms ~1.03 over 420ms.
- **Motion:** slow calm fades and small translates, `cubic-bezier(0.22,1,0.36,1)`, 160ms (UI) / 420ms (imagery). No bounces, no spinners — use opacity pulses.
- **Hover states:** darken burgundy → `--burgundy-700`; on cards/links, opacity 0.7 or an underline appearing. Press: opacity 0.85, no shrink.
- **Imagery colour vibe:** warm, natural light, stone/linen surfaces, slight warmth in shadows. Never cool/blue, never clinical white sweep.
- **Transparency/blur:** none, except the announcement bar over hero imagery may use burgundy at 92% opacity. No glassmorphism (despite the product!).

## ICONOGRAPHY
- No icon set was provided and the references barely use icons. The brand approach: **almost no icons.** Text is preferred ("Cart (2)" not a bag glyph).
- Where a glyph is unavoidable (close, arrows, plus/minus steppers), use sparse unicode/typographic characters in the current font: `×`, `→`, `←`, `+`, `−`, `·`. These are part of the type system, not an icon system.
- No emoji, no icon fonts, no CDN icon libraries. If a real icon set is adopted later, it should be 1px-stroke, geometric, and used at 16px.
- **Logo:** `assets/vetro-wordmark.png` (burgundy on transparent). On burgundy surfaces, render the wordmark as live text in Courier Prime bold ivory instead (no ivory logo file was provided). Never redraw the mark.

## Index
- `styles.css` — global entry (imports everything below)
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`
- `assets/vetro-wordmark.png` — the brand mark
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/core/` — Button, Input, Select, Badge, Accordion
- `components/commerce/` — ProductCard, QuantityStepper
- `components/navigation/` — AnnouncementBar, Header, Footer
- `ui_kits/vetro-site/` — the e-commerce site: interactive home → product → cart flow
- `SKILL.md` — agent skill entry point

### Intentional additions
No source defined a component inventory, so the set above was authored to cover a small luxury storefront: core form primitives, the two commerce pieces every screen needs (ProductCard, QuantityStepper), and the three navigation shells.

## Caveats
- **Fonts are substitutions:** Courier Prime ≈ wordmark mono; Cormorant Garamond and Jost are choices, not supplied brand fonts. Provide licensed binaries to lock this down.
- **No product photography** — every image slot is a labelled placeholder.
- Product names, copy, and prices are invented samples.
