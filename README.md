# Frank Ceballos: portfolio

Editorial personal site built with Astro and Tailwind CSS (static output, near-zero JavaScript).

The persona, design system, writing guide and full Netlify instructions live in [PERSONA.md](PERSONA.md). Read it first.

## Run

Astro 7 needs Node 22 or newer (`.nvmrc` pins it).

```bash
nvm use
npm install        # .npmrc sets legacy-peer-deps because @astrojs/tailwind predates Astro 7
npm run dev        # http://localhost:4321 (shows drafts)
npm run build      # static site in dist/
npm run preview    # serve dist/ locally
```

## Where to edit

| What                                           | File                                                                  |
| ---------------------------------------------- | --------------------------------------------------------------------- |
| Name, email, social links, hero and About text | `src/data/site.ts`                                                    |
| Career timeline                                | `src/data/journey.ts`                                                 |
| Publication list                               | `src/data/publications.ts`                                            |
| MCW research page                              | `src/data/mcw.ts` (layout in `src/pages/mcw.astro`)                   |
| Selected-work plates                           | `src/components/Work.astro` (art in `WorkArt.astro`)                  |
| Articles                                       | `src/content/writing/*.md` (see PERSONA.md, "Writing articles")       |
| Preserved articles (Earthzine, arXiv)          | `src/pages/archive.astro`                                             |
| Colors, fonts, type scale                      | `tailwind.config.mjs`                                                 |
| Portrait photo                                 | add `src/assets/portrait.jpg` (it replaces the lattice automatically) |

Search for `TODO` to find every placeholder.

## Deploy to Netlify

The repo is configured through `netlify.toml`: build command `npm run build`, publish directory `dist`, Node 22. Push to GitHub, then in Netlify choose **Add new site** > **Import an existing project** and pick the repository. Every push to `main` redeploys. Step-by-step instructions, custom domain, troubleshooting and a post-deploy checklist are in PERSONA.md, "Deploy to Netlify".
