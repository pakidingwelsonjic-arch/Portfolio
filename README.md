# 🚀 Developer Portfolio — GitHub Pages Template

A modern, professional portfolio website built with pure HTML, CSS, and JavaScript.
No frameworks. No build tools. No npm. **Deploy in under 5 minutes.**

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://pages.github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✨ Features

- 🌗 Dark / Light mode (persists via localStorage)
- 📱 Fully responsive — mobile, tablet, desktop
- ⚡ Zero dependencies — loads instantly
- 🧩 Single `CONFIG` object for all personalisation
- ♿ Accessible — semantic HTML, ARIA labels, keyboard navigation
- 🎨 Smooth animations & scroll-triggered reveals
- 🖨 Typewriter effect in hero section
- 📄 Sections: Hero, About, Skills, Projects, Experience, Education, Certifications, Contact, Footer

---

## 📁 Project Structure

```
/
├── index.html               ← Main HTML (do not rename)
├── css/
│   └── style.css            ← All styles
├── js/
│   └── script.js            ← All JS + CONFIG object
├── assets/
│   ├── images/
│   │   └── profile.jpg      ← Replace with your photo
│   └── documents/
│       └── resume.pdf       ← Replace with your resume
└── README.md
```

> ⚠️ **Do not change this folder structure.** GitHub Pages serves `index.html`
> from the root, and all paths are relative to that location.

---

## 🚀 Deployment to GitHub Pages

### Step 1 — Create your repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `portfolio` (or `yourusername.github.io` for a root site)
3. Set visibility to **Public**
4. Click **Create repository**

### Step 2 — Upload the files

**Option A — GitHub web interface (easiest)**

1. Open your new repository
2. Click **Add file → Upload files**
3. Drag and drop the entire project folder
4. Commit directly to `main`

**Option B — Git command line**

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to **Settings → Pages** in your repository
2. Under **Source**, select **Deploy from a branch**
3. Set Branch to `main`, folder to `/ (root)`
4. Click **Save**

### Step 4 — Your site is live! 🎉

GitHub will show a green banner with your URL:

- **Project site:** `https://yourusername.github.io/portfolio`
- **User site** (if repo is named `yourusername.github.io`): `https://yourusername.github.io`

> ⏱ First deployment takes 1–3 minutes. Subsequent updates deploy in ~30 seconds.

---

## ✏️ Customising Your Portfolio

**All personal information lives in one place:**

```
js/script.js  →  const CONFIG = { ... }
```

Open that file, find the `CONFIG` object at the top, and fill in your details.
Every section of the site is driven from that object.

### Key fields to update

| Field | Description |
|---|---|
| `name` | Your full name |
| `initials` | 2-letter initials shown in nav logo |
| `roles` | Array of strings for the typewriter effect |
| `tagline` | One-line hero tagline |
| `bio` | Array of paragraphs for the About section |
| `stats` | 4 stat cards (years, projects, etc.) |
| `social` | GitHub, LinkedIn, Twitter, Email links |
| `email` | Contact email |
| `skills` | Skill categories with icons and tags |
| `projects` | Project cards with links |
| `experience` | Work history timeline |
| `education` | Education cards |
| `certifications` | Cert cards with optional links |

---

## 🖼 Replacing the Profile Photo

1. Prepare a square image (recommended: **400×400px minimum**, JPEG or PNG)
2. Name it **`profile.jpg`** (keep the exact filename)
3. Place it at `assets/images/profile.jpg`
4. Commit and push — done!

**Using a different filename?**
Update `CONFIG.profileImage` in `js/script.js`:

```js
profileImage: "assets/images/my-photo.png",
```

> ℹ️ If `profile.jpg` is missing, the site shows a neutral placeholder automatically
> (via the `onerror` handler on the `<img>` tag in `index.html`).

---

## 📄 Replacing the Resume

1. Export your resume as a PDF
2. Name it **`resume.pdf`**
3. Place it at `assets/documents/resume.pdf`
4. Commit and push

**Using a different filename?**
Update `CONFIG.resumePath` in `js/script.js`:

```js
resumePath: "assets/documents/alex-rivera-cv-2024.pdf",
```

---

## 🔗 Updating Social Links

In `CONFIG.social`, update the `url` for each entry:

```js
social: [
  { label: "GitHub",   icon: "GH", url: "https://github.com/yourusername" },
  { label: "LinkedIn", icon: "in", url: "https://linkedin.com/in/yourusername" },
  { label: "Twitter",  icon: "𝕏",  url: "https://twitter.com/yourusername" },
  { label: "Email",    icon: "✉",  url: "mailto:your@email.com" },
],
```

---

## 🎨 Changing Colours

Edit the CSS custom properties at the top of `css/style.css`:

```css
:root {
  --clr-accent:    #6366f1;  /* Primary accent (indigo) */
  --clr-accent-hi: #818cf8;  /* Lighter accent for hover states */
  --clr-amber:     #f59e0b;  /* Section label highlight colour */
  /* ... */
}
```

Light mode values are in the `[data-theme="light"]` block just below.

---

## 🐛 Troubleshooting

### CSS / JS not loading

**Symptom:** Site looks unstyled or buttons don't work.

**Cause:** Absolute paths (e.g. `/css/style.css`) break on project sites served
from a subdirectory like `/portfolio/`.

**Fix:** This template uses only **relative paths** (`css/style.css`, `js/script.js`).
Verify the files are in the correct folders and that you haven't accidentally
moved `index.html` into a subfolder.

---

### Profile image not showing

**Symptom:** Broken image icon appears.

**Fix options:**
1. Confirm `assets/images/profile.jpg` exists in the repository
2. Check the filename matches `CONFIG.profileImage` exactly (case-sensitive on Linux)
3. Push the file — GitHub Pages won't serve files not in the repo

---

### Resume PDF 404

**Symptom:** Clicking "Download CV" shows a 404 page.

**Fix:** Upload your PDF to `assets/documents/resume.pdf` and push to `main`.

---

### Changes not appearing after push

GitHub Pages caches aggressively. Try:
1. Hard-refresh the browser (`Ctrl+Shift+R` / `Cmd+Shift+R`)
2. Wait 2–3 minutes for GitHub's CDN to propagate
3. Check the **Actions** tab in your repo for any deployment errors

---

### Site URL is wrong

| Repo name | URL |
|---|---|
| `yourusername.github.io` | `https://yourusername.github.io` |
| `portfolio` | `https://yourusername.github.io/portfolio` |
| `my-site` | `https://yourusername.github.io/my-site` |

If your repo is a **project site** (not `username.github.io`), the site is
served from a subdirectory. All relative paths in this template handle this
correctly without any changes.

---

### Custom domain

1. Add a `CNAME` file to the repo root containing your domain:
   ```
   www.yourdomain.com
   ```
2. Configure your DNS with your domain registrar
3. Enable HTTPS in **Settings → Pages → Enforce HTTPS**

---

## 📝 Licence

MIT — free to use, modify, and redistribute. Attribution appreciated but not required.

---

## 🙏 Acknowledgements

- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts
- Hosting: [GitHub Pages](https://pages.github.com)
