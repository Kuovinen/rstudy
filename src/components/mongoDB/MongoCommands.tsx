import React from "react";
import mongoicon from "../../mongo.svg";
import "./MongoCommands.css";
//import data from "./data";
import CommandCard from "./CommandCard";
import data from "./mongoData";
function JSFunctions() {
  return (
    <div id="mongoCommands">
      <img src={mongoicon} alt="mongoIcon" id="mongoico" />
      <div id="commandsContainer">
        {data.map((element) => (
          <CommandCard
            title={element.title}
            description={element.description}
          />
        ))}
      </div>
    </div>
  );
}
export default JSFunctions;
