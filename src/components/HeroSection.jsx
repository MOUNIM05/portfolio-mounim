import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { profile } from '../data/profile';

export default function HeroSection() {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const rotateX = useSpring(useTransform(tiltY, [-150, 150], [12, -12]), { stiffness: 160, damping: 18 });
  const rotateY = useSpring(useTransform(tiltX, [-200, 200], [-16, 16]), { stiffness: 160, damping: 18 });
  const glow = useTransform([tiltX, tiltY], ([x, y]) => {
    const xPos = 50 + x / 12;
    const yPos = 45 + y / 14;
    return `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(124,58,237,0.28), transparent 35%)`;
  });

  const handleTilt = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    tiltX.set(e.clientX - rect.left - rect.width / 2);
    tiltY.set(e.clientY - rect.top - rect.height / 2);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <motion.p className="kicker hero__kicker" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            {profile.name}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            UI/UX Designer & Software Developer <span className="accent"></span> .
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Product Designer & Software Developer spécialisé dans la création d’expériences digitales complètes, de la conception à l’implémentation.
          </motion.p>
          <motion.div className="hero__actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
            <Link to="/projects" className="btn btn-primary">Voir mes projets</Link>
            <a href={profile.cv} download className="btn">Mon CV</a>
            <a href="#contact" className="btn btn-ghost">Me contacter</a>
            <a href={profile.linkedin} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </motion.div>
        </div>
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="hero__card"
            style={{
              rotateX,
              rotateY,
              perspective: 1200,
              transformStyle: 'preserve-3d',
              backgroundImage: glow
            }}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <span>À propos</span>
            <strong>Étudiant (Université Mundiapolis, Casablanca) avec une appétence pour le code, le design et les systèmes.</strong>
            <div className="hero__pill">Disponibilité: {profile.availability}</div>
            <motion.div
              className="hero__floating"
              animate={{ y: [0, -12, 0], rotateZ: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="hero__chip">{profile.phone}</div>
              <div className="hero__chip hero__chip--alt">{profile.email}</div>
              <div className="hero__chip">{profile.location}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
