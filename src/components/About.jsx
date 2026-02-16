import { skills } from '../data/skills';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2024 — présent', text: '3ème année informatique appliquée — Université Mundiapolis (Casablanca, campus Nouaceur).' },
  { year: '2022 — 2023', text: 'Baccalauréat Sciences Physiques (option Français) — Lycée Yassamine Californie.' },
  { year: '2023 — 2024', text: 'Assistant informatique et réseaux — Laboratoire d’analyses médicales SBATA.' }
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div>
          <p className="kicker">Profil</p>
          <h2>Abdelmounim Maani</h2>
          <p className="lead">
            Développeur passionné par le web et le mobile. Je conçois des interfaces propres, documentées et orientées utilisateur
            en combinant React, Flutter et une sensibilité design (Figma/Balsamiq).
          </p>
          <div className="timeline">
            {timeline.map((item) => (
              <motion.div key={item.year} className="timeline__item" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                <span>{item.year}</span>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="skills">
          <h3>Compétences & Outils</h3>
          {Object.entries(skills).map(([section, list]) => (
            <div key={section} className="skills__group">
              <p className="muted">{section}</p>
              <div className="tags">
                {list.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
