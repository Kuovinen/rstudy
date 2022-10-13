import React from "react";
import ReactIcon from "../../reactIcon.svg";
import "./ReactComps.css";
import data from "./data";
import ReactCard from "./ReactCard";
function ReactComps() {
  return (
    <div id="JSFunctions">
      <img src={ReactIcon} alt="jsIcon" id="jsico" />
      <div className="jsFunctionsContainer">
        {data.map((element) => {
          return (
            <ReactCard
              name={element.name}
              form={element.form}
              comment={element.comment}
              returns={element.returns}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ReactComps;
