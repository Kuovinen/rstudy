import React from "react";
import "./RegexCard.css";
interface PostgressCardProps {
  title: string;
  description: JSX.Element;
  example: string;
  regExInput:string//React.MutableRefObject<string>;
  setRegExInputState:React.Dispatch<React.SetStateAction<string>>
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
      
      <div className="example" onMouseEnter={()=>props.setRegExInputState(props.example)}> <span className='regForm'>{props.example}</span></div>
    </div>
  );
}
export default PostgressCard;
