import { About } from "./components/About"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"

function AppPl() {
  return(
    <>
      <div className="flex flex-col h-screen justify-between" id="top">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <Hero />
          <About />
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AppPl