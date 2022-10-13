let data = [
  {
    name: `.useState()`,
    form: `const [state,setState]=React.useState(initialValue);`,
    comment: `//define a state and a setter for it`,
    returns: "RETURN: State and a setter function.",
  },
  {
    name: `.useEffect()`,
    form: `useEffect(()=>//main function,()=>//cleanerfunction,[dependancy]);`,
    comment: `//run main function each time the sate of a dependancy changes and run cleaner function after`,
    returns: "RETURN: EXAMINE THIS CLOSELY!!",
  },
];

export default data;
