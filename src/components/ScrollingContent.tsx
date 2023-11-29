import React from "react";

interface ScrollingContentProps {
  language: string;
}

export const ScrollingContent: React.FC<ScrollingContentProps> = ({
  language,
}) => {
  console.log(language);
  return (
    <div className="">
      <div id="#about" className="">
        {language === "EN"
          ? [
              "I'm a Brazilian that was raised by Uncle Sam and now lives in Brazil again. You can trace my programming roots back to 2012 when I began studying computer science, but things became serious in 2019 when I started developing professionally. I have been a part of small WordPress projects, large full-stack apps, and even initiated my own startup in the drone industry.",
              "My main focus these days is on building full-stack apps that are easy to implement and even easier to maintain. In my free time, I love learning about new tech and discovering the latest trends everyone is using.",
              "When I'm not coding, I'm usually playing with my dogs or preparing something for my wife and me to eat, as I also enjoy cooking and creating my own recipes, all of which I consider incredible (but I guess you could say I'm a little biased). If you want to chat, the best way to reach me is on LinkedIn or on GitHub!",
            ].map((sentence, index) => (
              <p key={index} className="mt-6">
                {sentence}
              </p>
            ))
          : [
              "Sou um brasileiro que foi criado pelo Tio Sam e agora vive no Brasil novamente. Você pode traçar minha trajetória na programação desde 2012, quando comecei a estudar ciência da computação, mas as coisas ficaram sérias em 2019, quando dei início à minha carreira profissional no desenvolvimento. Participei de projetos pequenos em WordPress, aplicativos full-stack robustos e até iniciei minha própria startup na indústria de drones.",

              "Meu foco principal nos dias de hoje é construir aplicativos full-stack que são fáceis de implementar e ainda mais fáceis de manter. No meu tempo livre, adoro aprender sobre novas tecnologias e descobrir as últimas tendências que todos estão usando.",

              "Quando não estou codificando, geralmente estou brincando com meus cachorros ou preparando algo para eu e minha esposa comerem, já que também gosto de cozinhar e criar minhas próprias receitas, todas as quais considero incríveis (mas acho que sou um pouco tendencioso). Se quiser bater um papo, a melhor forma de me encontrar é no LinkedIn ou no GitHub!",
            ].map((sentence, index) => (
              <p key={index} className="mt-6">
                {sentence}
              </p>
            ))}
      </div>
      <div>some content</div>
      <div>some content</div>
    </div>
  );
};
