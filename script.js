/**
 * ============================================================
 * PORTFOLIO — script.js
 * GITHUB PAGES SAFE: loaded via relative path from index.html
 *
 * HOW TO CUSTOMISE:
 *   Edit the CONFIG object below. Every piece of personal
 *   information flows from here — no other file needs changes
 *   for basic customisation.
 * ============================================================
 */

/* ============================================================
   ✏️  EDIT THIS CONFIG OBJECT WITH YOUR INFORMATION
   ============================================================ */

const CONFIG = {

  /* ── Personal Info ─────────────────────────────────────── */
  name:       "Alex Rivera",
  initials:   "AR",
  location:   "San Francisco, CA",

  /** Profession shown under your name (cycles via typewriter) */
  roles: [
    "full-stack web apps",
    "beautiful UIs",
    "performant APIs",
    "developer tools",
    "accessible experiences",
  ],

  tagline:
    "Crafting performant, accessible, and beautifully designed web experiences that users love.",

  /* ── About Me ───────────────────────────────────────────── */
  bio: [
    "Hey! I'm a full-stack developer with 5+ years of experience building everything from nimble startup MVPs to large-scale enterprise platforms. I care deeply about clean code, thoughtful UX, and the tiny details that separate a good product from a great one.",
    "When I'm not pushing pixels or wrangling databases, I'm contributing to open-source projects, writing about software on my blog, or exploring hiking trails somewhere with bad cell service.",
  ],

  stats: [
    { number: "5+",  label: "Years Experience" },
    { number: "40+", label: "Projects Shipped" },
    { number: "12+", label: "Happy Clients"    },
    { number: "3k+", label: "GitHub Stars"     },
  ],

  /* ── Social Links ───────────────────────────────────────── */
  social: [
    { label: "GitHub",   icon: "GH", url: "https://github.com/yourusername",         title: "GitHub Profile"   },
    { label: "LinkedIn", icon: "in", url: "https://linkedin.com/in/yourusername",    title: "LinkedIn Profile" },
    { label: "Twitter",  icon: "𝕏",  url: "https://twitter.com/yourusername",        title: "Twitter/X"        },
    { label: "Email",    icon: "✉",  url: "mailto:hello@example.com",               title: "Send Email"       },
  ],

  /* ── Resume ─────────────────────────────────────────────── */
  /*
   * GITHUB PAGES SAFE: relative path.
   * Replace assets/documents/resume.pdf with your actual resume.
   */
  resumePath: "assets/documents/resume.pdf",

  /* ── Profile Image ──────────────────────────────────────── */
  /*
   * GITHUB PAGES SAFE: relative path.
   * Replace assets/images/profile.jpg with your photo.
   * See README.md for sizing recommendations.
   */
  profileImage: "assets/images/profile.jpg",
  profileAlt:   "Profile photo of Alex Rivera",

  /* ── Skills ─────────────────────────────────────────────── */
  skills: [
    {
      name:  "Frontend",
      icon:  "🖥",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "Vue.js"],
    },
    {
      name:  "Backend",
      icon:  "⚙️",
      items: ["Node.js", "Python", "FastAPI", "Express", "GraphQL", "REST APIs"],
    },
    {
      name:  "Databases",
      icon:  "🗄",
      items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma", "MySQL"],
    },
    {
      name:  "Cloud & DevOps",
      icon:  "☁️",
      items: ["AWS", "Docker", "GitHub Actions", "Vercel", "Linux", "Terraform"],
    },
    {
      name:  "Tools",
      icon:  "🛠",
      items: ["Git", "Figma", "VS Code", "Postman", "Jira", "Notion"],
    },
    {
      name:  "Testing",
      icon:  "🧪",
      items: ["Jest", "Vitest", "Cypress", "Playwright", "Testing Library", "Storybook"],
    },
  ],

  /* ── Projects ───────────────────────────────────────────── */
  projects: [
    {
      title:    "DevFlow — Project Management",
      desc:     "A real-time collaborative project management tool built for engineering teams. Features kanban boards, sprint planning, and GitHub integration.",
      tags:     ["React", "Node.js", "Socket.io", "PostgreSQL", "Docker"],
      github:   "https://github.com/yourusername/devflow",
      live:     "https://devflow.example.com",
      featured: true,
    },
    {
      title:    "Luminary — Design System",
      desc:     "An accessible, themeable design system with 40+ components. Published to npm with full TypeScript support and Storybook documentation.",
      tags:     ["TypeScript", "React", "Storybook", "CSS-in-JS", "npm"],
      github:   "https://github.com/yourusername/luminary",
      live:     "https://luminary.example.com",
      featured: true,
    },
    {
      title:    "Pulse — Analytics Dashboard",
      desc:     "A lightweight web analytics platform that respects user privacy. Self-hostable, GDPR-compliant, and blazing fast.",
      tags:     ["Next.js", "Supabase", "Chart.js", "Vercel"],
      github:   "https://github.com/yourusername/pulse",
      live:     null,
      featured: false,
    },
    {
      title:    "Scribe — AI Writing Assistant",
      desc:     "A browser extension that uses AI to help developers write better commit messages, PR descriptions, and documentation.",
      tags:     ["JavaScript", "Chrome Extension", "OpenAI API", "Manifest V3"],
      github:   "https://github.com/yourusername/scribe",
      live:     "https://chromewebstore.google.com",
      featured: false,
    },
    {
      title:    "OpenWeather CLI",
      desc:     "A zero-dependency command-line weather tool with beautiful terminal output, location detection, and 7-day forecasts.",
      tags:     ["Python", "CLI", "OpenWeatherMap API", "Rich"],
      github:   "https://github.com/yourusername/openweather-cli",
      live:     null,
      featured: false,
    },
    {
      title:    "Portfolio Template",
      desc:     "The very portfolio you're looking at — open-sourced as a free template for developers. No frameworks, no build step, pure HTML/CSS/JS.",
      tags:     ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      github:   "https://github.com/yourusername/portfolio",
      live:     "https://yourusername.github.io",
      featured: false,
    },
  ],

  /* ── Work Experience ────────────────────────────────────── */
  experience: [
    {
      company:  "Acme Corp",
      role:     "Senior Full-Stack Engineer",
      period:   "2022 – Present",
      icon:     "🚀",
      desc:     "Leading frontend architecture and driving adoption of modern React patterns across a suite of B2B SaaS products.",
      bullets:  [
        "Reduced Time-to-Interactive by 42% by migrating from Create React App to Next.js with RSC.",
        "Designed and implemented a shared component library used by 6 product teams.",
        "Mentored 3 junior engineers, conducting weekly code reviews and pair programming sessions.",
      ],
    },
    {
      company:  "Pixel Labs (Agency)",
      role:     "Full-Stack Developer",
      period:   "2020 – 2022",
      icon:     "💻",
      desc:     "Delivered end-to-end web solutions for clients ranging from seed-stage startups to Fortune 500 companies.",
      bullets:  [
        "Built 15+ client projects on time and budget, averaging 4.9/5 client satisfaction.",
        "Architected a headless CMS integration framework adopted as a company standard.",
        "Introduced automated testing (Jest + Cypress) that reduced regression bugs by 60%.",
      ],
    },
    {
      company:  "Freelance",
      role:     "Web Developer & Consultant",
      period:   "2018 – 2020",
      icon:     "🌐",
      desc:     "Independently built and shipped products for clients across e-commerce, fintech, and education sectors.",
      bullets:  [
        "Grew freelance revenue from $0 to $80k ARR within 18 months.",
        "Launched 3 SaaS micro-products, one of which was acquired by a larger platform.",
      ],
    },
  ],

  /* ── Education ──────────────────────────────────────────── */
  education: [
    {
      degree:      "B.Sc. Computer Science",
      institution: "University of California, Berkeley",
      period:      "2014 – 2018",
      icon:        "🎓",
      note:        "Dean's List. Thesis: 'Optimising React rendering pipelines for real-time collaborative apps.'",
    },
    {
      degree:      "Full-Stack Web Development",
      institution: "App Academy",
      period:      "2018",
      icon:        "🏫",
      note:        "Intensive 16-week bootcamp. Top 5% of cohort.",
    },
  ],

  /* ── Certifications ─────────────────────────────────────── */
  certifications: [
    {
      name:   "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      year:   "2023",
      icon:   "☁️",
      url:    "https://aws.amazon.com/certification/",
    },
    {
      name:   "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      year:   "2022",
      icon:   "📋",
      url:    "https://www.scrum.org/certifications",
    },
    {
      name:   "Google Associate Cloud Engineer",
      issuer: "Google Cloud",
      year:   "2022",
      icon:   "🔷",
      url:    "https://cloud.google.com/certification",
    },
    {
      name:   "Meta Front-End Developer Certificate",
      issuer: "Meta / Coursera",
      year:   "2021",
      icon:   "🎓",
      url:    "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    },
  ],

  /* ── Contact ────────────────────────────────────────────── */
  email:   "hello@example.com",
  phone:   "+1 (555) 000-0000",   /* set to null to hide */
  website: "https://example.com", /* set to null to hide */

  contactIntro:
    "I'm always open to interesting projects, collaboration, or just a friendly chat about tech. Drop me a message and I'll get back within 24 hours.",

  /* ── Footer ─────────────────────────────────────────────── */
  /* Leave {year} — it is replaced with the current year automatically */
  footerText: "© {year} Alex Rivera. All rights reserved.",
};

/* ============================================================
   APP — DO NOT EDIT BELOW UNLESS YOU KNOW WHAT YOU'RE DOING
   ============================================================ */

(function () {
  "use strict";

  /* ── DOM helpers ─────────────────────────────────────────── */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ── Theme ───────────────────────────────────────────────── */
  function initTheme() {
    const saved = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.dataset.theme = theme;

    $("#themeToggle").addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("portfolio-theme", next);
    });
  }

  /* ── Navigation ──────────────────────────────────────────── */
  function initNav() {
    const nav       = $("#nav");
    const hamburger = $("#navHamburger");
    const drawer    = $("#navDrawer");

    /* Scroll state */
    const onScroll = () => {
      nav.classList.toggle("nav--scrolled", window.scrollY > 20);
      const btt = $("#backToTop");
      btt.classList.toggle("back-to-top--visible", window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* Hamburger */
    hamburger.addEventListener("click", () => {
      const open = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!open));
      drawer.classList.toggle("nav__drawer--open", !open);
      drawer.setAttribute("aria-hidden", String(open));
    });

    /* Close drawer on link click */
    $$(".nav__link").forEach(link =>
      link.addEventListener("click", () => {
        hamburger.setAttribute("aria-expanded", "false");
        drawer.classList.remove("nav__drawer--open");
        drawer.setAttribute("aria-hidden", "true");
      })
    );

    /* Active section highlight */
    const sections = $$("section[id]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            $$(".nav__link").forEach(l => {
              l.style.color = l.getAttribute("href") === `#${e.target.id}`
                ? "var(--clr-text)"
                : "";
            });
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach(s => observer.observe(s));
  }

  /* ── Back to top ─────────────────────────────────────────── */
  function initBackToTop() {
    $("#backToTop").addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  /* ── Typewriter ──────────────────────────────────────────── */
  function initTypewriter() {
    const el    = $("#heroTypewriter");
    const roles = CONFIG.roles;
    let roleIdx = 0, charIdx = 0, deleting = false;

    function tick() {
      const word = roles[roleIdx];
      if (!deleting) {
        el.textContent = word.slice(0, ++charIdx);
        if (charIdx === word.length) {
          deleting = true;
          setTimeout(tick, 2000);
          return;
        }
      } else {
        el.textContent = word.slice(0, --charIdx);
        if (charIdx === 0) {
          deleting = false;
          roleIdx  = (roleIdx + 1) % roles.length;
          setTimeout(tick, 400);
          return;
        }
      }
      setTimeout(tick, deleting ? 55 : 90);
    }
    tick();
  }

  /* ── Scroll reveal ───────────────────────────────────────── */
  function initReveal() {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    $$(".reveal").forEach(el => io.observe(el));
  }

  /* ── Render helpers ──────────────────────────────────────── */

  function tag(name, attrs = {}, children = "") {
    const attrStr = Object.entries(attrs)
      .filter(([, v]) => v !== null && v !== undefined && v !== false)
      .map(([k, v]) => (v === true ? k : `${k}="${v}"`))
      .join(" ");
    return `<${name}${attrStr ? " " + attrStr : ""}>${children}</${name}>`;
  }

  function reveal(html) {
    return `<div class="reveal">${html}</div>`;
  }

  /* ── Populate Hero ───────────────────────────────────────── */
  function renderHero() {
    const nameEl = $("#heroName");
    if (nameEl) nameEl.textContent = CONFIG.name;

    const tagEl = $("#heroTagline");
    if (tagEl) tagEl.textContent = CONFIG.tagline;

    /* Profile image */
    const img = $("#heroImage");
    if (img && CONFIG.profileImage) {
      img.src = CONFIG.profileImage;
      img.alt = CONFIG.profileAlt || `Photo of ${CONFIG.name}`;
    }

    /* Resume link */
    const resumeEl = $("#resumeLink");
    if (resumeEl && CONFIG.resumePath) {
      resumeEl.href = CONFIG.resumePath;
    }

    /* Social links */
    const socialEl = $("#heroSocials");
    if (socialEl) {
      socialEl.innerHTML = CONFIG.social
        .map(s =>
          `<a href="${s.url}" class="hero__social-link" target="_blank" rel="noopener noreferrer" aria-label="${s.label}" title="${s.title || s.label}">${s.icon}</a>`
        )
        .join("");
    }

    /* Nav logo */
    const logo = $(".nav__logo");
    if (logo) {
      logo.innerHTML = `<span class="nav__logo-bracket">&lt;</span>${CONFIG.initials}<span class="nav__logo-bracket">/&gt;</span>`;
    }
  }

  /* ── Populate About ──────────────────────────────────────── */
  function renderAbout() {
    const textEl = $("#aboutText");
    if (textEl) {
      textEl.innerHTML = CONFIG.bio
        .map(p => reveal(tag("p", {}, p)))
        .join("");
    }

    const statsEl = $("#aboutStats");
    if (statsEl) {
      statsEl.innerHTML = CONFIG.stats
        .map(s =>
          reveal(
            `<div class="about__stat">
              <span class="about__stat-number">${s.number}</span>
              <span class="about__stat-label">${s.label}</span>
            </div>`
          )
        )
        .join("");
    }
  }

  /* ── Populate Skills ─────────────────────────────────────── */
  function renderSkills() {
    const el = $("#skillsGrid");
    if (!el) return;
    el.innerHTML = CONFIG.skills
      .map(cat =>
        reveal(
          `<div class="skill-card" role="listitem">
            <div class="skill-card__header">
              <span class="skill-card__icon" aria-hidden="true">${cat.icon}</span>
              <span class="skill-card__name">${cat.name}</span>
            </div>
            <div class="skill-card__tags">
              ${cat.items.map(i => `<span class="skill-tag">${i}</span>`).join("")}
            </div>
          </div>`
        )
      )
      .join("");
  }

  /* ── Populate Projects ───────────────────────────────────── */
  function renderProjects() {
    const el = $("#projectsGrid");
    if (!el) return;
    el.innerHTML = CONFIG.projects
      .map(p => {
        const badge = p.featured
          ? `<span class="project-card__featured-badge">✦ Featured</span>`
          : "";
        const links = [
          p.github && `<a href="${p.github}" class="project-card__link" target="_blank" rel="noopener" aria-label="GitHub repository for ${p.title}" title="GitHub repo">GH</a>`,
          p.live   && `<a href="${p.live}"   class="project-card__link" target="_blank" rel="noopener" aria-label="Live demo of ${p.title}" title="Live demo">↗</a>`,
        ]
          .filter(Boolean)
          .join("");

        return reveal(
          `<article class="project-card${p.featured ? " project-card--featured" : ""}">
            <div class="project-card__header">
              ${badge}
              <div class="project-card__links">${links}</div>
            </div>
            <div class="project-card__body">
              <h3 class="project-card__title">${p.title}</h3>
              <p  class="project-card__desc">${p.desc}</p>
              <div class="project-card__tags">
                ${p.tags.map(t => `<span class="skill-tag">${t}</span>`).join("")}
              </div>
            </div>
          </article>`
        );
      })
      .join("");
  }

  /* ── Populate Experience ─────────────────────────────────── */
  function renderExperience() {
    const el = $("#experienceTimeline");
    if (!el) return;
    el.innerHTML = CONFIG.experience
      .map(job => {
        const bullets = job.bullets
          ? `<div class="timeline-item__bullets">
              ${job.bullets.map(b => `<p class="timeline-item__bullet">${b}</p>`).join("")}
            </div>`
          : "";
        return reveal(
          `<div class="timeline-item">
            <div class="timeline-item__dot" aria-hidden="true">${job.icon || "💼"}</div>
            <div class="timeline-item__card">
              <div class="timeline-item__meta">
                <span class="timeline-item__company">${job.company}</span>
                <span class="timeline-item__period">${job.period}</span>
              </div>
              <div class="timeline-item__role">${job.role}</div>
              ${job.desc ? `<p class="timeline-item__desc">${job.desc}</p>` : ""}
              ${bullets}
            </div>
          </div>`
        );
      })
      .join("");
  }

  /* ── Populate Education ──────────────────────────────────── */
  function renderEducation() {
    const el = $("#educationGrid");
    if (!el) return;
    el.innerHTML = CONFIG.education
      .map(edu =>
        reveal(
          `<div class="edu-card">
            <div class="edu-card__icon" aria-hidden="true">${edu.icon || "🎓"}</div>
            <div class="edu-card__body">
              <div class="edu-card__degree">${edu.degree}</div>
              <div class="edu-card__institution">${edu.institution}</div>
              <div class="edu-card__period">${edu.period}</div>
              ${edu.note ? `<p class="edu-card__note">${edu.note}</p>` : ""}
            </div>
          </div>`
        )
      )
      .join("");
  }

  /* ── Populate Certifications ─────────────────────────────── */
  function renderCertifications() {
    const el = $("#certsGrid");
    if (!el) return;
    el.innerHTML = CONFIG.certifications
      .map(cert => {
        const inner =
          `<span class="cert-card__icon" aria-hidden="true">${cert.icon || "🏅"}</span>
           <div>
             <div class="cert-card__name">${cert.name}</div>
             <div class="cert-card__issuer">${cert.issuer}</div>
           </div>
           <span class="cert-card__year">${cert.year}</span>`;

        return reveal(
          cert.url
            ? `<a href="${cert.url}" class="cert-card cert-card--link" target="_blank" rel="noopener" aria-label="${cert.name} — ${cert.issuer}">${inner}</a>`
            : `<div class="cert-card">${inner}</div>`
        );
      })
      .join("");
  }

  /* ── Populate Contact ────────────────────────────────────── */
  function renderContact() {
    const introEl = $("#contactIntro");
    if (introEl) introEl.textContent = CONFIG.contactIntro;

    const infoEl = $("#contactInfo");
    if (infoEl) {
      const items = [
        { icon: "✉️", label: CONFIG.email,   href: `mailto:${CONFIG.email}` },
        CONFIG.phone   && { icon: "📞", label: CONFIG.phone,   href: `tel:${CONFIG.phone}`      },
        CONFIG.website && { icon: "🌐", label: CONFIG.website, href: CONFIG.website              },
        /* GitHub link from social */
        ...CONFIG.social
          .filter(s => s.label === "GitHub")
          .map(s => ({ icon: "🐙", label: s.url.replace("https://", ""), href: s.url })),
      ].filter(Boolean);

      infoEl.innerHTML = items
        .map(
          item =>
            `<a href="${item.href}" class="contact-item" target="${item.href.startsWith("mailto") || item.href.startsWith("tel") ? "_self" : "_blank"}" rel="noopener">
              <span class="contact-item__icon" aria-hidden="true">${item.icon}</span>
              <span>${item.label}</span>
            </a>`
        )
        .join("");
    }
  }

  /* ── Contact form ────────────────────────────────────────── */
  function initContactForm() {
    const btn = $("#contactSubmit");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const name    = $("#contactName").value.trim();
      const email   = $("#contactEmail").value.trim();
      const message = $("#contactMessage").value.trim();

      if (!name || !email || !message) {
        showToast("Please fill in all fields ✋");
        return;
      }

      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body    = encodeURIComponent(
        `Hi ${CONFIG.name},\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest,\n${name}`
      );

      window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
      showToast("Opening your email client… ✉️");
    });
  }

  /* ── Footer ──────────────────────────────────────────────── */
  function renderFooter() {
    const el = $("#footerCopy");
    if (el) {
      el.textContent = CONFIG.footerText.replace("{year}", new Date().getFullYear());
    }
  }

  /* ── Toast ───────────────────────────────────────────────── */
  function showToast(msg, duration = 3000) {
    let toast = $("#portfolioToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "portfolioToast";
      toast.className = "toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("toast--show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove("toast--show"), duration);
  }

  /* ── Smooth scroll offset (accounts for fixed nav) ──────── */
  function initSmoothScroll() {
    document.addEventListener("click", e => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    });
  }

  /* ── Initialise everything ───────────────────────────────── */
  function init() {
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderExperience();
    renderEducation();
    renderCertifications();
    renderContact();
    renderFooter();

    initTheme();
    initNav();
    initBackToTop();
    initTypewriter();
    initReveal();
    initContactForm();
    initSmoothScroll();

    /* Kick off reveal for elements already in viewport */
    setTimeout(() => {
      document.querySelectorAll(".reveal").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add("revealed");
        }
      });
    }, 100);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
