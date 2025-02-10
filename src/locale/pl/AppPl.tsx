import { About } from "./components/About"
import { Footer } from "../common/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Technologies } from "../common/Technologies"

function AppPl() {
  return(
    <>
      <div className="flex flex-col h-screen justify-between" id="top">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <Hero />
          {/* <Technologies /> */}
          <About />
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AppPl