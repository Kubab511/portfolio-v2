import { Flex, Button } from "@radix-ui/themes"
import { Eye, Github } from "lucide-react"

const projectData = [
  {
    id: 1,
    title: "My portfolio",
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
    title: "Leaving Cert project",
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
  function handleButtonClick(url: string) {
    window.open(url, "_blank")
  }

  return (
    <>
      <section id="projects" className="pt-24">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Projects
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
                    <div className="flex flex-col" key={logo.id}>
                      <img className="h-8 px-2" src={logo.src} alt={logo.alt} key={logo.id} />
                      <p className="text-sm px-2 text-[#ADB7BE] select-none">{logo.name}</p>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-0 right-0">
                  <Flex gap="2" justify="center">
                    <Button variant="outline" onClick={() => handleButtonClick(project.gitUrl)}><Github />Source Code</Button>
                    {project.hasPreview && <Button variant="outline" onClick={() => handleButtonClick(project.previewUrl)}><Eye />Preview</Button>}
                  </Flex>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}