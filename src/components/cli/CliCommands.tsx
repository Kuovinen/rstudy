import React from "react";
import CliIcon from "../../ubuntu.svg";
import "./CliCommands.css";
import data from "./data";
import CliCard from "./CliCard";
function CliCommands() {
  return (
    <div id="cliCommands">
      <img src={CliIcon} alt="cliIcon" id="cliIco" />
      <div className="cliCommandsContainer">
        {data.map((element) => {
          return <CliCard name={element.name} comment={element.comment} />;
        })}
      </div>
    </div>
  );
}
export default CliCommands;
