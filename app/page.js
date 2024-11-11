import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
export default function Home(){

  return (
    <main className="w-full p-4">
      <HeroSection />
      <AboutSection />
      <ServicesSection />


    </main>
  )
}
