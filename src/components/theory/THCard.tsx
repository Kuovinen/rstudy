import React from "react";
import "./THCard.css";
interface props {
  name: string;

  comment: JSX.Element;
}

function CliCard(props: props) {
  const theTab = React.useRef<HTMLDivElement>(null);
  function expand() {
    if (theTab && theTab.current) {
      theTab.current.className =
        theTab.current.className === "cliCard" ? "cliCardOpen" : "cliCard";
    }
  }
  return (
    <div className="cliCard" ref={theTab}>
      <div className="title" onClick={expand}>
        {props.name}
      </div>

      <div className="comment">{props.comment}</div>
    </div>
  );
}
export default CliCard;
