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
        {language === "EN" ? "some content" : "alguma coisa"}
      </div>
      <div>some content</div>
      <div>some content</div>
    </div>
  );
};
