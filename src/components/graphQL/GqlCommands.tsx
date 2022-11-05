import React from "react";
import GqlIcon from "../../gql.svg";
import "./GqlCommands.css";
import data from "./data";
import GqlCard from "./GqlCard";
function GqlCommands() {
  return (
    <div id="gqlCommands">
      <img src={GqlIcon} alt="gqlIcon" id="gqlIco" />
      <div className="gqlCommandsContainer">
        {data.map((element) => {
          return <GqlCard name={element.name} comment={element.comment} />;
        })}
      </div>
    </div>
  );
}
export default GqlCommands;
