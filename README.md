# Wedding — Kuenzang & Miyu

Wedding website with English/Japanese support and Google Form RSVP.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

Standard build (local preview or custom hosting):

```bash
npm run build
```

Static output is written to `out/`.

## GitHub Pages

1. Build with the repo base path:

```bash
npm run build:gh-pages
```

2. Deploy the `out/` folder (GitHub Actions “GitHub Pages” source, or push `out/` to `gh-pages` branch).

Site URL: `https://<username>.github.io/wedding/`

RSVP submits directly to Google Forms from the browser.
