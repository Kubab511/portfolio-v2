import { useState } from "react"
import { Button } from "../../../common/Button";

const DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="pl-2 list-disc" key={"experience"}>
        <li><a target="_blank" className="underline text-text-color hover:text-accent" href="https://tfs.pl/en/">TimeFrame Software</a> - Full Stack Developer | 08.2025 - present</li>
        <li><a target="_blank" className="underline text-text-color hover:text-accent" href="https://store.steampowered.com/app/2289650/Mini_Airways/">Mini Airways</a> - Polish localization | 2024</li>
        <li><a target="_blank" className="underline text-text-color hover:text-accent" href="https://zhp.ie/">Polish Scouting Association ZHP Irlandia</a> - Scout Leader | 01/2022 - 02/2023</li>
      </ul>
    )
  },
  {
    title: "Certificates",
    id: "certificates",
    content: (
      <ul className="pl-2 list-disc" key={"skills"}>
        <li>Cisco CCNAv7: Introduction to Networks</li>
        <li>Cisco CCNAv7: Switching, Routing, and Wireless Essentials</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc" key={"education"}>
        <li>BSc Computer Science - TU Dublin | 2023-2027</li>
        <li>Leaving Certificate - Malahide Community School | 2023</li>
      </ul>
    )
  },
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="pl-2 list-disc" key={"languages"}>
        <li>Polish - Native</li>
        <li>English - C2</li>
        <li>German - B1</li>
        <li>Norwegian - A2</li>
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
      <section className="pt-24" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <figure>
            <img className="rounded-2xl h-200 w-200" src="/about-me.webp" alt="About Image" />
            <figcaption className="text-center text-text-color text-lg">Roháčske plesá - Slovakia &#128248; Jakub Barabasz</figcaption>
          </figure>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-text-color lg:text-lg">
              I&apos;m Kuba, a 20 year old computer science student at TU Dublin. I&apos;ve been learning computer science since high school where I received an award for the year&apos;s top computer science student. In my free time I enjoy hiking, photography and skiing.
            </p>
            <div className="mt-2 flex items-center justify-center flex-wrap flex-row">
              <Button
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                {" "}
                Experience
              </Button>
              <Button
                selectTab={() => handleTabChange("certificates")}
                active={tab === "certificates"}
              >
                {" "}
                Certificates
              </Button>
              <Button
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education
              </Button>
              <Button
                selectTab={() => handleTabChange("languages")}
                active={tab === "languages"}
              >
                {" "}
                Languages
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