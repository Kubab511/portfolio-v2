import { ProjectCard } from "../../common/ProjectCard"
import projectsENJSON from "../../data/projectsEN.json"

export function Projects() {
  const projectData = projectsENJSON.projectData;

  return (
    <>
      <section id="projects" className="pt-24">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Projects
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