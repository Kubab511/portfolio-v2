import { Link } from "react-router-dom"

const projectData = [
  {
    id: 1,
    title: "Moje portfolio",
    description: "Moja osobista strona zrobiona w React TS",
    image: "/projects/2.webp",
    gitUrl: "https://github.com/Kubab511/portfolio-v2",
    hasPreview: false,
    previewUrl: ""
  },
  {
    id: 2,
    title: "Projekt maturalny",
    description: "Mój projekt maturalny z informatyki",
    image: "/projects/3.webp",
    gitUrl: "https://github.com/Kubab511/lc-report-112081",
    hasPreview: true,
    previewUrl: "https://matura.barabasz.dev/"
  },
  {
    id: 3,
    title: "JBX Profiles",
    description: "Prosta strona internetowa zrobiona w React TS",
    image: "/projects/1.webp",
    gitUrl: "https://github.com/Kubab511/jbx-profiles",
    hasPreview: true,
    previewUrl: "https://jbx-profiles.com/"
  },
  {
    id: 4,
    title: "JBot",
    description: "Prosty bot do moderacji i kontroli ról na Discordzie",
    image: "/projects/4.webp",
    gitUrl: "https://github.com/Kubab511/discord-jbot",
    hasPreview: false,
    previewUrl: ""
  }
]

export function Projects() {
  return (
    <>
      <section id="projects" className=" pt-24">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Projekty
        </h2>
        <ul className="grid lg:grid-cols-3 gap-8 md:gap-12 md:grid-cols-2 ">
          {projectData.map((project) => (
            <li className="flex flex-col justify-between" key={project.id}>
              <div
                className="h-52 md:h-72 rounded-t-xl relative group border-4 border-[#181818]"
                style={{ background: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
              </div>
              <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 grow flex flex-col relative pb-12">
                <h5 className="text-2xl font-semibold mb-2 self-center">{project.title}</h5>
                <p className="text-[#ADB7BE]">{project.description}</p>
                <div className="flex justify-center absolute bottom-4 left-0 right-0 ">
                  <Link to={project.gitUrl} target="_blank" className="text-[#ADB7BE] hover:text-white underline p-2 pb-0">Kod źródłowy</Link>
                  {project.hasPreview && <Link to={project.gitUrl} target="_blank" className="text-[#ADB7BE] hover:text-white underline p-2 pb-0">Podgląd</Link>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}