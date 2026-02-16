import { useMemo, useState } from 'react';
import ProjectsGrid from '../components/ProjectsGrid';
import Header from '../components/Header';
import { projects as projectsData } from '../data/projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(
    () => (filter === 'All' ? projectsData : projectsData.filter((p) => p.tech.includes(filter))),
    [filter]
  );

  return (
    <>
      <Header
        kicker="Portfolio 2026"
        title="Chaque projet a un récit."
        subtitle="Sélection de produits shipés avec mesure de l’impact."
      />
      <ProjectsGrid projects={filtered} onFilter={setFilter} activeFilter={filter} />
    </>
  );
}
