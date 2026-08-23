import Image from 'next/image';
import LandingPage from './(pages)/home/page';
import ServicesPage from './(pages)/services/page';
import SkillsExpPage from './(pages)/skills&experiences/page';
import ProjectsPage from './(pages)/projects/page';
import AboutPage from './(pages)/about/page';
import Footer from '@/components/footer';
import LanguagesContainer from '@/components/languages';
import Header from '@/components/header';

export default function Home() {
  return (
    <main>
      <section className='fixed w-full z-50'>
        <Header />
      </section>

      <section id='/home'>
        <LandingPage />
      </section>
      <section id='project-page'>
        <ProjectsPage />
      </section>
      <section id='skills-page'>
        <SkillsExpPage />
      </section>
      <section id='service-page'>
        <ServicesPage />
      </section>
      <section id='about-page'>
        <AboutPage />
      </section>
      <section id='footer-page'>
        <Footer />
      </section>
    </main>
  );
}
