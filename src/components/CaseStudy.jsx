import { motion } from 'framer-motion';

export default function CaseStudy({ project }) {
  const { details } = project;
  return (
    <section className="section">
      <div className="container case">
        <motion.div className="case__lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="kicker">Case study</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.desc}</p>
          <div className="tags">
            {project.tech.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </motion.div>

        <div className="case__content">
          <motion.div className="case__block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h3>Contexte</h3>
            <p>{details.context}</p>
          </motion.div>
          <motion.div className="case__block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h3>Défi</h3>
            <p>{details.challenge}</p>
          </motion.div>
          <motion.div className="case__block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h3>Solution</h3>
            <p>{details.solution}</p>
          </motion.div>
          <motion.div className="case__block" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h3>Impact</h3>
            <p>{details.impact}</p>
            <ul className="results">
              {project.results?.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="case__media">
          {details.media?.map((src) => (
            <motion.div key={src} className="case__media-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <img src={src} alt={`Visual for ${project.title}`} loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
