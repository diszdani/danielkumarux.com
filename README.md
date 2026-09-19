# Daniel Kumar M · UX Portfolio

Plain HTML and CSS. No server, no build step, no dependencies.
**Double-click `index.html` to open the site.**

---

## Folder structure

```
Daniel_Kumar_Portfolio/
├── index.html                          Home
├── work.html                           Work, the three case studies
├── about.html                          About
├── case-studies/
│   ├── enterprise-data-platform.html          Flagship
│   ├── enterprise-etl-platform.html
│   └── billing-consumption.html
├── assets/
│   ├── css/site.css                    ALL styling, shared by every page
│   ├── js/site.js                      theme control, in-page anchors
│   ├── portrait/                       your photo (home + about)
│   ├── ads/                            Archon Data Store screenshots
│   ├── etl/                            Archon ETL diagram
│   ├── billing/                        Billing diagram
│   ├── design-system/                  colour ramp
│   ├── icons/                          theme icons, favicon
│   └── Daniel_Kumar_Resume.pdf
└── README.md
```

---

## Where to change what

| To change | Open |
|---|---|
| Hero, selected work, capabilities, design system, experience | `index.html` |
| Work page intro and the three project rows | `work.html` |
| Story, principles, leadership, evidence, skills, education | `about.html` |
| A case study | `case-studies/<name>.html` |
| Colours, type, spacing, every page at once | `assets/css/site.css` |
| Email, LinkedIn, Behance, availability line | the `<footer>` in **each** of the six pages |

**The header and footer are repeated in every page.** That is the trade for
having no build step. Change one, change all six, a find-and-replace across the
folder does it in one pass.

---

## Replacing an image

Drop a new file over the old one, **keep the same filename**, and every page
picks it up. No HTML editing.

| What | File |
|---|---|
| Your portrait (home + about) | `assets/portrait/daniel-kumar-portrait.png` |
| Flagship two-level rail diagram | `assets/ads/ads-two-level-rail.svg` |
| ETL six-stage spine diagram | `assets/etl/etl-six-stage-spine.svg` |
| Billing diagram | `assets/billing/billing-two-tier-ladders.svg` |
| Design-system ramp | `assets/design-system/ads-colour-ramp.svg` |
| Résumé | `assets/Daniel_Kumar_Resume.pdf` |

Portrait: currently `daniel-kumar-portrait.png`. It is cropped with
`object-fit: cover`, so anything near 4:5 works.

---

## Adding a fourth case study

1. Copy any file in `case-studies/` and edit its content.
2. Add a project row to `index.html` and `work.html`, copy an existing
   `<a class="proj">` block and change the text, image and link.
3. Add it to the **Case studies** list in the footer of all six pages.

The discipline filter row appears on its own once the site holds five or more
projects.

---

## Two things still outstanding

**The portrait is a placeholder.** Replace
`assets/portrait/daniel-kumar-portrait.png` with your photo, same filename.

**Confidentiality treatment.** The case studies are the confidential-safe versions:
no product names, no production screenshots and no customer or sample data. Every
figure is a representative interface reconstruction, redrawn from the original
design with the identifying content removed and every value replaced with a
placeholder. The employer is named; the products are not.
