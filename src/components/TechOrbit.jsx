import { motion } from 'framer-motion';

const techs = [
  { name: 'HTML5', iconUrl: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS3', iconUrl: 'https://cdn.simpleicons.org/css3/1572B6' },
  { name: 'JavaScript', iconUrl: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'TypeScript', iconUrl: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'React', iconUrl: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', iconUrl: 'https://cdn.simpleicons.org/next.js/ffffff' },
  { name: 'Node.js', iconUrl: 'https://cdn.simpleicons.org/node.js/8CC84B' },
  { name: 'Express', iconUrl: 'https://cdn.simpleicons.org/express/ffffff' },
  { name: 'MongoDB', iconUrl: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'MySQL', iconUrl: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'PHP', iconUrl: 'https://cdn.simpleicons.org/php/777BB4' },
  { name: 'Python', iconUrl: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Figma', iconUrl: 'https://cdn.simpleicons.org/figma/ffffff' }
];

const wirePositions = [70, 150, 230, 310, 390, 470, 550, 630, 710, 790, 870];

export default function TechOrbit() {
  return (
    <section className="section orbit">
      <div className="container">
        <div className="orbit__head">
          <p className="kicker">Stack & outils</p>
          <h2>Un noyau design + code qui rayonne.</h2>
          <p className="lead">
            Les technos qui propulsent mes interfaces : front réactif, backend léger, prototypage rapide.
          </p>
        </div>

        <div className="orbit__wrap">
          <svg className="orbit__wires" viewBox="0 0 900 360" aria-hidden="true">
            {wirePositions.map((x, idx) => (
              <path key={x} d={`M ${x} 44 Q ${x} 150 450 230`} style={{ animationDelay: `${idx * 0.05}s` }} />
            ))}
          </svg>

          <svg className="orbit__rings" viewBox="0 0 900 520" aria-hidden="true">
            <ellipse cx="450" cy="340" rx="360" ry="120" />
            <ellipse cx="450" cy="340" rx="300" ry="92" />
            <ellipse cx="450" cy="340" rx="230" ry="64" />
          </svg>

          <div className="orbit__badges">
            {techs.map((tech, idx) => (
              <motion.div
                key={tech.name}
                className="orbit__badge"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{ delay: 0.1 * idx, duration: 1.8, repeat: Infinity, repeatType: 'loop' }}
              >
                <span className="orbit__badge-icon">
                  <img src={tech.iconUrl} alt={tech.name} loading="lazy" />
                </span>
                <span className="orbit__badge-text">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="orbit__core"
            initial={{ scale: 0.92, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
          >
            <div className="orbit__core-inner">
              <img src="/core-logo.png" alt="Core logo" loading="lazy" />
            </div>
            <div className="orbit__halo" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
