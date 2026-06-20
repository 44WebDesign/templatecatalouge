# Template Catalogue — Setup Instructions

This turns your repo into a self-updating, searchable catalogue. Every time
you push a new template folder, GitHub will automatically:

1. Work out if it's a plain HTML template or a React/Next project
2. Screenshot the homepage (building React/Next projects first if needed)
3. Ask Claude to tag it (industry, style, light/dark) and write a description
4. Update the catalogue page, live at your GitHub Pages URL

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
│   ├── tag.js
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

## 2. Add your Anthropic API key as a GitHub Secret

This is what lets the tagging step call Claude. The key is never visible
to me — it stays encrypted inside your repo settings.

1. Go to **platform.claude.com** (or console.anthropic.com) and copy an API key.
   If you don't have one yet: log in → **API Keys** → **Create Key**.
2. In your GitHub repo, click **Settings** (top tab bar of the repo, not your
   account settings).
3. In the left sidebar, click **Secrets and variables → Actions**.
4. Click the green **New repository secret** button.
5. For **Name**, enter exactly: `ANTHROPIC_API_KEY`
6. For **Secret**, paste your API key.
7. Click **Add secret**.

That's it — don't put the key anywhere else (not in code, not in a commit).

## 3. Turn on GitHub Pages

1. Still in **Settings**, click **Pages** in the left sidebar.
2. Under **Build and deployment → Source**, choose **GitHub Actions**
   (not "Deploy from a branch").
3. Save. You don't need to pick a branch/folder — the workflow handles that.

Your catalogue will be live at:
`https://44webdesign.github.io/templatecatalouge/`

(It may take a few minutes to appear after the first successful run.)

## 4. Trigger the first run

Either:
- Push any small change (e.g. edit this README and commit), or
- Go to the **Actions** tab in your repo → click **Build Template Catalogue**
  in the left sidebar → click **Run workflow**.

Watch it run under the **Actions** tab. The first run will take longer
(building agrica and automec from scratch). Click into the run to see logs
if anything fails.

## 5. Adding new templates going forward

Just drag the new folder into the repo root via GitHub's web upload, same
as before. Within a few minutes of the push finishing, the Action will run
and the new template will appear in the catalogue automatically — no need
to come back to me for each batch.

## Notes on limitations

- **Build-based templates (Next.js, Vite, etc.)** are slower and can
  occasionally fail to build automatically (missing env vars, broken
  scripts, etc). When that happens they're flagged "Needs manual
  screenshot" in the catalogue rather than blocking everything else.
- **Re-runs are smart**: unchanged folders aren't re-screenshotted or
  re-tagged on every push — only new or modified template folders are
  processed, to save time and API costs as your library grows past 50.
- If you ever want to force a full re-tag of everything (e.g. you change
  the tagging prompt), delete `docs/catalogue.json` and push — the
  pipeline will treat everything as new.
