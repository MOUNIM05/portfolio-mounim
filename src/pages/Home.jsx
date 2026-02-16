import HeroSection from '../components/HeroSection';
import ProjectsGrid from '../components/ProjectsGrid';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsGrid projects={projects.slice(0, 3)} />
      <About />
      <ContactForm />
    </>
  );
}
