import React from "react";
import xpEng from "../content/experience.ts";
import xpPort from "../content/experiencia.ts";
import projEng from "../content/projects.ts";
import projPort from "../content/projetos.ts";

interface ScrollingContentProps {
  language: string;
}

export const ScrollingContent: React.FC<ScrollingContentProps> = ({
  language,
}) => {
  let links;
  if (language === "EN") {
    links = ["ABOUT", "EXPERIENCE", "PROJECTS"];
  } else {
    links = ["SOBRE", "EXPERIENCIA", "PROJETOS"];
  }
  return (
    <div className="scrolling-section lg:pt-28">
      <div id={links[0].toLocaleLowerCase()} className=" mb-10 md:px-5">
        <h2 className="sticky top-0 z-20 mb-10 mt-10 bg-[#456351]/75 py-5  text-2xl font-bold  backdrop-blur md:mt-0">
          {language === "EN" ? "About" : "Sobre"}
        </h2>
        {language === "EN"
          ? [
              "I'm a Brazilian who was raised by Uncle Sam and now lives in Brazil again. You can trace my programming roots back to 2012 when I began studying computer science, but things became serious in 2019 when I started developing professionally. I have been a part of small WordPress projects, large full-stack apps, and even initiated my own startup in the drone industry.",
              "My main focus these days is on building full-stack apps that are easy to implement and even easier to maintain. In my free time, I love learning about new tech and discovering the latest trends everyone is hyped up about.",
              "When I'm not coding, I'm usually playing with my dogs or preparing something for my wife and me to eat, as I also enjoy cooking and creating my own recipes, all of which I consider incredible (but I guess you could say I'm a little biased). If you want to chat, the best way to reach me is on LinkedIn or on GitHub!",
            ].map((sentence, index) => (
              <p key={index} className="mt-6">
                {sentence}
              </p>
            ))
          : [
              "Sou um brasileiro que foi criado pelo Tio Sam e agora vive no Brasil novamente. Minha trajetória na programação iniciou em 2012, quando comecei a estudar ciência da computação, mas as coisas ficaram sérias em 2019, quando dei início à minha carreira profissional no desenvolvimento web. Já participei de projetos pequenos em WordPress, aplicativos full-stack robustos e até iniciei minha própria startup na indústria de drones.",

              "Meu foco principal nos dias de hoje é construir aplicativos full-stack que são fáceis de implementar e ainda mais fáceis de manter. No meu tempo livre, adoro aprender sobre novas tecnologias e descobrir as últimas tendências de mercado.",

              "Quando não estou codificando, geralmente estou brincando com meus cachorros ou preparando algo para eu e minha esposa comer, já que também gosto de cozinhar e criar minhas próprias receitas, todas as quais considero incríveis (mas acho que sou um pouco tendencioso). Se quiser bater um papo, a melhor forma de me encontrar é no LinkedIn ou no GitHub!",
            ].map((sentence, index) => (
              <p key={index} className="mt-6">
                {sentence}
              </p>
            ))}
      </div>
      <div id={links[1].toLocaleLowerCase()} className=" flex flex-col">
        <h2 className="sticky top-0 z-20 mb-10 bg-[#456351]/75 py-5 text-2xl  font-bold backdrop-blur  md:mt-0  md:p-5">
          {language === "EN" ? "Experience" : "Experiencia"}
        </h2>
        {language === "EN"
          ? xpEng.map(({ date, title, description, stacks }, index) => (
              <div
                className="card group mb-5 rounded-md transition-all hover:bg-white/10 md:grid md:grid-cols-4 md:p-5"
                key={index}
              >
                <div className=" date pr-4 font-bold md:col-span-1">{date}</div>
                <div className=" xp-content md:col-span-3">
                  <h3 className="mb-5 text-xl font-bold">{title}</h3>
                  {description.map((paragraph, index) => (
                    <p className="mb-3 opacity-80" key={index}>
                      {paragraph}
                    </p>
                  ))}
                  <div className="tags flex flex-row flex-wrap gap-1 py-4">
                    {stacks.map((stack, index) => (
                      <div
                        className="tag mb-1 rounded-full bg-[#0c5255]/30  px-3 py-1 text-[#00cece]"
                        key={index}
                      >
                        {stack}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          : xpPort.map(({ date, title, description, stacks }, index) => (
              <div
                className="card group mb-5 rounded-md transition-all hover:bg-white/10 md:grid md:grid-cols-4 md:p-5"
                key={index}
              >
                <div className=" date mb-3 pr-4 font-bold md:col-span-1 md:mb-0">
                  {date}
                </div>
                <div className=" xp-content md:col-span-3">
                  <h3 className="mb-5 text-xl font-bold">{title}</h3>
                  {description.map((paragraph, index) => (
                    <p className="mb-3 opacity-80" key={index}>
                      {paragraph}
                    </p>
                  ))}
                  <div className="tags flex flex-row flex-wrap gap-1 py-4">
                    {stacks.map((stack, index) => (
                      <div
                        className="tag mb-1 rounded-full bg-[#0c5255]/30  px-3 py-1 text-[#00cece]"
                        key={index}
                      >
                        {stack}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div id={links[2].toLocaleLowerCase()}>
        <h2 className="sticky top-0 z-20 mb-0 mt-10 bg-[#456351]/75 py-5 text-2xl  font-bold backdrop-blur  md:mb-10 md:mt-0 md:p-5">
          {language === "EN" ? "Notable projects" : "Projetos em destaque"}
        </h2>

        <p className="mb-10 md:hidden">
          {language === "EN"
            ? "( Click the image to go to the project! )"
            : "( Clique na imagem para ir ao projeto! )"}
        </p>

        {language === "EN"
          ? projEng.map(({ img, description, title, url }, index) => (
              <a href={url} className=" block" key={index}>
                <div className="card group mb-10 rounded-md transition-all hover:bg-white/10 md:mb-5 md:grid md:grid-cols-4 md:p-5">
                  <img
                    src={img}
                    alt="project showcase"
                    className=" col-span-1 mx-auto mb-4 w-[200px] md:w-auto md:pr-4"
                  />
                  <div className="content col-span-3">
                    <h3 className="mb-4 text-xl font-bold transition-all group-hover:text-[#8efff7]">
                      {title}
                    </h3>
                    <p className="opacity-80">{description}</p>
                  </div>
                </div>
              </a>
            ))
          : projPort.map(({ img, description, title, url }, index) => (
              <a href={url} className=" block" key={index}>
                <div className="card group mb-10 rounded-md transition-all hover:bg-white/10 md:mb-5 md:grid md:grid-cols-4 md:p-5">
                  <img
                    src={img}
                    alt="project showcase"
                    className=" col-span-1 mx-auto mb-4 w-[200px] md:w-auto md:pr-4"
                  />
                  <div className="content col-span-3">
                    <h3 className="mb-4 text-xl font-bold transition-all group-hover:text-[#8efff7]">
                      {title}
                    </h3>
                    <p className="opacity-80">{description}</p>
                  </div>
                </div>
              </a>
            ))}

        <a href="" className="block text-lg font-bold hover:text-[#8efff7]">
          {language === "EN"
            ? "Checkout more projects on my LinkedIn page!   \u2192"
            : "Confira todos os meus projetos no meu LinkedIn   \u2192"}
        </a>
      </div>
    </div>
  );
};
