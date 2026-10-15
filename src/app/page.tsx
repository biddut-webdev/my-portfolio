
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />

        {/* Next: About, Skills, Projects and Contact sections */}
      </main>
      <Footer />
    </>
  );
}
