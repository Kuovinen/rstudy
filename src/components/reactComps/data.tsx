/*
.gr{
  color:"green";
}
.tl{
  color:"teal";
}
.bl{
  color:"blue";
}
.pr{
  color:"purple";
}
*/
const data = [
  {
    name: `basic component`,
    form: (<div>
      <div>&emsp;</div>
      <span className='pr'>function</span> <span>{"App(){"}</span>
      <div><span className='gr'>&emsp;{'return '}</span><span className='bl'>{'<div>'}</span>{  "innerHTML"}<span className='bl'>{'</div>'}</span> 
      <div>{"}"}</div></div>
      <div>&emsp;</div>
      </div>) ,
    comment: <p>{`//A basic component like this returns an ELEMENT. Since in this case (as is usual) the return is written as JSX it is converted into a React.createElement function call that in turn returns an object. The object has 5 keys, each containing information about it as shown below. This is why we import React when dealing with JSX, to access its createElement function. `}</p>,
    returns:(<div>
      <div>RETURNS:</div>
      <div>{'{'}
        <div>&emsp;<span className="tl">{"$$typeof"}</span>: <span>{"Symbol(react.element)"},</span></div>
        <div>&emsp;<span className="tl">{"key"}</span>: <span>{"null"},</span></div>
        <div>&emsp;<span className="tl">{"props"}</span>: <span>{"{"}<span className='gr'>children</span>{":innerHTML}"},</span></div>
        <div>&emsp;<span className="tl">{"ref"}</span>: <span>{"null"},</span></div>
        <div>&emsp;<span className="tl">{"type"}</span>: <span>{'"div"'},</span></div>
        {'}'}
        </div>
      </div>) ,
  },
  {
    name: `complex component`,
    form: (
    
    <div>
            <div>&emsp;</div>
      <span className='pr'>function</span> <span>{"App(){"}</span>
      
      <div>
        <span className='gr'>&emsp;{'return ( '}</span>
          <div>
            <span className='bl'>&emsp;&emsp;{'<div className="App">'}</span>
            <div>
                <div>&emsp;&emsp;&emsp;&emsp;<span className='bl'>{'<img src={logo} className="App-logo">'}</span></div>
                <div>&emsp;&emsp;&emsp;&emsp;<span className='bl'>{'<h1>'}</span><span>{'innerHTML'}<span className='bl'>{'</h1>'}</span></span>   </div>

            </div>
            <span className='bl'>&emsp;&emsp;{'</div>'}</span>
          </div> 
      <div className='gr'>&emsp;{")"}</div>
      <div>{"}"}</div>
      </div>
      <div>&emsp;</div>
      </div>) ,
    comment: <p>{`//A more complex component uses it's PROPS key to store each sub component in an array of CHILDREN in the same form as a basic component would be. The className is stored as it's own key value in props as well. Just like the parent component, each child component makes a React.createElement function call, so the result is an objects nested within an object.`}</p>,
    returns:(<div>
      <div>RETURNS</div>
      <div>{'{'}
        <div>&emsp;<span className="tl">{"$$typeof"}</span>: <span>{"Symbol(react.element)"},</span></div>
        <div>&emsp;<span className="tl">{"key"}</span>: <span>{"null"},</span></div>
        <div>&emsp;<span className="tl">{"props"}</span>: <span>{"{"}<span className='gr'>children</span>{":["}</span></div>
          <div>&emsp;&emsp;<span className='tl'>{'0'}</span> <span >{' : {'}</span> 
            <div>&emsp;&emsp;<span className="tl">&emsp;{"$$typeof"}</span>: <span>{"Symbol(react.element)"},</span></div>
            <div>&emsp;&emsp;<span className="tl">&emsp;{"key"}</span>: <span>{"null"},</span></div>
            <div>&emsp;&emsp;<span className="tl">&emsp;{"props"}</span>: <span>{"{"}<span className='gr'>src</span>{" : /static/media/logo.png"},</span><span className='gr'> className</span><span>{" : App-logo}"},</span></div>
            <div>&emsp;&emsp;<span className="tl">&emsp;{"ref"}</span>: <span>{"null"},</span></div>
            <div>&emsp;&emsp;<span className="tl">&emsp;{"type"}</span>: <span>{'"img"'},</span></div>
            &emsp;&emsp;&emsp;{'},'}
          </div>
          <div>&emsp;&emsp;<span className='tl'>{'1'}</span> <span >{' : {'}</span> 
            <div>&emsp;&emsp;<span className="tl">&emsp;{"$$typeof"}</span>: <span>{"Symbol(react.element)"},</span></div>
            <div>&emsp;&emsp;<span className="tl">&emsp;{"key"}</span>: <span>{"null"},</span></div>
            <div>&emsp;&emsp;<span className="tl">&emsp;{"props"}</span>: <span>{"{"}<span className='gr'>children</span>{" : innerHTML}"},</span></div>
            <div>&emsp;&emsp;<span className="tl">&emsp;{"ref"}</span>: <span>{"null"},</span></div>
            <div>&emsp;&emsp;<span className="tl">&emsp;{"type"}</span>: <span>{'"h1"'},</span></div>
            &emsp;&emsp;&emsp;{'},'}
          </div>
          <div>&emsp;&emsp;<span className='tl'>{'length'}</span> <span >{' : 2'}</span> 


          </div>

        <div>&emsp;&emsp; <span>{"]"},</span></div>
        &emsp;<span className='gr'>&emsp;&emsp;&emsp;className</span><span >{' : "App"'}</span>
        <div>&emsp;&emsp;{'},'}</div>
        <div>&emsp;<span className="tl">{"ref"}</span>: <span>{"null"},</span></div>
        <div>&emsp;<span className="tl">{"type"}</span>: <span>{'"div"'},</span></div>
        {'}'}

        </div>
      </div>) ,
  },
  {
    name: `JSX component`,
    form: (<div>
            <div>&emsp;</div>
      <span>{"<"}</span><span className='gr'>App</span> <span>{" />"}</span>
      <div>&emsp;</div>

      </div>) ,
    comment: <p>{`//A basic component JSX ELEMENT. React elements can not only describe DOM nodes like the "basic component" and "complex component" sections show, but also can describe a component instance, which upon creation has a state and lifecycle and is kept track of by React. The TYPE key holds the actual component.`}</p>,
    returns:(<div>
      <div>RETURNS:</div>
      <div>{'{'}
        <div>&emsp;<span className="tl">{"$$typeof"}</span>: <span>{"Symbol(react.element)"},</span></div>
        <div>&emsp;<span className="tl">{"key"}</span>: <span>{"null"},</span></div>
        <div>&emsp;<span className="tl">{"props"}</span>: <span>{"{}"}</span></div>
        <div>&emsp;<span className="tl">{"ref"}</span>: <span>{"null"},</span></div>
        <div>&emsp;<span className="tl">{"type"}</span>: <span>{'()=>{...}'},</span></div>
        {'}'}
        </div>
      </div>) ,
  },
   /* {
  
    name: `setState`,
    form: <div><p className='bl'>State is an object that stores the values of properties belonging to a component that could change over time.</p> <p className='bl'>setState() is used to change the value of the state object performing a shallow merge between the new and previous state</p></div>,
    comment: <span>set state happens in</span> ,
    returns:<div><ol>
      <li><span className='tl'>setState</span> is called</li>
      <li>data is added to a <span className='tl'>queue</span></li>
      <li><span className='tl'></span>React starts handling the <span className='tl'>update</span></li>
      <li>new state is calculated + <span className='tl'>getDerivedStateFromProps</span> is called</li>
      <li><span className='tl'>shouldComponent</span> update is called with final (derived) state</li>
      <li><span className='tl'>render</span> is called</li>
      <li><span className='tl'>DOM changes</span> are made</li>
      <li><span className='tl'>ComponentDidUpdate</span> is called</li>
      </ol></div> ,
  },*/
  {
    name: `.useState()`,
    form: <div>{`const [state,setState]=React.useState(initialValue);`}</div>,
    comment: <div><p>{`//A function that returns an array containing a state and a setter for it. For web,when ReactDom creates an instance of a component it also adds an UPDATER to it like instance.updater=ReactDomUpdater; When setState is called it calls a function of the updater called enqueueSetState:   setState(partialState,callback){this.updater.enqueueSetState(this,partialState,callback);}`}</p> {'https://www.youtube.com/watch?v=1VVfMVQabx0'}</div> ,
    returns:<div>{"RETURN: State and a setter function."}</div> ,
  },
  {
    name: `.useEffect()`,
    form: <div>{`React.useEffect(()=>//main function,()=>//cleanerfunction,[dependancy]);`}</div> ,
    comment: <p>{`//run main function each time the sate of a dependancy changes and run cleaner function after. Internally when useState is called the call is forwarded to "__currentDispatcher".   useState(initialState){return React.__currentDispatcher.useState(initialState)}`}</p>,
    returns:<div>{"RETURN: EXAMINE THIS CLOSELY!!"}</div> ,
  },
  {
    name: `.useRef()`,
    form: <div>{`const a=React.useRef(null); + <div ref={a}>InnerHTML<div>`}</div> ,
    comment: <p>{`//a way to save a value to state that does not later cause rerenders upon update`}</p>,
    returns:<div>{"RETURN: object containing the value inside the '.current' key"}</div> ,
  },
  {
    name: `.useContext()/.createContext`,
    form: <div>{`const MyContext=React.createContext('value');//outside the function + 
    return (
        <MyContext.Provider value={'value2'}>
          <Toolbar />
        </MyContext.Provider>
      );//inside function const recievedContext = useContext(MyContext);//inside child `}</div> ,
    comment: <p>{`//a way to pass props directly without prop drilling`}</p> ,
    returns:<div>{"-"}</div> ,
  },
  {
    name: `.render()`,
    form: <div>{'render()'}</div> ,
    comment: <p>{`//The method of React that creates the object tree of React elements. If it encounters a component element, it calls it, and proceedes to create objects of its return value. This tree is called the "VIRTUAL DOM'. The render method creates the virtual DOM, and then syncs it with the real DOM. First time is expensive, but if we are re-rendering upon some change, and already have an old tree against the new one, react finds the smallest number of operations to trasform one tree into the other using the 'Diffing' algorythm.  The Diffing assumptions are that 1-Two different element types will produce 2 completely different trees. 2-A list of CHILD elements should contain a unique KEY within each child, because they are what allow react to figure out which elements changed. In a map() function INDEX must NOT be used as a key because if later a new element is added to the start of the array, all subsequent elements will update to an oldIndex+1 position and react will assume they changed, nuking all of them and rebuilding each element.`}</p> ,
    returns:<div>{"-"}</div> ,
  },
];

export default data;
