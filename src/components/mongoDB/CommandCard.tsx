import React from "react";
import "./CommandCard.css";
interface props {
  title: string;
  description: string;
}

function CommandCard(props: props) {
  const theTab = React.useRef<HTMLDivElement>(null);
  function expand() {
    if (theTab && theTab.current) {
      theTab.current.className =
        theTab.current.className == "mongCard" ? "mongCardOpen" : "mongCard";
    }
  }
  return (
    <div ref={theTab} className="mongCard">
      <div className="title" onClick={expand}>
        {props.title}
      </div>
      <div className="description">{props.description}</div>
    </div>
  );
}

export default CommandCard;
