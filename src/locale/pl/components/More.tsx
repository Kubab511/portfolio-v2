export function More() {
  return (
    <>
      <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="more">
        <div className="z-9 rounded-3xl border border-[#484b6a] px-4 py-2 pb-5">
          <h5 className="text-xl font-bold text-white my-2">
            Chcesz wiedzieć więcej?
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            Jeśli chciał(a)byś dowiedzieć się więcej o mnie, zobacz moje profile na LinkedInie, GitHubie i Instagramie
          </p>
          <div className="flex flex-row gap-3">
            <a target="_blank" href="https://www.linkedin.com/in/kuba-barabasz/"><img className="w-10 h-10 scale-75" src="/linkedin-icon.webp" alt="Linkedin" /></a>
            <a target="_blank" href="https://www.github.com/Kubab511"><img className="w-10 h-10 scale-75" src="/github-icon.webp" alt="Github" /></a>
            <a target="_blank" href="https://www.instagram.com/kuba_barabasz/"><img className="w-10 h-10 scale-75" src="/insta-icon.webp" alt="Instagram" /></a>
          </div>
        </div>
      </section>
    </>
  )
}