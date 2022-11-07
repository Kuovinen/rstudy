import React from "react";
import "./QstCard.css";
interface props {
  name: string;

  comment: string;
}

function CliCard(props: props) {
  const theTab = React.useRef<HTMLDivElement>(null);
  function expand() {
    if (theTab && theTab.current) {
      theTab.current.className =
        theTab.current.className === "qstCard" ? "qstCardOpen" : "qstCard";
    }
  }
  return (
    <div className="qstCard" ref={theTab}>
      <div className="title" onClick={expand}>
        {props.name}
      </div>

      <div className="comment">{props.comment}</div>
    </div>
  );
}
export default CliCard;
