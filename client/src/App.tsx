import MarqueeStrip from "./components/layout/MarqueeStrip";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import GithubStats from "./components/sections/GithubStats";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import WorkingProcess from "./components/sections/WorkingProcess";

const App = () => {
  return (
    <div>
      {/* Sticky Navbar */}
      <header className="sticky top-2 z-50 flex justify-center">
        <Navbar />
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative min-h-screen p-5"
        >
          <Hero />

          {/* Overlapping Marquee */}
          <div className="absolute bottom-0 left-1/2 z-20 w-[115%] -translate-x-1/2 translate-y-1/2">
            <MarqueeStrip />
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="
            min-h-screen
            bg-sky-100
            p-5
            bg-[radial-gradient(circle,#cbd5e1_1.3px,transparent_1px)]
            bg-[size:40px_40px]
          "
        >
          <About />
        </section>

        {/* Working Process */}
        <section
          id="working-process"
          className="min-h-screen bg-black"
        >
          <WorkingProcess />
        </section>

        {/* Project */}
        <section id="working-process"
          className="min-h-screen bg-white">
          <Projects />
        </section>

        {/* Github Stats */}
        <section id="github-stats"
        className="min-h-screen">
          <GithubStats />
        </section>

        {/* Skills */}
        <section id="skills"
        className="min-h-screen bg-white">
          <Skills />
        </section>
      </main>
    </div>
  );
};

export default App;