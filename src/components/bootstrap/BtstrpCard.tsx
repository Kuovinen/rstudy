import React from "react";
import "./BtstrpCard.css";
interface props {
  name: string;
  comment: string;
  example: JSX.Element;
}

function BtstrpCard(props: props) {
  const theTab = React.useRef<HTMLDivElement>(null);
  function expand() {
    if (theTab && theTab.current) {
      theTab.current.className =
        theTab.current.className === "btstrpCard"
          ? "btstrpCardOpen"
          : "btstrpCard";
    }
  }
  return (
    <div className="btstrpCard" ref={theTab}>
      <div className="title" onClick={expand}>
        {props.name}
      </div>
      <div className="comment">{props.comment}</div>
      <div className="examplebtstrp">{props.example}</div>
    </div>
  );
}
export default BtstrpCard;
