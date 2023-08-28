import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";
import About from "@/components/sections/About";
import Presentation from "@/components/sections/Presentation";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="w-screen h-screen flex-grow  snap-y snap-mandatory overflow-auto scroll-smooth">
      <Section>
        <Presentation />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Footer />
    </main>
  )
}
