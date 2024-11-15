import { ProjectCard } from "../../common/ProjectCard"

const projectData = [
  {
    id: 1,
    title: "Moje portfolio",
    tech: [
      {id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React", name: "React"},
      {id: 2, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript", name: "TypeScript"},
      {id: 3, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "TailwindCSS", name: "TailwindCSS"}
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
      {id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", alt: "HTML", name: "HTML"},
      {id: 2, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "JS", name: "JavaScript"},
      {id: 3, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", alt: "CSS", name: "CSS"}
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
      {id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React", name: "React"},
      {id: 2, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript", name: "TypeScript"},
      {id: 3, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "TailwindCSS", name: "TailwindCSS"}
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
      {id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "Python", name: "Python"},
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
            ProjectCard({ project })
          ))}
        </ul>
      </section>
    </>
  )
}