# Alex Rivera — Portfolio

A fully static, zero-dependency portfolio website ready for deployment on GitHub Pages.

---

## Quick Start

1. [Download or clone this repo](#)
2. Open `index.html` in any browser — no build step needed
3. Customize your info in `js/script.js` (the `CONFIG` object)
4. Push to GitHub and enable Pages

---

## File Structure

```
/
├── index.html              # Main page (rarely needs editing)
├── css/
│   └── style.css           # All styles and design tokens
├── js/
│   └── script.js           # ★ CONFIG object — edit your info here
├── assets/
│   ├── images/
│   │   ├── profile.jpg     # ← Replace with your photo
│   │   ├── project1.jpg    # ← Replace with project screenshot
│   │   ├── project2.jpg
│   │   └── project3.jpg
│   └── documents/
│       └── resume.pdf      # ← Replace with your actual resume
└── README.md
```

---

## How to Customize Your Info

Everything is controlled from a single `CONFIG` object at the top of `js/script.js`. You don't need to touch `index.html` for most changes.

### 1. Personal Details

```js
const CONFIG = {
  name:       "Your Name",
  profession: "Your Profession",
  email:      "you@example.com",
  phone:      "+1 (555) 000-0000",
  location:   "City, Country",
  ...
```

### 2. Social Links

Add, remove, or update any social link by editing the `socials` array:

```js
socials: [
  { name: "GitHub",   url: "https://github.com/yourusername",       icon: `...svg...` },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile",   icon: `...svg...` },
  // Set url: "" to hide a link entirely
],
```

### 3. Skills

Edit the three skill sections:

```js
techSkills: [
  { name: "React", pct: 90 },   // pct = bar fill percentage (0–100)
],

tools: ["Docker", "AWS", "Figma"],   // shown as tags

softSkills: ["Clear communication", "Mentorship"],
```

### 4. Projects

Add or edit project entries. Each project has an associated image:

```js
projects: [
  {
    title:       "My Project",
    description: "What it does and why it matters.",
    image:       "assets/images/project1.jpg",   // see section below
    tags:        ["React", "Node.js"],
    github:      "https://github.com/you/project",
    demo:        "https://myproject.com",         // set to "" to hide
  },
],
```

To **add a new project**:
1. Add a new object to the `projects` array
2. Copy a project screenshot into `assets/images/` (e.g., `project4.jpg`)
3. Update `image: "assets/images/project4.jpg"`

### 5. Experience

```js
experience: [
  {
    period:  "Jan 2023 – Present",
    title:   "Senior Developer",
    company: "Company Name · Location",
    desc:    "What you did and the impact it had.",
  },
],
```

### 6. Education & Certifications

Same pattern — add objects to the `education` and `certifications` arrays.

---

## How to Replace Images

### Profile Photo

1. Prepare a square photo (at least 400×400 px, JPG or PNG)
2. Rename it `profile.jpg`
3. Drop it into `assets/images/`
4. Done — the site picks it up automatically

> **Tip:** Use a photo with good contrast against both dark and light backgrounds.

### Project Screenshots

1. Take or export a 16:9 screenshot of each project (at least 800×450 px)
2. Name them `project1.jpg`, `project2.jpg`, `project3.jpg`
3. Drop them into `assets/images/`

If an image file is missing, the site shows a styled placeholder text box instead of breaking the layout.

### Changing Image File Names

If you prefer different filenames, update the `image` field in the CONFIG:

```js
image: "assets/images/my-custom-name.jpg",
```

---

## Uploading Your Resume

1. Export your resume as `resume.pdf`
2. Place it at `assets/documents/resume.pdf`
3. The Download Resume button in the hero will serve this file

To change the path, update `CONFIG.resumePath`.

---

## Theming & Colors

All design tokens live at the top of `css/style.css`:

```css
[data-theme="dark"] {
  --accent: #f0b429;          /* change accent color here */
  --bg-base: #0d0d12;         /* main background */
  --text-primary: #f0f0f5;    /* heading text */
  ...
}

[data-theme="light"] {
  --accent: #d9910f;
  ...
}
```

Change `--accent` to instantly retheme the entire site.

---

## Deploy to GitHub Pages

### Step-by-step

1. **Create a GitHub repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it `yourusername.github.io` *(for a root domain)* or any name *(for a project page)*
   - Set it to **Public**

2. **Upload your files**

   Option A — via GitHub web UI:
   - Open your repo → click **Add file → Upload files**
   - Drag the entire folder contents (including `index.html`, `css/`, `js/`, `assets/`)
   - Commit directly to `main`

   Option B — via Git CLI:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - In your repo, go to **Settings → Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch, **/ (root)** folder
   - Click **Save**

4. **Wait ~60 seconds**, then visit:
   - `https://yourusername.github.io` (root domain repo)
   - `https://yourusername.github.io/reponame` (project repo)

### Custom Domain (optional)

1. In **Settings → Pages**, enter your custom domain (e.g., `alexrivera.dev`)
2. Add a `CNAME` file in the repo root containing your domain
3. Point your DNS `A` records to GitHub's IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

---

## Updating the Site

After the initial deploy, any push to `main` will automatically rebuild the GitHub Pages site (usually within 30–60 seconds).

---

## FAQ

**Q: Do I need Node.js, npm, or a build step?**  
No. This is pure HTML/CSS/JS. Open `index.html` directly in a browser.

**Q: Does the contact form send emails?**  
It opens your visitor's default email client with the message pre-filled (mailto link). No server or API key required. For a real form backend, drop in [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com).

**Q: How do I add more sections?**  
Add a new `<section>` in `index.html` following the same pattern, then style it in `style.css`.

**Q: How do I add more projects?**  
Add more objects to `CONFIG.projects` in `script.js` and drop the corresponding images into `assets/images/`.

**Q: Can I change the fonts?**  
Yes — swap the Google Fonts `<link>` in `index.html` and update the font-family references in `style.css` (search for `'Syne'` and `'Inter'`).

---

## Accessibility

- Semantic HTML5 landmarks (`<nav>`, `<section>`, `<footer>`)
- ARIA labels on interactive elements
- Visible keyboard focus rings
- Respects `prefers-reduced-motion`
- Color contrast meets WCAG AA in both themes
- Alt text on all images

---

## License

MIT — free to use, modify, and deploy for personal and commercial projects.
