import Header from '../components/Header';
import About from '../components/About';

export default function AboutPage() {
  return (
    <>
      <Header
        kicker="À propos"
        title="Hybrid designer + engineer."
        subtitle="10+ produits livrés, focus sur l’impact business et l’expérience utilisateur."
      />
      <About />
    </>
  );
}
