import React from "react";

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
          Full-Stack Engineer
        </h2>
        <p className="mt-4">
          I engineer exceptional, seamlessly integrated full-stack applications
          that deploy and maintain with ease!
        </p>

        <nav className="hidden lg:block">
          <ul className="nav-bar mt-20">
            <li>
              <a href="#about" className="">
                <span className="nav-decoration"></span>
                <span className="nav-text">ABOUT</span>
              </a>
            </li>
            <li>
              <a href="#experience" className="">
                <span className="nav-decoration"></span>
                <span className="nav-text">EXPERIENCE</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="">
                <span className="nav-decoration"></span>
                <span className="nav-text">PROJECTS</span>
              </a>
            </li>
          </ul>
        </nav>
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
