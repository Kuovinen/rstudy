import React from "react";
import "./App.css";
import Postgress from "./components/sql/Postgress";
import JSFunctions from "./components/jsfunctions/JSFunctions";
import MongoCommands from "./components/mongoDB/MongoCommands";
import ReactComps from "./components/reactComps/ReactComps";
import GitCommands from "./components/git/GitCommands";
import CliCommands from "./components/cli/CliCommands";
function App() {
  const [theme, setTheme] = React.useState("sql");
  const arrayOfTopics = [
    { name: "sql", content: <Postgress /> },
    { name: "js", content: <JSFunctions /> },
    { name: "mongo", content: <MongoCommands /> },
    { name: "react", content: <ReactComps /> },
    { name: "git", content: <GitCommands /> },
    { name: "cli", content: <GitCommands /> },
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
        <div onClick={() => setTheme("mongo")}>mongoDB</div>
        <div onClick={() => setTheme("js")}>JavaScript</div>
        <div onClick={() => setTheme("react")}>React</div>
        <div onClick={() => setTheme("git")}>Git</div>
        <div onClick={() => setTheme("cli")}>CLI</div>
      </menu>{" "}
      {content}
    </div>
  );
}

export default App;
