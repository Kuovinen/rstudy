import React from "react";
import "./ReactCard.css";

interface props {
  name: string;
  form: JSX.Element;
  comment: JSX.Element;
  returns: JSX.Element;
}
function FunctionCard(props: props) {
  const theTab = React.useRef<HTMLDivElement>(null);
  function expand() {
    if (theTab && theTab.current) {
      theTab.current.className =
        theTab.current.className == "funcCard" ? "funcCardOpen" : "funcCard";
    }
  }
  return (
    <div className="funcCard" ref={theTab}>
      <div className="title" onClick={expand}>
        {props.name}
      </div>
      <div className="form">{props.form}</div>
      <div className="comment">{props.comment}</div>
      <div className="returns">{props.returns}</div>
    </div>
  );
}
export default FunctionCard;

/*
    name: `.reduce()`,
    form: `Array.reduce((previousValue, currentValue)=>{return -action-},initialValue);`,
    comment: `//The reduce() method executes a user-supplied “reducer” function on
                each element(currentValue) of the array, in order, passing in the 
                return value from the calculation as 'previousValue'. If not supplied, 
                'initialValue' is 0, otherwise 'initialValue' is used instead of previousValue
                during the first loop.`,
    returns: "RETURN: Single value dependant on reducer function.",
    example: `[1,2,3].reduce((previousValue, currentValue)=>{return previousValue+currentValue},0);`,
    vis: `//returns (((0+1)+2)+3)=6;`,





*/
