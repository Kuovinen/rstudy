import React from "react";
import GitIcon from "../../git.svg";
import "./GitCommands.css";
import data from "./data";
import GitCard from "./GitCard";
function GitCommands() {
  return (
    <div id="gitCommands">
      <img src={GitIcon} alt="gitIcon" id="gitIco" />
      <div className="gitCommandsContainer">
        {data.map((element) => {
          return <GitCard name={element.name} comment={element.comment} />;
        })}
      </div>
    </div>
  );
}
export default GitCommands;
