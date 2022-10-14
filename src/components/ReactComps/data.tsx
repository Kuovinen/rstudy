let data = [
  {
    name: `.useState()`,
    form: `const [state,setState]=React.useState(initialValue);`,
    comment: `//define a state and a setter for it`,
    returns: "RETURN: State and a setter function.",
  },
  {
    name: `.useEffect()`,
    form: `React.useEffect(()=>//main function,()=>//cleanerfunction,[dependancy]);`,
    comment: `//run main function each time the sate of a dependancy changes and run cleaner function after`,
    returns: "RETURN: EXAMINE THIS CLOSELY!!",
  },
  {
    name: `.useRef()`,
    form: `const a=React.useRef(null); + <div ref={a}>InnerHTML<div>`,
    comment: `//a way to save a value to state that does not later cause rerenders upon update`,
    returns: "RETURN: object containing the value inside the '.current' key",
  },
  {
    name: `.useContext()/.createContext`,
    form: `const MyContext=React.createContext('value');//outside the function + 
    return (
        <MyContext.Provider value={'value2'}>
          <Toolbar />
        </MyContext.Provider>
      );//inside function const recievedContext = useContext(MyContext);//inside child `,
    comment: `//a way to pass props directly without prop drilling`,
    returns: "-",
  },
];

export default data;
