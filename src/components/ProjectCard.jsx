import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const goDetail = () => navigate(`/projects/${project.id}`);
  const stop = (e) => e.stopPropagation();

  return (
    <motion.article
      className="project-card"
      style={{ transformStyle: 'preserve-3d', perspective: 1400 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{ y: -10, rotateX: 6, rotateY: -6, boxShadow: '0 30px 90px rgba(0,0,0,0.45)' }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      onClick={goDetail}
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && goDetail()}
      role="button"
      aria-label={`Ouvrir le projet ${project.title}`}
    >
      <motion.div className="project-card__thumb" whileHover={{ scale: 1.04 }} transition={{ duration: 0.4, ease: 'easeOut' }}>
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-card__badge">{project.timeline}</div>
        <div className="project-card__glow" />
      </motion.div>
      <div className="project-card__body">
        <p className="kicker">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <p className="muted">{project.desc}</p>
        <div className="project-card__meta">
          <div className="tags">
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <div className="project-card__links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={stop}>GitHub</a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={stop}>Live</a>
            )}
            <Link to={`/projects/${project.id}`} onClick={stop}>Case study</Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
