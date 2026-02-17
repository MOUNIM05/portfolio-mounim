# Portfolio – Abdelmounim Maani

Portfolio React (Create React App) avec Framer Motion, thème light/dark et sections projets/case studies. Contenu aligné sur mon CV (Université Mundiapolis, Casablanca).

## Aperçu
- Hero avec tilt 3D et CTA “Voir mes projets / Mon CV / Me contacter”
- Grille projets (e‑commerce accessoires tech, app streaming UI, site restaurant)
- Section À propos (bio, timeline formation/expérience)
- Contact : téléphone, email, téléchargement du CV

## Structure
- `src/components`: Navbar, HeroSection, ProjectsGrid, ProjectCard, CaseStudy, About, ContactForm, Footer, Header
- `src/pages`: Home, AboutPage, ProjectsPage, ProjectDetail
- `src/data`: `projects.js`, `skills.js`
- `public/assets`: visuels WebP + `cvmounim.pdf`
- `netlify.toml`, `vercel.json`: rewrites SPA

## Scripts
- `npm start` — serveur dev http://localhost:3000
- `npm run build` — build production
- `npm test` — CRA tests (passent même sans fichiers de test)

### Emails (EmailJS)
- Ajoute un fichier `.env` à la racine avec :
  - `REACT_APP_EMAILJS_SERVICE_ID=...`
- `REACT_APP_EMAILJS_TEMPLATE_ID=...`
- `REACT_APP_EMAILJS_PUBLIC_KEY=...`
- Les champs du formulaire enverront alors directement vers ta boîte Gmail via EmailJS. Sans ces variables, un mailto de secours s’ouvre.

### Profil centralisé
- `src/data/profile.js` contient nom, titre, email, téléphone, liens (GitHub/LinkedIn) et URL du CV ; utilisés par le hero et la section contact.

## Personnalisation
- Mettre à jour projets/skills dans `src/data/*`
- Palette & typo dans `src/index.css`
- Meta/OG dans `public/index.html`

## Déploiement rapide
### Netlify
1) `npm run build`
2) Déployer le dossier `build/` ou connecter le repo (fallback SPA déjà configuré)

### Vercel / Cloudflare Pages
- Build command : `npm run build`
- Output : `build`
- SPA rewrites déjà fournis.

## Auteur
Abdelmounim Maani — Software Developer  
Casablanca · +212 626 262 455 · abdelmounimma2005@gmail.com
