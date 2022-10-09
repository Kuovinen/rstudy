import React from "react";
import "./PostgressCard.css";
interface PostgressCardProps {
  title: string;
  description: string;
  example: string;
  result: string;
}

function PostgressCard(props: PostgressCardProps) {
  const theTab = React.useRef<HTMLDivElement>(null);
  function expand() {
    if (theTab && theTab.current) {
      theTab.current.className =
        theTab.current.className == "PstgrsTheme"
          ? "PstgrsThemeOpen"
          : "PstgrsTheme";
    }
  }
  return (
    <div className="PstgrsTheme" ref={theTab}>
      <div className="PstGrsTitle" onClick={expand}>
        <div className="indicatorPstGrs"></div>
        <span className="cardTitlePstGrs">{props.title}</span>
      </div>
      <div className="howTo">{props.description}</div>
      <div className="output">{props.result}</div>
    </div>
  );
}
export default PostgressCard;
