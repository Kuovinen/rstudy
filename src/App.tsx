import React from "react";
import "./App.css";
import Postgress from "./components/sql/Postgress";
import JSFunctions from "./components/JSFunctions/JSFunctions";
import MongoCommands from "./components/mongoDB/MongoCommands";
import ReactComps from "./components/ReactComps/ReactComps";
function App() {
  const [theme, setTheme] = React.useState("sql");
  const arrayOfTopics = [
    { name: "sql", content: <Postgress /> },
    { name: "js", content: <JSFunctions /> },
    { name: "mongo", content: <MongoCommands /> },
    { name: "react", content: <ReactComps /> },
  ];

  const content = arrayOfTopics.reduce((prev, current) => {
    if (current.name == theme) {
      return [...prev, current.content];
    }
    return prev;
  }, [] as JSX.Element[]);
  return (
    <div className="App">
      <menu id="menu">
        {" "}
        <span>MENU:</span>{" "}
        <div onClick={() => setTheme("sql")}>PostgresSQL</div>
        <div onClick={() => setTheme("mongo")}>mongoDb</div>
        <div onClick={() => setTheme("js")}>JSFunctions</div>
        <div onClick={() => setTheme("react")}>React</div>
      </menu>{" "}
      {content}
    </div>
  );
}

export default App;
