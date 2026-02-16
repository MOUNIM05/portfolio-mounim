import ProjectCard from './ProjectCard';

export default function ProjectsGrid({ projects, onFilter, activeFilter }) {
  const techs = ['All', ...new Set(projects.flatMap((p) => p.tech))];

  return (
    <section className="section">
      <div className="container projects">
        <div className="projects__header">
          <div>
            <p className="kicker">Featured Projects</p>
            <h2>Des produits réels, mesurables.</h2>
          </div>
          <div className="projects__filters">
            {techs.map((tech) => (
              <button
                key={tech}
                className={`chip ${activeFilter === tech ? 'chip--active' : ''}`}
                onClick={() => onFilter?.(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
