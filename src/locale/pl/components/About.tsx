import { useState } from "react"
import { Button } from "../../../common/Button";

const DATA = [
  {
    title: "Doświadczenie",
    id: "experience",
    content: (
      <ul className="pl-2 list-disc" key={"experience"}>
        <li><a target="_blank" className="underline text-slate-400 hover:text-accent" href="https://store.steampowered.com/app/2289650/Mini_Airways/">Mini Airways</a> - Polskie tłumaczenie | 2024</li>
        <li><a target="_blank" className="underline text-slate-400 hover:text-accent" href="https://zhp.ie/">ZHP Irlandia</a> - Drużynowy | 01.2022 - 02.2023</li>
      </ul>
    )
  },
  {
    title: "Certyfikaty",
    id: "certificates",
    content: (
      <ul className="pl-2 list-disc" key={"skills"}>
        <li>Cisco CCNAv7: Introduction to Networks</li>
      </ul>
    )
  },
  {
    title: "Wykształcenie",
    id: "education",
    content: (
      <ul className="pl-2 list-disc" key={"education"}>
        <li>Inżynier Informatyki - TU Dublin | 2023-2027</li>
        <li>Leaving Certificate (Matura) - Malahide Community School | 2023</li>
      </ul>
    )
  },
  {
    title: "Języki",
    id: "languages",
    content: (
      <ul className="pl-2 list-disc" key={"languages"}>
        <li>Polski - Ojczysty</li>
        <li>Angielski - C2</li>
        <li>Niemiecki - B1</li>
        <li>Norweski - A2</li>
      </ul>
    )
  }
]

export function About() {
  const [tab, setTab] = useState("experience");

  function handleTabChange(id: string) {
    setTab(id);
  }

  const filteredData = DATA.filter((item) => 
    item.id === tab
  );

  return (
    <>
      <section className="text-white pt-24" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <figure>
            <img className="rounded-2xl h-200 w-200" src="/about-me.webp" alt="About Image" />
            <figcaption className="text-center text-slate-400 text-lg">Roháčske plesá - Słowacja &#128248; Jakub Barabasz</figcaption>
          </figure>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">
              O mnie
            </h2>
            <p className="text-slate-400 lg:text-lg">
              Jestem Kuba, 20-letni student informatyki na TU Dublin. Uczę się informatyki od liceum, gdzie otrzymałem nagrodę dla najlepszego ucznia informatyki. W wolnym czasie lubię chodzić po górach, robić zdjęcia i jeździć na nartach.
            </p>
            <div className="mt-2 flex items-center justify-center flex-wrap flex-row">
              <Button
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                {" "}
              Doświadczenie
              </Button>
              <Button
                selectTab={() => handleTabChange("certificates")}
                active={tab === "certificates"}
              >
                {" "}
                Certyfikaty
              </Button>
              <Button
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Wykształcenie
              </Button>
              <Button
                selectTab={() => handleTabChange("languages")}
                active={tab === "languages"}
              >
                {" "}
                Języki
              </Button>
            </div>
            <div className="mt-8">
              {filteredData.map((item) => (
                item.content
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}