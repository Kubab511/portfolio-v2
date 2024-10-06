import { Link } from "react-router-dom"

const projectData = [
  {
    id: 1,
    title: "Moje portfolio",
    tech: [
      {id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React"},
      {id: 2, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript"},
      {id: 3, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "TailwindCSS"}
    ],
    image: "/projects/2.webp",
    gitUrl: "https://github.com/Kubab511/portfolio-v2",
    hasPreview: false,
    previewUrl: ""
  },
  {
    id: 2,
    title: "Projekt maturalny",
    tech: [
      {id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", alt: "HTML"},
      {id: 2, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "JS"},
      {id: 3, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", alt: "CSS"}
    ],
    image: "/projects/3.webp",
    gitUrl: "https://github.com/Kubab511/lc-report-112081",
    hasPreview: true,
    previewUrl: "https://matura.barabasz.dev/"
  },
  {
    id: 3,
    title: "JBX Profiles",
    tech: [
      {id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React"},
      {id: 2, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript"},
      {id: 3, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "TailwindCSS"}
    ],
    image: "/projects/1.webp",
    gitUrl: "https://github.com/Kubab511/jbx-profiles",
    hasPreview: true,
    previewUrl: "https://jbx-profiles.com/"
  },
  {
    id: 4,
    title: "JBot",
    tech: [
      {id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "Python"}
    ],
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
                <div className="flex justify-center py-1">
                  {project.tech.map((logo) => (
                    <img className="h-8 px-2" src={logo.src} alt={logo.alt} key={logo.id} />
                  ))}
                </div>
                <div className="flex justify-center absolute bottom-4 left-0 right-0 ">
                  <Link to={project.gitUrl} target="_blank" className="text-[#ADB7BE] hover:text-white underline p-2 pb-0">Kod źródłowy</Link>
                  {project.hasPreview && <Link to={project.previewUrl} target="_blank" className="text-[#ADB7BE] hover:text-white underline p-2 pb-0">Podgląd</Link>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}