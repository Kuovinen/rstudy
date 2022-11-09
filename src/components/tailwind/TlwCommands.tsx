import React from "react";
import TlwIcon from "../../tlw.svg";
import "./TlwCommands.css";
import data from "./data";
import TlwCard from "./TlwCard";
function TlwCommands() {
  return (
    <div id="tlwCommands">
      <img src={TlwIcon} alt="tlwIcon" id="tlwIco" />
      <div className="tlwCommandsContainer">
        {data.map((element) => {
          return <TlwCard name={element.name} comment={element.comment} />;
        })}
      </div>
    </div>
  );
}
export default TlwCommands;
