export type ProjectCardProps = {
  project: {
    id: number,
    title: string,
    description: string,
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
};