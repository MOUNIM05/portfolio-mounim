export const projects = [
  {
    id: 'ecommerce-accessoires-tech',
    title: 'E‑commerce accessoires tech',
    subtitle: 'Catalogue responsive',
    desc: 'Site vitrine pour la vente d’accessoires et matériel technologique avec mise en avant des catégories.',
    tech: ['HTML', 'CSS'],
    image: '/assets/project1.webp',
    github: '',
    live: '',
    timeline: '2024',
    results: ['Mise en ligne rapide', 'Structure prête pour panier futur'],
    details: {
      context: 'Projet personnel pour pratiquer l’intégration responsive.',
      challenge: 'Présenter plusieurs catégories produits de manière claire sans backend.',
      solution: 'Pages statiques HTML/CSS, grille produits, hero promotionnel.',
      impact: 'Base réutilisable pour intégrer un panier ou Stripe plus tard.',
      media: ['/assets/project1.webp']
    }
  },
  {
    id: 'music-streaming-ux',
    title: 'Design app streaming musical',
    subtitle: 'UI Figma + Balsamiq',
    desc: 'Maquettes basse puis haute fidélité pour une application de streaming musical (parcours découverte et lecture).',
    tech: ['Figma', 'Balsamiq'],
    image: '/assets/project2.webp',
    github: '',
    live: '',
    timeline: '2024',
    results: ['Parcours utilisateur clarifié', 'Guidelines UI prêtes pour dev'],
    details: {
      context: 'Exploration UX pour définir une expérience fluide sur mobile.',
      challenge: 'Aligner rapidité d’accès aux playlists et identité visuelle cohérente.',
      solution: 'Wireframes Balsamiq, puis UI Figma avec composants et typographie musicale.',
      impact: 'Handoff propre pour implémentation Flutter/React Native.',
      media: ['/assets/project2.webp']
    }
  },
  {
    id: 'restaurant-landing',
    title: 'Site restaurant',
    subtitle: 'Frontend React',
    desc: 'Single page animée pour un restaurant avec menu, réservation et mise en avant du chef.',
    tech: ['React', 'CSS'],
    image: '/assets/project3.webp',
    github: '',
    live: '',
    timeline: '2023',
    results: ['Sections claires', 'Animation légère pour la carte'],
    details: {
      context: 'Projet pratique pour maîtriser React et le routing simple.',
      challenge: 'Rendre le contenu lisible et rassurant (horaires, contact, carte).',
      solution: 'Composants réutilisables, framer-motion pour les transitions, ancrages vers contact.',
      impact: 'Base réutilisable pour connecter un formulaire de réservation.',
      media: ['/assets/project3.webp']
    }
  }
];
