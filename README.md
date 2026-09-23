# Grupp — landing page

Marketing site for [Grupp](https://trygrupp.africa), a Nigerian banking-as-a-service
platform. Community banks, microfinance institutions and cooperatives use it to run
agent banking, POS terminals, NUBAN accounts and digital lending **in their own brand**.

Single page, twelve sections, built to be demoed live in a pitch.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # must stay "prerendered as static content"
npm run lint
```

Next.js 16 (App Router) · React 19 · Tailwind v4 · framer-motion · JavaScript, no TypeScript.

---

## Editing the copy

**All text lives in [`lib/content.js`](lib/content.js).** Components read from it and
contain no prose. Changing a headline, a product feature or a testimonial means editing
that one file — you should not need to open a component to change words.

```js
export const HERO = {
  eyebrow: 'Community Banking as a Service',
  headline: ['Banking built for', 'the communities', 'the banks never reached.'],
  accentLine: 2,        // which line renders in the italic accent face
  ...
}
```

### One rule about content

Every claim on this page is traceable to something Grupp has actually published.
The four testimonials are real people with real videos on Grupp's own YouTube channel;
the merchant categories in "Who we serve" come from Grupp's real onboarding taxonomy.

An earlier version of this site claimed *"120+ financial institutions"* and
*"₦2.4B+ processed this month"*, and ran a marquee of Kuda, FCMB, LAPO and Renmoney as
implied clients. **None of that appeared anywhere on Grupp's actual site.** It was removed.

If you add a statistic, be able to point at where it came from. A number nobody can
source is worse than no number, especially in a room full of people who know the market.

The transaction feed in the product-demo band is a **mockup**, labelled as one. Keep the
label, and don't attach an aggregate total to it.

---

## How it's put together

`app/page.js` is a **Server Component**. Interactivity lives in six client islands:

| Client island | Why it needs the client |
|---|---|
| `Nav.js` | IntersectionObservers, drawer state, `layoutId` pill |
| `ProductTabs.js` | tab state, `AnimatePresence` |
| `StickyScene.js` | the scroll-driven "How it works" |
| `TransactionLedger.js` | timers, visibility gating |
| `VideoCard.js` | YouTube facade click-to-load |
| `MagneticButton.js` | pointer springs |

Everything else — Hero, TrustStrip, Mission, Products shell, WhoWeServe, ProductDemo,
WhyGrupp, Testimonials shell, CTA, Footer — is server-rendered.

This works because `MotionProvider` in `app/layout.js` takes `{children}` **as a prop**.
Children cross the client boundary as an already-rendered RSC payload, so the whole page
tree stays on the server while still sitting inside framer-motion's context. Same trick
in `ProductTabs` (`panels`) and `StickyScene` (`steps`) — server markup handed to a
client component as props.

Keep it that way. Adding `'use client'` to `page.js` or a section would pull its whole
subtree into the browser bundle.

---

## Design tokens

Colours are CSS custom properties on `:root` in [`app/globals.css`](app/globals.css).
They are Grupp's real brand values, recovered from their live site's DOM — not invented.

| Token | Value | Role |
|---|---|---|
| `--ink` | `#182F43` | headings |
| `--body` | `#56616C` | body copy |
| `--brand` | `#23A2FD` | primary actions, accents |
| `--brand-deep` | `#006A9E` | labels, links on pale grounds |
| `--pale` / `--pale-2` | `#DEF4FF` / `#D9F7FF` | soft panels |
| `--navy` | `#021230` | dark punctuation sections |
| `--amber` | `#F5A524` | secondary accent |
| `--surface` | `#FBFAF8` | page ground |

**Type** — three faces, all self-hosted through `next/font`:

- **Bricolage Grotesque** (`--font-bricolage`) — headings, logo. Applied by one
  `h1,h2,h3,h4` rule, so components carry no font class. Use `font-brand` elsewhere.
- **Inter** (`--font-body`) — body copy. Bricolage has personality that helps at 40px
  and hurts at 15px.
- **Fraunces italic** (`--font-accent`) — the accent phrase in each headline, the mission
  line, ₦ amounts and step numbers. Applied via `font-serif`.

Swapping the accent face is one import in `app/layout.js`; everything downstream reads
`--font-accent`.

**Motion tokens** live in [`lib/motion.js`](lib/motion.js) — easings, durations, stagger,
distances, one shared viewport config. Nine of twelve sections use a single `Reveal`
primitive. There are exactly three signature moments: the hero frame settle, the sticky
scroll scene, and the magnetic CTA. Adding a fourth effect makes the page look bought
rather than built.

---

## Gotchas

Each of these fails **silently**. No error, no warning — just something subtly wrong that
you won't notice until you're presenting.

**`overflow-x` must stay `clip`, never `hidden`.**
`overflow-x: hidden` computes `overflow-y` to `auto`, which creates a scroll container and
breaks `position: sticky` on the How-it-works section. It renders as a tall empty gap.
Also keep the sticky section's ancestor chain free of `transform`, `filter` and
`overflow: hidden` — each creates a containing block that does the same thing.

**The hero photo must not have an entrance animation.**
framer-motion serialises `initial` into the SSR inline style, so an animated photo ships
as `opacity: 0` and is disqualified as an LCP candidate until hydration. Motion in the
hero belongs to the accent frame behind the photo, and it's CSS, not JS — so the fold
still animates if hydration is slow.

**No `Date.now()`, `Math.random()` or `crypto.randomUUID()` in a Server Component.**
Under `cacheComponents` these are a build error, not a quirk. The demo card hold times are
fixed values in `lib/content.js` for this reason — deterministic across demos, too. There
is deliberately no dynamic copyright year in the footer.

**The scroll scrub has five conditions for staying on the GPU compositor.** Break any one
and it drops to the JS path with no warning — smooth on your laptop, stuttering on a
mid-tier Android:

1. `useScroll` offset exactly `['start start', 'end end']`
2. one `useTransform` per style value, never chained
3. array in-range and array out-range, never a function transformer
4. leave `clamp` at its default
5. bind to `transform` / `opacity`, **not** `y` / `scale`

And never `useSpring` a scroll value — it kills acceleration and is literally lag.

**Next.js 16 API changes** that older habits get wrong: `<Image priority>` is deprecated
(use `loading="eager"` + `fetchPriority="high"`); `quality` above 75 is silently coerced
down; `themeColor` belongs in a separate `viewport` export, not `metadata`; and
`<html>` needs `data-scroll-behavior="smooth"` or smooth scrolling won't apply.

**`suppressHydrationWarning` on `<html>`/`<body>` is for browser extensions** that inject
attributes before React hydrates. It's a one-level escape hatch and does not cascade, so
real mismatches inside the app still surface. Don't remove it, don't extend it.

Before writing anything here, read the relevant guide in `node_modules/next/dist/docs/` —
this Next.js version differs from older conventions in ways that matter. See
[`AGENTS.md`](AGENTS.md).

---

## Checks before shipping

```bash
npm run build   # must compile clean AND report "prerendered as static content"
npm run lint
```

Then, manually:

- Walk all twelve sections at 375px, 768px and 1440px
- Confirm the How-it-works section actually pins on desktop and degrades to three stacked
  cards on mobile
- Toggle OS "reduce motion" — animations should resolve to their final state, and the
  sticky scene should become static cards
- Click every nav and footer link; nothing should 404
- Throttle to Fast 3G and confirm the hero photo doesn't block first paint

## Deploy

Standard Next.js build; deploys to Vercel with no extra configuration. `next.config.mjs`
allows `i.ytimg.com` through `images.remotePatterns` for the testimonial thumbnails.

If you change dependencies, run `npm install` so `package-lock.json` stays in sync —
Vercel runs `npm ci`, which fails outright on a lockfile mismatch.
