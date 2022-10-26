import React from "react";
import GitIcon from "../../html.svg";
import "./HTMLCommands.css";
import data from "./data";
import HTMLCard from "./HTMLCard";
function GitCommands() {
  return (
    <div id="htmlCommands">
      <img src={GitIcon} alt="htmlIcon" id="htmlIco" />
      <div className="htmlCommandsContainer">
        {data.map((element) => {
          return <HTMLCard name={element.name} tags={element.tags} example={element.example}/>;
        })}
      </div>
    </div>
  );
}
export default GitCommands;
