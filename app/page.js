import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground font-sans selection:bg-primary/30">
      <Hero />
      <TechMarquee />
      <Skills />
      <Stats />
      <WorkExperience />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
}
