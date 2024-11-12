import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import TestmonialsSection from './sections/TestmonialsSection';
export default function Home(){

  return (
    <main className="w-full p-4">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestmonialsSection />



    </main>
  )
}
