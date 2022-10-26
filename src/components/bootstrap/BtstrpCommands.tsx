import React from "react";
import BtstrpIcon from "../../bootstrap.svg";
import "./BtstrpCommands.css";
import data from "./data";
import GitCard from "./BtstrpCard";
function BtstrpCommands() {
  return (
    <div id="btstrpCommands">
      <img src={BtstrpIcon} alt="btstrpIcon" id="btstrpIco" />
      <div className="btstrpCommandsContainer">
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
export default BtstrpCommands;
