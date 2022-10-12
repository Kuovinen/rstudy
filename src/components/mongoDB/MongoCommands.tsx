import React from "react";
import mongoicon from "../../mongo.svg";
import "./MongoCommands.css";
//import data from "./data";
import CommandCard from "./CommandCard";
function JSFunctions() {
  return (
    <div id="mongoCommands">
      <img src={mongoicon} alt="mongoIcon" id="mongoico" />
      <div id="commandsContainer">
        {" "}
        <CommandCard />
      </div>
    </div>
  );
}
export default JSFunctions;
