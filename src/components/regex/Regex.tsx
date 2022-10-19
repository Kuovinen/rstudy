import React from "react";
import SQLicon from "../../pgsql.svg";
import "./Regex.css";
import RegexCard from "./RegexCard";
import RegExText from "./RegExText";
import regexData from "./regexData";
interface RegexDataInterface {
  title: string;
  description: JSX.Element;
  example: string;

}
function Postgress() {
  const regExInput=React.useRef('o');
  return (
    <div id="PostgressPage">
      <img src={SQLicon} alt="postgressIcon" id="pstgrsico" />
      <div id="contentPstGrs">
        <div id="postgressKeywords">
          {regexData.map((element: RegexDataInterface) => (
            <RegexCard
            regExInput={regExInput}
              title={element.title}
              description={element.description}
              example={element.example}

            />
          ))}
        </div>
        <RegExText regExInput={regExInput}/>
      </div>
    </div>
  );
}
export default Postgress;
