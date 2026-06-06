import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHubRepos from "@/components/GitHubRepos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <About />
        <Experience />
        <Projects />
        <GitHubRepos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
