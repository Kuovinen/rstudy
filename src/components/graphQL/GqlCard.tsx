import React from "react";
import "./GqlCard.css";
interface props {
  name: string;
  comment: string;
  return: JSX.Element;
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
      <div className="gqlTitle" onClick={expand}>
        {props.name}
      </div>

      <div className="gqlComment">{props.comment}</div>
      <div className="gqlReturn">{props.return}</div>
    </div>
  );
}
export default GqlCard;
