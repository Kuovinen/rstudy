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
          return <CliCard name={element.name} comment={element.comment} />;
        })}
      </div>
    </div>
  );
}
export default CliCommands;
