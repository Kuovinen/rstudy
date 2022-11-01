import React from "react";
import "./TSCard.css";
interface props {
  name: string;
  comment: string;
  example: JSX.Element;
}

function TSCard(props: props) {
  const theTab = React.useRef<HTMLDivElement>(null);
  function expand() {
    if (theTab && theTab.current) {
      theTab.current.className =
        theTab.current.className === "tsCard" ? "tsCardOpen" : "tsCard";
    }
  }
  return (
    <div className="tsCard" ref={theTab}>
      <div className="title" onClick={expand}>
        {props.name}
      </div>
      <div className="comment">{props.comment}</div>
      <div className="examplets">{props.example}</div>
    </div>
  );
}
export default TSCard;
