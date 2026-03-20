# Amazon Mining Watch Panorama — scroll story

Interactive scrollytelling version of the **Amazon Mining Watch Panorama** quarterly PDF (Oct–Dec 2025), built with the [Mapbox Storytelling](https://github.com/mapbox/storytelling) template.

## Run locally

1. **Mapbox token** — Open [`config.js`](config.js) and replace `YOUR_MAPBOX_ACCESS_TOKEN` with a token from [Mapbox account tokens](https://account.mapbox.com/access-tokens/).

2. **Serve over HTTP** (required; opening `index.html` as a `file://` URL can break loading):

   ```bash
   npx --yes serve .
   ```

   Then open the URL shown (e.g. `http://localhost:3000`).

You can also use the VS Code **Live Server** extension or any static file server.

## Project layout

| Path | Purpose |
|------|--------|
| [`index.html`](index.html) | Mapbox Storytelling page |
| [`config.js`](config.js) | Story copy, chapter map views, image paths |
| [`assets/images/`](assets/images/) | Figures exported from the PDF (JPEG/PNG) |
| [`source/panorama.pdf`](source/panorama.pdf) | Original report |
| [`source/panorama-extracted.txt`](source/panorama-extracted.txt) | `pdftotext` transcript (reference) |
| [`source/amw-links.json`](source/amw-links.json) | Geovisor URLs parsed from the PDF |

Case-study chapters use **center** and **zoom** from the embedded [Amazon Mining Watch](https://amazonminingwatch.org/en) links (`lng`, `lat`, `zoom` query parameters). In-story links use the **exact** PDF URLs so filters match the report.

## Regenerating assets from the PDF

From the repo root (with [Poppler](https://poppler.freedesktop.org/) installed):

```bash
pdftotext -layout source/panorama.pdf source/panorama-extracted.txt
pdfimages -all source/panorama.pdf assets/extracted/img
# Convert JP2 to JPEG for the browser (macOS):
for f in assets/extracted/*.jp2; do sips -s format jpeg "$f" --out "assets/images/$(basename "$f" .jp2).jpg"; done
```

## License

Story content belongs to Amazon Mining Watch and partners. The Mapbox Storytelling template is BSD 3-Clause; see [Mapbox storytelling license](https://github.com/mapbox/storytelling/blob/main/LICENSE).
