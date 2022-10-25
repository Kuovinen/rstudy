import React, { useEffect } from "react";
import SQLicon from "../../regex.svg";
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
  const [regExInputState, setRegExInputState] = React.useState("o");
  React.useEffect(() => console.log(regExInputState));
  return (
    <div id="RegexPage">
      <img src={SQLicon} alt="postgressIcon" id="pstgrsico" />
      <div id="contentPstGrs">
        <div id="postgressKeywords">
          {regexData.map((element: RegexDataInterface) => (
            <RegexCard
              regExInput={regExInputState}
              setRegExInputState={setRegExInputState}
              title={element.title}
              description={element.description}
              example={element.example}
            />
          ))}
        </div>
        <div id="regextextcontainer"></div>
        <RegExText regExInput={regExInputState} />
      </div>
    </div>
  );
}
export default Postgress;
