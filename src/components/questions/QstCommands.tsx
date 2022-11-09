import React from "react";
import CliIcon from "../../question.svg";
import "./QstCommands.css";
import data from "./data";
import CliCard from "./QstCard";
function CliCommands() {
  return (
    <div id="qstCommands">
      <img src={CliIcon} alt="qstIcon" id="qstIco" />
      <div className="qstCommandsContainer">
        {data.map((element) => {
          return (
            <CliCard
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
export default CliCommands;
