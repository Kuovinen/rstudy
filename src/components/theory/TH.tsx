import React from "react";
import CliIcon from "../../reactIcon.svg";
import "./TH.css";
import data from "./data";
import THCard from "./THCard";
function CliCommands() {
  return (
    <div id="cliCommands">
      <img src={CliIcon} alt="cliIcon" id="cliIco" />
      <div className="cliCommandsContainer">
        {data.map((element) => {
          return <THCard name={element.name} comment={element.comment} />;
        })}
      </div>
    </div>
  );
}
export default CliCommands;
