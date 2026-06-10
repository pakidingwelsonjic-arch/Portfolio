/* ============================================================
   PORTFOLIO — script.js
   ============================================================
   HOW TO CUSTOMIZE:
   Edit the CONFIG object below to update your personal
   information. You do NOT need to touch the HTML file.
   ============================================================ */

'use strict';

// ============================================================
// ★★★  CENTRALIZED CONFIGURATION — EDIT HERE ★★★
// ============================================================
const CONFIG = {

  // ----------------------------------------------------------
  // PERSONAL INFO
  // ----------------------------------------------------------
  name:       "Alex Rivera",
  profession: "Full Stack Developer",
  tagline:    "Building things for the web.",

  // ----------------------------------------------------------
  // BIOGRAPHY — shown in About section
  // Also edit the two <p> tags in index.html (about-bio-1 / about-bio-2)
  // ----------------------------------------------------------
  careerGoal: "A senior or lead role at a product company where I can own meaningful features, mentor junior developers, and keep learning at scale.",

  // ----------------------------------------------------------
  // STATS — shown in About section
  // ----------------------------------------------------------
  stats: {
    years:    "4+",
    projects: "30+",
    clients:  "20+",
    oss:      "12+",
  },

  // ----------------------------------------------------------
  // CONTACT DETAILS
  // ----------------------------------------------------------
  email:    "alex@example.com",
  phone:    "+1 (555) 000-0000",
  location: "San Francisco, CA",

  // ----------------------------------------------------------
  // SOCIAL LINKS — set url to "" to hide a link
  // ----------------------------------------------------------
  socials: [
    {
      name: "GitHub",
      url:  "https://github.com/yourusername",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    },
    {
      name: "LinkedIn",
      url:  "https://linkedin.com/in/yourprofile",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    },
    {
      name: "Twitter",
      url:  "https://twitter.com/yourhandle",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
    },
    {
      name: "Email",
      url:  "mailto:alex@example.com",
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    },
  ],

  // ----------------------------------------------------------
  // RESUME — path to your PDF (place in assets/documents/)
  // ----------------------------------------------------------
  resumePath: "assets/documents/resume.pdf",

  // ----------------------------------------------------------
  // GITHUB PROFILE URL
  // ----------------------------------------------------------
  githubProfile: "https://github.com/yourusername",

  // ----------------------------------------------------------
  // TECHNICAL SKILLS — name + percentage (0-100)
  // ----------------------------------------------------------
  techSkills: [
    { name: "React / Next.js",  pct: 92 },
    { name: "TypeScript",       pct: 88 },
    { name: "Node.js / Express",pct: 85 },
    { name: "PostgreSQL",       pct: 80 },
    { name: "GraphQL",          pct: 74 },
    { name: "Python",           pct: 70 },
  ],

  // ----------------------------------------------------------
  // TOOLS & PLATFORMS — shown as tags
  // ----------------------------------------------------------
  tools: [
    "Git & GitHub", "Docker", "AWS", "Vercel",
    "Figma", "Tailwind CSS", "Prisma", "Redis",
    "Jest", "Cypress", "Linux", "CI/CD",
  ],

  // ----------------------------------------------------------
  // SOFT SKILLS — shown as a list
  // ----------------------------------------------------------
  softSkills: [
    "Clear written communication",
    "Collaborative code review",
    "Technical mentorship",
    "Asynchronous team work",
    "Pragmatic problem-solving",
    "Ownership & accountability",
  ],

  // ----------------------------------------------------------
  // PROJECTS
  // Each project image loads from assets/images/project1.jpg etc.
  // Set image: "" to show a placeholder instead.
  // ----------------------------------------------------------
  projects: [
    {
      title:       "Arcane Dashboard",
      description: "A real-time analytics dashboard for SaaS products. Supports multi-tenant data, live socket updates, and customizable widget layouts.",
      // REPLACE PROJECT IMAGE HERE — file: assets/images/project1.jpg
      image:       "assets/images/project1.jpg",
      tags:        ["React", "Node.js", "Socket.io", "PostgreSQL"],
      github:      "https://github.com/yourusername/arcane-dashboard",
      demo:        "https://arcane-dashboard.vercel.app",
    },
    {
      title:       "ShopFlow API",
      description: "A headless e-commerce REST API with Stripe payments, inventory management, and webhook handling for order fulfillment pipelines.",
      // REPLACE PROJECT IMAGE HERE — file: assets/images/project2.jpg
      image:       "assets/images/project2.jpg",
      tags:        ["Node.js", "TypeScript", "Stripe", "Redis"],
      github:      "https://github.com/yourusername/shopflow-api",
      demo:        "",
    },
    {
      title:       "Lexify",
      description: "A collaborative document editor with real-time cursors, block-based editing, and AI-powered writing suggestions built on a CRDT core.",
      // REPLACE PROJECT IMAGE HERE — file: assets/images/project3.jpg
      image:       "assets/images/project3.jpg",
      tags:        ["React", "Yjs", "Hocuspocus", "OpenAI"],
      github:      "https://github.com/yourusername/lexify",
      demo:        "https://lexify.vercel.app",
    },
  ],

  // ----------------------------------------------------------
  // WORK EXPERIENCE — most recent first
  // ----------------------------------------------------------
  experience: [
    {
      period:  "Jan 2023 – Present",
      title:   "Senior Full Stack Developer",
      company: "Coherent Systems · San Francisco, CA",
      desc:    "Leading frontend architecture for a B2B SaaS platform serving 40,000+ users. Reduced initial load time by 42% through code splitting and image optimization. Mentoring a team of three mid-level engineers.",
    },
    {
      period:  "Jun 2021 – Dec 2022",
      title:   "Full Stack Developer",
      company: "Byteframe Agency · Remote",
      desc:    "Built and shipped eight client projects across fintech, edtech, and consumer verticals. Introduced TypeScript across the codebase and established testing standards that cut regression bugs by 60%.",
    },
    {
      period:  "Mar 2020 – May 2021",
      title:   "Junior Frontend Developer",
      company: "Spark Creative · Austin, TX",
      desc:    "Developed interactive marketing microsites and internal tooling. Collaborated closely with designers to translate Figma prototypes into pixel-perfect, accessible React components.",
    },
  ],

  // ----------------------------------------------------------
  // EDUCATION
  // ----------------------------------------------------------
  education: [
    {
      degree: "B.Sc. Cognitive Science",
      school: "University of California, San Diego",
      year:   "2015 – 2019",
      note:   "Concentration in Human–Computer Interaction",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "App Academy",
      year:   "2019",
      note:   "Selective 1,000-hour immersive program",
    },
  ],

  // ----------------------------------------------------------
  // CERTIFICATIONS
  // ----------------------------------------------------------
  certifications: [
    {
      title:  "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date:   "2023",
    },
    {
      title:  "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      date:   "2022",
    },
    {
      title:  "MongoDB Associate Developer",
      issuer: "MongoDB University",
      date:   "2021",
    },
  ],

};
// ============================================================
// END OF CONFIG — no need to edit below this line
// ============================================================




/* ----------------------------------------------------------
   DOM READY
   ---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  initTheme();
  initNav();
  initSkillBars();
  initScrollReveal();
  initContactForm();
});


/* ----------------------------------------------------------
   APPLY CONFIG TO DOM
   ---------------------------------------------------------- */
function applyConfig() {
  // Basic text fields
  setText('hero-name',      CONFIG.name);
  setText('hero-profession', CONFIG.profession);
  setText('footer-logo',    CONFIG.name);
  setText('footer-tagline', CONFIG.tagline);

  // Resume button
  const resumeBtn = document.getElementById('resume-btn');
  if (resumeBtn) resumeBtn.href = CONFIG.resumePath;

  // GitHub profile link
  const ghLink = document.getElementById('github-profile-link');
  if (ghLink) ghLink.href = CONFIG.githubProfile;

  // Stats
  setText('stat-years',    CONFIG.stats.years);
  setText('stat-projects', CONFIG.stats.projects);
  setText('stat-clients',  CONFIG.stats.clients);
  setText('stat-oss',      CONFIG.stats.oss);

  // Career goal
  setText('career-goal', CONFIG.careerGoal);

  // Footer copyright year
  const yearEl = document.getElementById('footer-copy');
  if (yearEl) yearEl.textContent = `© ${new Date().getFullYear()} ${CONFIG.name}. All rights reserved.`;

  // Socials (hero + contact)
  renderSocials('hero-socials');
  renderSocials('contact-socials');

  // Sections
  renderTechSkills();
  renderTools();
  renderSoftSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderCertifications();
  renderContactDetails();

  // Nav logo ARIA
  const logo = document.querySelector('.nav-logo');
  if (logo) logo.textContent = CONFIG.name.split(' ').map(w => w[0]).join('');
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}


/* ----------------------------------------------------------
   SOCIAL LINKS
   ---------------------------------------------------------- */
function renderSocials(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = CONFIG.socials
    .filter(s => s.url)
    .map(s => `
      <a class="social-link" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.name}">
        ${s.icon}
        <span>${s.name}</span>
      </a>
    `).join('');
}


/* ----------------------------------------------------------
   SKILLS
   ---------------------------------------------------------- */
function renderTechSkills() {
  const container = document.getElementById('tech-skills');
  if (!container) return;

  container.innerHTML = CONFIG.techSkills.map(s => `
    <div class="skill-bar-item reveal">
      <div class="skill-bar-label">
        <span class="skill-bar-name">${s.name}</span>
        <span class="skill-bar-pct">${s.pct}%</span>
      </div>
      <div class="skill-bar-track" role="progressbar" aria-valuenow="${s.pct}" aria-valuemin="0" aria-valuemax="100" aria-label="${s.name} proficiency">
        <div class="skill-bar-fill" data-pct="${s.pct}"></div>
      </div>
    </div>
  `).join('');
}

function renderTools() {
  const container = document.getElementById('tool-skills');
  if (!container) return;

  container.innerHTML = CONFIG.tools
    .map(t => `<span class="skill-tag">${t}</span>`)
    .join('');
}

function renderSoftSkills() {
  const container = document.getElementById('soft-skills');
  if (!container) return;

  container.innerHTML = CONFIG.softSkills
    .map(s => `<li class="soft-skill-item">${s}</li>`)
    .join('');
}

// Animate bars when they enter the viewport
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const pct = entry.target.getAttribute('data-pct');
        entry.target.style.width = pct + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
}


/* ----------------------------------------------------------
   PROJECTS
   ---------------------------------------------------------- */
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = CONFIG.projects.map((p, i) => {
    // Build image or placeholder
    // REPLACE PROJECT IMAGE HERE — edit the image path in CONFIG.projects[n].image
    const imgHtml = p.image
      ? `<img
           src="${p.image}"
           alt="${p.title} project screenshot"
           loading="lazy"
           onerror="this.onerror=null; this.parentElement.innerHTML='<div class=&quot;project-img-placeholder&quot;>[ ${p.title} ]</div>'"
         />`
      : `<div class="project-img-placeholder">[ ${p.title} ]</div>`;

    // Links
    const githubLink = p.github
      ? `<a class="project-link" href="${p.github}" target="_blank" rel="noopener noreferrer" aria-label="View ${p.title} source on GitHub">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
           GitHub
         </a>`
      : '';

    const demoLink = p.demo
      ? `<a class="project-link" href="${p.demo}" target="_blank" rel="noopener noreferrer" aria-label="View ${p.title} live demo">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
           Live Demo
         </a>`
      : '';

    const delayClass = `reveal-delay-${Math.min(i + 1, 3)}`;

    return `
      <article class="project-card reveal ${delayClass}" role="listitem">
        <div class="project-img-wrap">
          ${imgHtml}
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          <div class="project-links">
            ${githubLink}
            ${demoLink}
          </div>
        </div>
      </article>
    `;
  }).join('');
}


/* ----------------------------------------------------------
   EXPERIENCE TIMELINE
   ---------------------------------------------------------- */
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = CONFIG.experience.map((e, i) => {
    const delayClass = `reveal-delay-${Math.min(i + 1, 3)}`;
    return `
      <div class="timeline-item reveal ${delayClass}" role="listitem">
        <div class="timeline-dot" aria-hidden="true">
          <div class="timeline-dot-inner"></div>
        </div>
        <div class="timeline-content">
          <span class="timeline-period">${e.period}</span>
          <h3 class="timeline-title">${e.title}</h3>
          <p class="timeline-company">${e.company}</p>
          <p class="timeline-desc">${e.desc}</p>
        </div>
      </div>
    `;
  }).join('');
}


/* ----------------------------------------------------------
   EDUCATION
   ---------------------------------------------------------- */
function renderEducation() {
  const container = document.getElementById('education-list');
  if (!container) return;

  container.innerHTML = CONFIG.education.map(e => `
    <div class="edu-card reveal">
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-school">${e.school}</div>
      ${e.note ? `<div class="edu-year">${e.note}</div>` : ''}
      <div class="edu-year" style="margin-top:4px">${e.year}</div>
    </div>
  `).join('');
}


/* ----------------------------------------------------------
   CERTIFICATIONS
   ---------------------------------------------------------- */
function renderCertifications() {
  const container = document.getElementById('cert-list');
  if (!container) return;

  container.innerHTML = CONFIG.certifications.map(c => `
    <div class="cert-card reveal">
      <div class="cert-title">${c.title}</div>
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-date">${c.date}</div>
    </div>
  `).join('');
}


/* ----------------------------------------------------------
   CONTACT DETAILS
   ---------------------------------------------------------- */
function renderContactDetails() {
  const container = document.getElementById('contact-details');
  if (!container) return;

  const items = [
    {
      icon:  '✉',
      label: 'Email',
      value: `<a href="mailto:${CONFIG.email}">${CONFIG.email}</a>`,
    },
    {
      icon:  '☏',
      label: 'Phone',
      value: `<a href="tel:${CONFIG.phone}">${CONFIG.phone}</a>`,
    },
    {
      icon:  '◎',
      label: 'Location',
      value: CONFIG.location,
    },
  ];

  container.innerHTML = items.map(item => `
    <li class="contact-item">
      <div class="contact-item-icon" aria-hidden="true">${item.icon}</div>
      <div>
        <span class="contact-item-label">${item.label}</span>
        <span class="contact-item-value">${item.value}</span>
      </div>
    </li>
  `).join('');
}


/* ----------------------------------------------------------
   THEME TOGGLE
   ---------------------------------------------------------- */
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Load saved preference or system preference
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  html.setAttribute('data-theme', initial);

  btn && btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}


/* ----------------------------------------------------------
   NAVBAR — scroll behaviour + mobile menu + active link
   ---------------------------------------------------------- */
function initNav() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  const links     = navLinks ? navLinks.querySelectorAll('a') : [];

  // Sticky shadow on scroll
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Mobile hamburger toggle
  hamburger && hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger && hamburger.classList.remove('open');
      hamburger && hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Highlight active section in nav
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = { rootMargin: '-40% 0px -50% 0px' };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => {
          l.classList.toggle(
            'active',
            l.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, observerOptions);

  sections.forEach(s => sectionObserver.observe(s));
}


/* ----------------------------------------------------------
   SCROLL REVEAL
   ---------------------------------------------------------- */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(el => observer.observe(el));
}


/* ----------------------------------------------------------
   CONTACT FORM — mailto fallback (no backend)
   ---------------------------------------------------------- */
function initContactForm() {
  const btn = document.getElementById('form-submit');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const name    = document.getElementById('form-name')?.value.trim()    || '';
    const email   = document.getElementById('form-email')?.value.trim()   || '';
    const subject = document.getElementById('form-subject')?.value.trim() || 'Portfolio Contact';
    const message = document.getElementById('form-message')?.value.trim() || '';

    if (!name || !email || !message) {
      alert('Please fill in your name, email, and message.');
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}
