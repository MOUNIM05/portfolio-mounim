import HeroSection from '../components/HeroSection';
import ProjectsGrid from '../components/ProjectsGrid';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import { projects } from '../data/projects';
import TechOrbit from '../components/TechOrbit';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechOrbit />
      <ProjectsGrid projects={projects.slice(0, 3)} />
      <About />
      <ContactForm />
    </>
  );
}
