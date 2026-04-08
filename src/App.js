import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="technologies" className="scroll-mt-24">
          <Technologies />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;