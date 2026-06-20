# Template Catalogue — Setup Instructions

This turns your repo into a self-updating, searchable catalogue. Every time
you push a new template folder, GitHub will automatically:

1. Work out if it's a plain HTML template or a React/Next project
2. Screenshot the homepage (building React/Next projects first if needed)
3. Update the catalogue page, live at your GitHub Pages URL

Tags (industry, style, light/dark) are added by hand on the catalogue page
itself — there's no AI tagging step, so no API costs. See "Adding tags" below.

If a template fails to build or screenshot automatically, it still appears
in the catalogue — just flagged "Needs manual screenshot" instead of
breaking the whole run.

## 1. Add the files to your repo

Unzip the file I've given you and copy everything into the root of your
`templatecatalouge` repo, so you end up with this sitting alongside your
existing template folders (`agrica`, `automec`, etc):

```
templatecatalouge/
├── .github/
│   └── workflows/
│       └── catalogue.yml
├── docs/
│   ├── index.html
│   └── catalogue.json
├── scripts/
│   ├── discover.js
│   ├── screenshot.js
│   └── build-catalogue.js
├── package.json
├── .gitignore
├── agrica/              <- your existing folders, untouched
├── automec/
├── carservx/
├── crank/
├── farmix/
└── hotcoffee-html/
```

The easiest way: on github.com, click **Add file → Upload files** at the
repo root, then drag in the unzipped folder contents (GitHub will preserve
the folder structure). Commit directly to `main`.

## 2. Turn on GitHub Pages

1. In your repo, click **Settings** (top tab bar of the repo, not your
   account settings).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**
   (not "Deploy from a branch").
4. Save. You don't need to pick a branch/folder — the workflow handles that.

Your catalogue will be live at:
`https://44webdesign.github.io/templatecatalouge/`

(It may take a few minutes to appear after the first successful run.)

## 3. Trigger the first run

Either:
- Push any small change (e.g. edit this README and commit), or
- Go to the **Actions** tab in your repo → click **Build Template Catalogue**
  in the left sidebar → click **Run workflow**.

Watch it run under the **Actions** tab. The first run will take longer
(building agrica and automec from scratch). Click into the run to see logs
if anything fails.

## 4. Adding new templates going forward

Just drag the new folder into the repo root via GitHub's web upload, same
as before. Within a few minutes of the push finishing, the Action will run
and the new template will appear in the catalogue automatically — no need
to come back to me for each batch.

## 5. Adding tags

Tags aren't generated automatically — you add them yourself on the
catalogue page, which takes about 20 seconds per template:

1. Open your catalogue page.
2. Find the template card, click **+ Add tags** (or **Edit tags** if it
   already has some).
3. Fill in industry tags (e.g. `cafe, restaurant`), style tags (e.g.
   `minimal, warm`), colour mode, and a short description.
4. Click **Generate snippet**, then **Copy snippet**.
5. In your GitHub repo, open `docs/catalogue.json`, find the entry for that
   template (search for its slug, e.g. `"slug": "carservx"`), and replace
   its `"tags": ...` value with what you copied.
6. Commit the change.

The card updates instantly in your browser when you generate the snippet
(so you can keep tagging several templates in one sitting before going to
commit them all at once), but that only persists once you've actually
pasted it into the file and committed — refreshing the page without
committing will lose anything not yet saved to the file.

## Notes on limitations

- **Build-based templates (Next.js, Vite, etc.)** are slower and can
  occasionally fail to build automatically (missing env vars, broken
  scripts, etc). When that happens they're flagged "Needs manual
  screenshot" in the catalogue rather than blocking everything else.
- **Re-runs are smart**: unchanged folders aren't re-screenshotted on
  every push — only new or modified template folders are processed, to
  save time as your library grows past 50.
- Tags you've added are preserved automatically even if a template's
  screenshot gets regenerated later (e.g. if you update the source files).

