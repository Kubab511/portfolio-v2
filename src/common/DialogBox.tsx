import { Dialog, Button, Flex } from "@radix-ui/themes";
import { ChevronRight, Eye, Github } from "lucide-react";
import { useLocation } from "react-router";
import { DialogBoxProps } from "../types/DialogBoxProps";

export function DialogBox({ project }: DialogBoxProps) {
  function handleButtonClick(url: string) {
    window.open(url, "_blank");
  }

  const location = useLocation();
  let strings: string[] = [];

  location.pathname == "/pl" ? strings = ["Więcej", "Kod źródłowy", "Podgląd", "Wróć"] : strings = ["More", "Source code", "Preview", "Close"];

  return (
    <Dialog.Root>
      <div>
        <Dialog.Trigger>
          <Button variant="soft" color="gray">
          {strings[0]}<ChevronRight />
          </Button>
        </Dialog.Trigger>
      </div>
      <Dialog.Content size="3" maxWidth="500px">
        <p className="text-center text-white text-xl pb-4">{project.title}</p>
        <p className="text-center text-[#ADB7BE] text-md pb-4">{project.description}</p>
        <div className="pb-4">
          <Flex gap="2" justify="center">
            <Button variant="outline" onClick={() => handleButtonClick(project.gitUrl)}><Github />{strings[1]}</Button>
            {project.hasPreview && <Button variant="outline" onClick={() => handleButtonClick(project.previewUrl)}><Eye />{strings[2]}</Button>}
          </Flex>
        </div>
        <Dialog.Close>
          <Flex justify="center">
            <Button variant="soft" color="gray">
              {strings[3]}
            </Button>
          </Flex>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  )
}