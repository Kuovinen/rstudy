import React from "react";
import "./GitCard.css";
interface props {
  name: string;

  comment: string;
}

function GitCard(props: props) {
  const theTab = React.useRef<HTMLDivElement>(null);
  function expand() {
    if (theTab && theTab.current) {
      theTab.current.className =
        theTab.current.className == "gitCard" ? "gitCardOpen" : "gitCard";
    }
  }
  return (
    <div className="gitCard" ref={theTab}>
      <div className="title" onClick={expand}>
        {props.name}
      </div>

      <div className="comment">{props.comment}</div>
    </div>
  );
}
export default GitCard;
