import React from "react";
import "./SassCard.css";
interface props {
  name: string;
  comment: string;
  example: JSX.Element;
}

function SassCard(props: props) {
  const theTab = React.useRef<HTMLDivElement>(null);
  function expand() {
    if (theTab && theTab.current) {
      theTab.current.className =
        theTab.current.className == "sassCard" ? "sassCardOpen" : "sassCard";
    }
  }
  return (
    <div className="sassCard" ref={theTab}>
      <div className="title" onClick={expand}>
        {props.name}
      </div>
      <div className="comment">{props.comment}</div>
      <div className="exampleSass">{props.example}</div>
    </div>
  );
}
export default SassCard;
