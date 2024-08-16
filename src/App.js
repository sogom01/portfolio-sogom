import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-black min-h-screen text-white">
      <Header />
      <main className="pt-24 container mx-auto p-6"> {/* Añadimos un relleno superior aquí */}
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="Footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
