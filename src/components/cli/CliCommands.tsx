import React from "react";
import GitIcon from "../../git.svg";
import "./CliCommands.css";
import data from "./data";
import GitCard from "./CliCard";
function GitCommands() {
  return (
    <div id="cliCommands">
      <img src={GitIcon} alt="cliIcon" id="cliIco" />
      <div className="cliCommandsContainer">
        {data.map((element) => {
          return <GitCard name={element.name} comment={element.comment} />;
        })}
      </div>
    </div>
  );
}
export default GitCommands;
