import { Flex, Button } from "@radix-ui/themes"
import { Eye, Github } from "lucide-react"
import { useLocation } from "react-router"

type ProjectCardProps = {
  project: {
    id: number,
    title: string,
    image: string,
    tech: {
      id: number,
      src: string,
      alt: string,
      name: string
    }[],
    gitUrl: string,
    previewUrl: string,
    hasPreview: boolean,
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  function handleButtonClick(url: string) {
    window.open(url, "_blank")
  }

  const location = useLocation();
  let strings: string[] = []

  location.pathname == "/pl" ? strings = ["Kod źródłowy", "Podgląd",] : strings = ["Source code", "Preview"]

  return (
    <li className="flex flex-col justify-between" key={project.id}>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group border-4 border-[#181818]"
        style={{ background: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 grow flex flex-col relative pb-12">
        <h5 className="text-2xl font-semibold mb-2 self-center">{project.title}</h5>
        <div className="flex justify-center py-1 mb-2">
          {project.tech.map((logo) => (
            <div className="flex flex-col" key={logo.id}>
              <img className="h-8 px-2" src={logo.src} alt={logo.alt} key={logo.id} />
              <p className="text-sm px-2 text-[#ADB7BE] select-none text-center">{logo.name}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 left-0 right-0">
          <Flex gap="2" justify="center">
            <Button variant="outline" onClick={() => handleButtonClick(project.gitUrl)}><Github />{strings[0]}</Button>
            {project.hasPreview && <Button variant="outline" onClick={() => handleButtonClick(project.previewUrl)}><Eye />{strings[1]}</Button>}
          </Flex>
        </div>
      </div>
    </li>
  )
}