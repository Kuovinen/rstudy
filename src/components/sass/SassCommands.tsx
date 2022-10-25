import React from "react";
import GitIcon from "../../sass.svg";
import "./SassCommands.css";
import data from "./data";
import GitCard from "./SassCard";
function GitCommands() {
  return (
    <div id="sassCommands">
      <img src={GitIcon} alt="sassIcon" id="sassIco" />
      <div className="sassCommandsContainer">
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
