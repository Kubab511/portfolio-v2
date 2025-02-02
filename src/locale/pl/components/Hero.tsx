import { Button, Flex } from "@radix-ui/themes";
import { FileDown, Github, Instagram, Linkedin, MailPlus } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  function handleButtonClick(url: string) {
    window.open(url, "_blank")
  }

  return (
    <>
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-8 place-self-center text-center sm:text-left justify-self-center sm:justify-self-start rounded-xl border-2 border-[#484b6a] p-4">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-600">
                Cześć, jestem<br/>
              </span>
              <TypeAnimation
                sequence={[
                  500,
                  "Kuba"
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
              />
            </h1>
            <p className="text-slate-400 lg:text-lg mb-4">
              Student informatyki na 2 roku
            </p>
            <p className="text-slate-400 lg:text-lg mb-4">  
              &#128205; Dublin, Irlandia
            </p>
            <Flex gap="3" direction={{initial: "column", sm: "row"}} align="center">
              <Flex gap="3" direction={{initial: "column", sm: "row"}} align="center">
                <Button variant="soft" onClick={() => handleButtonClick("mailto:barabasz.kuba@gmail.com")}>
                  <MailPlus /> Napisz do mnie
                </Button>
                <Button variant="outline" onClick={() => handleButtonClick("/resume_pl.pdf")}>
                  <FileDown /> Pobierz CV
                </Button>
              </Flex>
              <Flex gap="3" align="center">
                <Button variant="ghost" onClick={() => handleButtonClick("https://github.com/Kubab511")}>
                  <Github />
                </Button>
                <Button variant="ghost" onClick={() => handleButtonClick("https://www.linkedin.com/in/kuba-barabasz/")}>
                  <Linkedin />
                </Button>
                <Button variant="ghost" onClick={() => handleButtonClick("https://www.instagram.com/kuba_barabasz/")}>
                  <Instagram />
                </Button> 
              </Flex>
            </Flex>
          </div>
          <div className="col-span-4 place-self-center mt-4 ml-0 sm:ml-8 lg:mt-0 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/avatar.webp" alt="Hero Image"/>
          </div>
        </div>
      </section>
    </>
  )
}