# Videaste — Videographer Portfolio Landing Page
## Design System Reference (IDE Context File)

> Source: "Videaste — Personal Videographer Portfolio Landing Page Website" by Adhiari Subekti for **One Week Wonders**, Dribbble, Nov 2023.
> https://dribbble.com/shots/23090247-Videaste-Personal-Videographer-Portfolio-Landing-Page-Website
>
> **Note on fidelity:** Dribbble renders shots client-side and blocks direct asset scraping, so exact hex values and font files below are reconstructed from the visible design language of this shot and the consistent visual system Adhiari Subekti / One Week Wonders use across their landing-page series (Numerique, Heim, Kinnisvara, Bauen, etc.) — dark cinematic base, bold condensed display type, tight editorial grids. Treat hex codes and font-weight numbers as **best-effort starting values**; swap in exact values once you have the original file or a screenshot to sample from.

---

## 1. Overall Aesthetic

- **Genre**: Dark, cinematic, editorial — built for a videographer/filmmaker, so the UI gets out of the way of large-format video/photo imagery.
- **Mood**: Moody, confident, minimal-but-bold. Big type, tight tracking, high image-to-whitespace ratio.
- **Reference points**: agency/portfolio sites like Basement.studio, Cuberto-adjacent motion studios, and other One Week Wonders shots — dark backgrounds, single accent color, oversized sans-serif headlines, uppercase micro-labels.

---

## 2. Color Palette

| Token | Approx. Hex | Usage |
|---|---|---|
| `--bg-primary` | `#0D0D0D` | Page background (near-black, not pure black) |
| `--bg-surface` | `#161616` | Card/panel backgrounds, elevated sections |
| `--text-primary` | `#F5F5F0` | Headlines, primary body copy (warm off-white) |
| `--text-secondary` | `#9C9C97` | Sub-copy, captions, meta labels |
| `--accent` | `#D9FF4A` (or similar acid green/yellow) | CTAs, hover states, highlight text, badge fills |
| `--border-subtle` | `#2A2A2A` | Hairline dividers, card outlines |
| `--overlay-scrim` | `rgba(0,0,0,0.45)` | Gradient overlay on video/image thumbnails for text legibility |

**Palette logic**: single dominant dark neutral + one high-contrast accent (lime/acid tone is common in this designer's series to signal "creative/motion" energy against black). Keep saturated color usage to <10% of visual weight — accent is for CTAs, active states, and small highlight words inside headlines only.

---

## 3. Typography

| Role | Typeface (suggested) | Weight | Size (desktop) | Tracking |
|---|---|---|---|---|
| Hero headline | **General Sans** or **Neue Montreal** | 500–600 | 72–96px | -0.02em |
| Section headline | Same family | 500 | 40–56px | -0.01em |
| Body / paragraph | **Inter** or **Suisse Int'l** | 400 | 16–18px | 0 |
| Micro-label / eyebrow | Same as body, uppercase | 500 | 12–13px | 0.12em |
| Nav links | Body family | 400–500 | 15px | 0 |

- Headlines: a modern grotesk with slight geometric warmth — not a hard-edged corporate sans. One or two words per headline are often set in the accent color or italicized for emphasis.
- Body copy stays restrained and small relative to headline scale — this is a type-hierarchy-driven layout (huge contrast between H1 and body).
- No serif use expected; this style favors clean grotesk sans throughout.

---

## 4. Layout & Grid

- **Container**: max-width ~1280–1440px, generous outer margin (80–120px desktop, 24px mobile).
- **Grid**: 12-column, gutter ~24px.
- **Vertical rhythm**: large section padding, 120–160px between major sections — the dark background makes generous negative space essential to avoid visual fatigue.
- **Section order (typical for this template type)**:
  1. **Nav** — logo/wordmark left, minimal link list center-right, CTA button ("Let's talk" / "Contact") far right.
  2. **Hero** — oversized name/tagline headline, short intro line, background or embedded looping showreel video, scroll-cue indicator.
  3. **About / Intro strip** — short bio paragraph + key stats (years experience, clients, projects) in a horizontal stat row.
  4. **Selected Work / Portfolio grid** — 2-column or asymmetric grid of video thumbnails with hover-to-play or hover-zoom, project title + category label overlay.
  5. **Services** — numbered list (01, 02, 03…) of service offerings, often accordion-style or with icon + description.
  6. **Process / How I work** (optional) — horizontal timeline or numbered steps.
  7. **Testimonials** — single large quote carousel, client name/role, minimal styling.
  8. **CTA band** — full-bleed dark or accent-tinted section with large "Let's create something" headline + button.
  9. **Footer** — social links, email, secondary nav, copyright.

---

## 5. Components

**Buttons**
- Primary: pill or slightly rounded rect, accent-fill background, dark text, subtle scale/opacity hover.
- Secondary/outline: 1px border in `--border-subtle`, transparent fill, text turns accent on hover.

**Portfolio Cards**
- Full-bleed thumbnail image/video, dark gradient scrim bottom third, title + category label sitting on the scrim.
- Hover: slight scale (1.02–1.05), scrim opacity increases, optional autoplay of muted looping clip.

**Nav**
- Transparent over hero, transitions to solid `--bg-surface` with blur on scroll.
- Minimal — 3–5 links max plus one CTA button.

**Numbered list items (services/process)**
- Large monospace or tabular-figure number (`01`, `02`) in `--text-secondary`, paired with bold title and short description, separated by hairline dividers.

---

## 6. Imagery & Motion

- Full-bleed, high-contrast, desaturated-toward-neutral photography/video (fits "videographer" subject matter — behind-the-scenes shoot stills, film reels, camera gear).
- Subtle grain/noise overlay is common in this aesthetic family to reinforce the "film" feel.
- Motion: scroll-triggered fade/slide-up reveals on section entry, cursor-follow or magnetic buttons, marquee/ticker text for client logos or keywords.

---

## 7. Spacing Scale (suggested token system)

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 40px;
  --space-6: 64px;
  --space-7: 96px;
  --space-8: 128px;
  --space-9: 160px;
}
```

---

## 8. Design Tokens (CSS custom properties, ready to drop in)

```css
:root {
  /* Color */
  --bg-primary: #0D0D0D;
  --bg-surface: #161616;
  --text-primary: #F5F5F0;
  --text-secondary: #9C9C97;
  --accent: #D9FF4A;
  --border-subtle: #2A2A2A;
  --overlay-scrim: rgba(0, 0, 0, 0.45);

  /* Typography */
  --font-display: "General Sans", "Neue Montreal", sans-serif;
  --font-body: "Inter", "Suisse Int'l", sans-serif;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-pill: 999px;

  /* Motion */
  --ease-standard: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast: 200ms;
  --duration-base: 400ms;
}
```

---

## 9. Responsive Notes

- Breakpoints: `1440` desktop, `1024` small desktop/tablet-landscape, `768` tablet, `480` mobile.
- Hero headline scales from ~96px → ~40px at mobile; keep line-height tight (1.0–1.05) throughout.
- Portfolio grid collapses from 2-column to single column stacked full-bleed cards on mobile.
- Nav collapses to hamburger/full-screen overlay menu below `768px`.

---

## 10. Instructions for AI Coding Assistants

When implementing this layout:
1. Use CSS custom properties above as the single source of truth for color/spacing — don't hardcode hex values in components.
2. Prioritize typographic contrast (huge headline vs. small body) over decorative elements — this design leans on scale and negative space, not ornamentation.
3. Keep the accent color usage disciplined: CTAs, hover states, one or two emphasized words per headline. Never use it as a background for large areas.
4. Video/image thumbnails always need a bottom scrim gradient for text legibility — don't place text directly on unmodified imagery.
5. Favor CSS scroll-driven animations / IntersectionObserver reveals over heavy JS animation libraries unless a specific micro-interaction (magnetic buttons, cursor follow) is requested.
