import React from "react";
import JSicon from "../../js.svg";
import "./JSFunctions.css";
import data from "./data";
import FunctionCard from "./FunctionCard";
function JSFunctions() {
  return (
    <div id="JSFunctions">
      <img src={JSicon} alt="jsIcon" id="jsico" />
      <div className="jsFunctionsContainer">
        {data.map((element) => {
          return (
            <FunctionCard
              name={element.name}
              form={element.form}
              comment={element.comment}
              returns={element.returns}
              example={element.example}
              vis={element.vis}
            />
          );
        })}
      </div>
    </div>
  );
}
export default JSFunctions;
