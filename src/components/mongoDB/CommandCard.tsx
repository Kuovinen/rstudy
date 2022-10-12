import React from "react";
function CommandCard() {
  const theTab = React.useRef<HTMLDivElement>(null);
  function expand() {
    if (theTab && theTab.current) {
      theTab.current.className =
        theTab.current.className == "funcCard" ? "funcCardOpen" : "funcCard";
    }
  }
  return (
    <div ref={theTab}>
      <div className="title" onClick={expand}>
        COMMAND
      </div>{" "}
      LALA
    </div>
  );
}

export default CommandCard;
