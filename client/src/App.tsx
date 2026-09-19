import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Hero from './components/sections/Hero'

const App = () => {
  return (
    <div>

<header className='flex justify-center sticky top-2'>

      <Navbar />
</header>

      <main >
        <section id="home" className="min-h-screen p-5">
          <Hero />
        </section>

        <section id="about" className="min-h-screen bg-sky-100 p-5">
          <About />
        </section>
      </main>

    </div>
  )
}

export default App
