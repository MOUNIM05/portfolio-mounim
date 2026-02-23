export const projects = [
  {
    id: 'medical-appointment-booking-app',
    title: 'Medical Appointment Booking App',
    subtitle: 'Parcours patient mobile-first (React/Vite)',
    desc: 'Recherche de médecins, réservation, messagerie, itinéraire et assurance – tout mock côté client pour démontrer le flow complet.',
    tech: ['React', 'Vite', 'Framer Motion'],
    image: '/assets/project1.webp',
    github: '',
    live: '',
    timeline: '2026',
    results: ['Flow patient bout en bout simulé', 'Navigation mobile persistante', 'Mocks assurance & rappels'],
    details: {
      context: 'Prototype mobile-first pour illustrer un parcours patient sans backend.',
      challenge: 'Couvrir recherche, booking, messagerie, itinéraire et assurance en local sans complexité serveur.',
      solution:
        'Architecture pages + composants réutilisables (AppLayout, MobileNav, DoctorCard, AppointmentCard), données mock en localStorage, SVG itinéraire et écrans assurance/payment simulés.',
      impact: 'Démo prête à connecter une API réelle ou un backend; sert de référence UX pour une app santé.',
      media: ['/assets/project1.webp'],
      extras: [
        'Pages: Home, Search, DoctorProfile, BookingConfirmation, Appointments, Profile, Messages, Protection, Itinerary, NotFound',
        'Data: src/app/data/mockData.ts (médecins, rendez-vous, messages, profil patient)',
        'Styles: theme.css, tailwind.css, fonts.css, index.css',
        'Navigation: barre fixe (Accueil, Recherche, RDV, Profil) via AppLayout'
      ]
    }
  },
  {
    id: 'music-streaming-ux',
    title: 'Design app streaming musical',
    subtitle: 'UI Figma + Balsamiq',
    desc: 'Maquettes basse puis haute fidélité pour une application de streaming musical (parcours découverte et lecture).',
    tech: ['Figma', 'Balsamiq'],
    image: '/assets/streaming-ui.png',
    github: '',
    live: '',
    timeline: '2024',
    results: ['Parcours utilisateur clarifié', 'Guidelines UI prêtes pour dev'],
    details: {
      context: 'Exploration UX pour définir une expérience fluide sur mobile.',
      challenge: 'Aligner rapidité d’accès aux playlists et identité visuelle cohérente.',
      solution: 'Wireframes Balsamiq, puis UI Figma avec composants et typographie musicale.',
      impact: 'Handoff propre pour implémentation Flutter/React Native.',
      media: ['/assets/streaming-ui.png']
    }
  },
  {
    id: 'restaurant-landing',
    title: 'Site restaurant',
    subtitle: 'Frontend React',
    desc: 'Single page animée pour un restaurant avec menu, réservation et mise en avant du chef.',
    tech: ['React', 'CSS'],
    image: '/assets/restaurant-site.png',
    github: '',
    live: '',
    timeline: '2023',
    results: ['Sections claires', 'Animation légère pour la carte'],
    details: {
      context: 'Projet pratique pour maîtriser React et le routing simple.',
      challenge: 'Rendre le contenu lisible et rassurant (horaires, contact, carte).',
      solution: 'Composants réutilisables, framer-motion pour les transitions, ancrages vers contact.',
      impact: 'Base réutilisable pour connecter un formulaire de réservation.',
      media: ['/assets/restaurant-site.png']
    }
  }
];
