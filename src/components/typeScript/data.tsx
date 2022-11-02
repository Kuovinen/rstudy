let data = [
  {
    name: `Interface`,
    comment: `//provide an interface for a type. Can be redeclared. Redeclaring will add any new field to already existing ones. Can also extend like this: interface uniqueName extends uniqueName2{variable2:string;}`,
    example: (
      <div>
        <div>
          <span className="yellow2">interface</span> <span>uniqueName</span>
          <span>{"{"}</span>
          <br />
          <span>variable:type;</span>
          <br />
          <span>{"}"}</span>
        </div>
      </div>
    ),
  },
  {
    name: `Type`,
    comment: `//provide a type. THESE are permanent and can never changed once declared. Can also extend like this: type uniqueName =  uniqueName2 & {variable2:string;}`,
    example: (
      <div>
        <div>
          <span className="yellow2">type</span> <span>uniqueName</span>=
          <span>{"{"}</span>
          <br />
          <span>variable:type;</span>
          <br />
          <span>{"}"}</span>
        </div>
      </div>
    ),
  },
];

export default data;
