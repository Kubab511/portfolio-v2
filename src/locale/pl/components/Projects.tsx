import { NavLink } from "react-router-dom"
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"

const projectData = [
  {
    id: 1,
    title: "JBX Profiles",
    description: "Prosta strona internetowa zrobiona w React TS",
    image: "/projects/1.webp",
    gitUrl: "https://github.com/Kubab511/jbx-profiles",
    hasPreview: true,
    previewUrl: "https://jbx-profiles.com/"
  },
  {
    id: 2,
    title: "Moje portfolio",
    description: "Moja osobista strona zrobiona w React TS",
    image: "/projects/2.webp",
    gitUrl: "https://github.com/Kubab511/portfolio-v2",
    hasPreview: false,
    previewUrl: ""
  },
  {
    id: 3,
    title: "Projekt maturalny",
    description: "Projekt maturalny z informatyki",
    image: "/projects/3.webp",
    gitUrl: "https://github.com/Kubab511/lc-report-112081",
    hasPreview: false,
    previewUrl: ""
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
      <section id="projects">
        <br />
        <br />
        <br />
        <br />
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Projekty
        </h2>
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectData.map((project) => (
            <li className="flex flex-col justify-between">
              <div
                className="h-52 md:h-72 rounded-t-xl relative group border-4 border-[#181818]"
                style={{ background: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                  <NavLink
                    to={project.gitUrl}
                    target="_blank"
                    className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/NavLink"
                  >
                    <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/NavLink:text-white" />
                  </NavLink>
                  {project.hasPreview && (
                    <NavLink
                      to={project.previewUrl}
                      target="_blank"
                      className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/NavLink"
                    >
                      <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/NavLink:text-white" />
                    </NavLink>
                  )}
                </div>
              </div>
              <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 grow">
                <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
                <p className="text-[#ADB7BE]">{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}