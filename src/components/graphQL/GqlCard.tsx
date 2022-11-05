import React from "react";
import "./GqlCard.css";
interface props {
  name: string;

  comment: string;
}

function GqlCard(props: props) {
  const theTab = React.useRef<HTMLDivElement>(null);
  function expand() {
    if (theTab && theTab.current) {
      theTab.current.className =
        theTab.current.className === "gqlCard" ? "gqlCardOpen" : "gqlCard";
    }
  }
  return (
    <div className="gqlCard" ref={theTab}>
      <div className="title" onClick={expand}>
        {props.name}
      </div>

      <div className="comment">{props.comment}</div>
    </div>
  );
}
export default GqlCard;
