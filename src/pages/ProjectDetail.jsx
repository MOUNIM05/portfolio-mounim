import { useParams, Link } from 'react-router-dom';
import CaseStudy from '../components/CaseStudy';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container section">
        <p>Projet introuvable.</p>
        <Link to="/projects" className="btn btn-primary">Retour aux projets</Link>
      </div>
    );
  }

  return <CaseStudy project={project} />;
}
