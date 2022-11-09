import React from "react";
import "./TlwCard.css";
interface props {
  name: string;

  comment: string;
}

function TlwCard(props: props) {
  const theTab = React.useRef<HTMLDivElement>(null);
  function expand() {
    if (theTab && theTab.current) {
      theTab.current.className =
        theTab.current.className === "tlwCard" ? "tlwCardOpen" : "tlwCard";
    }
  }
  return (
    <div className="tlwCard" ref={theTab}>
      <div className="title" onClick={expand}>
        {props.name}
      </div>

      <div className="comment">{props.comment}</div>
    </div>
  );
}
export default TlwCard;
