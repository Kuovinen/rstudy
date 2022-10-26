import React from "react";
import "./HTMLCard.css";
interface props {
  name: string;
  tags:JSX.Element;
  example:JSX.Element;
}

function HTMLCard(props: props) {
  const theTab = React.useRef<HTMLDivElement>(null);
  function expand() {
    if (theTab && theTab.current) {
      theTab.current.className =
        theTab.current.className == "htmlCard" ? "htmlCardOpen" : "htmlCard";
    }
  }
  return (
    <div className="htmlCard" ref={theTab}>
      <div className="title" onClick={expand}>
        {props.name}
      </div>
      <div className="comment">{props.tags}</div>
      <div className="examplehtml">{props.example}</div>
    </div>
  );
}
export default HTMLCard;
