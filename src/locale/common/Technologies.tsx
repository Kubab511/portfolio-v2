import { useLocation } from "react-router";
import technologiesJSON from "../data/technologies.json"

export function Technologies() {
  const technologies = technologiesJSON.technologies;
  const location = useLocation();
  const heading: string = location.pathname == "/pl" ? "Technologie" : "Technologies";

  
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {heading}
      </h2>
      <div className="flex justify-center">
        <div className="flex justify-center py-1 flex-wrap border-2 border-[#484b6a] bg-[#484b6a] rounded-xl">
          {technologies.map((tech) => (
            <div className="flex flex-col">
              <img className="h-20 px-2" src={tech.src} alt={tech.alt} />
              <p className="text-sm px-2 text-[#ADB7BE] select-none text-center">{tech.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}