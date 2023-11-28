import React from "react";
import NavComponent from "./NavComponent/NavComponent";

interface FixedComponentProps {
  language: string;
}

export const FixedComponent: React.FC<FixedComponentProps> = ({ language }) => {
  console.log(language);

  return (
    <div className=" top-0 lg:sticky lg:max-w-[50%]">
      <div className="header-content">
        <h1 className="text-text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Francisco Motta
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        {language === "EN" ? "Full-Stack Engineer" : "Desenvolvedor Full-Stack"}
        </h2>
        <p className="mt-4">
        {language === "EN" ? "     I engineer exceptional, seamlessly integrated full-stack applications that deploy and maintain with ease!" 
        : "Eu crio aplicações full-stack excepcionais, perfeitamente integradas, que são implantadas e mantidas com facilidade!"}
        </p>

      <NavComponent></NavComponent>
      </div>
      <ul className="social">
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};
