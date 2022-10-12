import React from "react";
import SQLicon from "../../pgsql.svg";
import "./Postgress.css";
import PostgressCard from "./PostgressCard";
import PostgressExampleTable from "./PostgressExampleTable";
import SQLdata from "./sqlData";
interface SQLdataObj {
  title: string;
  description: JSX.Element;
  example: JSX.Element;
  result: JSX.Element;
}
function Postgress() {
  return (
    <div id="PostgressPage">
      <img src={SQLicon} alt="postgressIcon" id="pstgrsico" />
      <div id="contentPstGrs">
        <div id="postgressKeywords">
          {SQLdata.map((element: SQLdataObj) => (
            <PostgressCard
              title={element.title}
              description={element.description}
              example={element.example}
              result={element.result}
            />
          ))}
        </div>
        <PostgressExampleTable />
      </div>
    </div>
  );
}
export default Postgress;
