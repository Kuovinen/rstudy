let data = [
  {
    name: `Currying`,
    comment: `//Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument. In JS the concept of currying happens when a function does not accept all of its arguments up front. Instead it takes the first argument and returns another function. The returned function is supposed to be called with the second argument, which in turn again returns another function.`,
    example: (
      <div>
        <div>{"function f(a,b,c){return a+b+c;}"}</div>
        <div>
          {"function f(a){return "}{" "}
          <span className="green2">{"(b)=>{ return "}</span>
          <span className="yellow2">{"(c)=>{return a+b+c}"}</span>
          <span className="green2">{" }"}</span> {"}"}
        </div>
        <span>{"Thus  f(a)(b)(c) is how you call this function."}</span>
      </div>
    ),
  },
];

export default data;
