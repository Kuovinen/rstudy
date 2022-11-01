import React from "react";
import GitIcon from "../../ts.svg";
import "./TSConcepts.css";
import data from "./data";
import GitCard from "./TSCard";
function GitCommands() {
  return (
    <div id="tsCommands">
      <img src={GitIcon} alt="tsIcon" id="tsico" />
      <div className="tsCommandsContainer">
        {data.map((element) => {
          return (
            <GitCard
              name={element.name}
              comment={element.comment}
              example={element.example}
            />
          );
        })}
      </div>
    </div>
  );
}
export default GitCommands;
