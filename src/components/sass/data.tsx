let data = [
  {
    name: `$variableName`,
    comment: `//The dollar sign allows us to create variables.`,
    example: <div>
      <div>
        <span className='yellow2'>$primaryColor</span><span>: rgb(55,55,55);</span>
      </div>
      <div>
        <span className='green2'>background</span><span>:$primaryColor;</span>
        </div>
      </div>,
  },
  {
    name: `Nesting`,
    comment: `//You can write one element inside another to show parent child relationship.`,
    example: <div>
      <div>
        <span className='yellow2'>.parent</span><span>{"{ background:grey;"}</span>
      </div>
      <div>
      &emsp;&emsp;&emsp;&emsp;<span className='green2'>child</span><span>{'{background:black}'}</span>
        </div>
        <div>
        &emsp;&emsp;&emsp;&nbsp;<span>{'}'}</span>
        </div>
      </div>,
  },
  {
    name: `: selectors`,
    comment: `//You can write selectors like hover, after, before inside the selector they belog to using the & symbol.`,
    example: <div>
      <div>
        <span className='yellow2'>.parent</span><span>{"{ background:grey;"}</span>
      </div>
      <div>
      &emsp;&emsp;&emsp;&emsp;<span className='green2'>&:hover</span><span>{'{background:black}'}</span>
        </div>
        <div>
        &emsp;&emsp;&emsp;&nbsp;<span>{'}'}</span>
        </div>
      </div>,
  },
  {
    name: `File division`,
    comment: `//You can split and import files of scss type into each other.`,
    example: <div>
     <h4>_fileOne.scss</h4>
     <p>{'div{background:green}'}</p>
     <h4>fileTwo.scss</h4>
     <p>{'@import "./fileOne.scss"'}</p>
     <p>{'span{color:green}'}</p>
      </div>,
  },
  {
    name: `Mixins`,
    comment: `//Function like blocks of reusable css with optional parameters providing additional flexibility. With no parameters the brackets () can be omitted after the mixin name.`,
    example: <div>
     <span className='yellow2'> {'@mixin mixinName($parameter1,$parameter2)'}</span>
     <span>{'{'}</span>
     <div>
     &emsp;&emsp;<span>display:flex;</span><br></br>
     &emsp;&emsp;<span>justify-content:<span className='green2'> {'$parameter1'}</span>;</span><br></br>
     &emsp;&emsp;<span>align-items:<span className='green2'> {'$parameter2'}</span>;</span>
     </div>
     &emsp;&emsp;<span>{'}'}</span><br></br>
     <span className='green2'> div</span><span>{'{'}</span><br></br>
     &emsp;&emsp;<span>@include mixinName(center, start);</span><br></br>
     &emsp;&emsp;<span>{'}'}</span>
      </div>,
  },
  {
    name: `Extension`,
    comment: `//You can extend all the properties of one selector into another, then overwrite the ones you want to change.`,
    example: <div>
     <h4>_fileOne.scss</h4>
     <p>{'div{background:green}'}</p>
     <h4>fileTwo.scss</h4>
     <p>{'@import "./fileOne.scss"'}</p>
     <p>{'span{@extend div}'}</p>
      </div>,
  },
  {
    name: `Calculations`,
    comment: `//You can use the normal + - / and * to perform calculations.`,
    example: <div>
              <span className='green2'> {'div'}</span><span>{'{ width : 100%-20%; }'}</span>
            </div>,
  },
];

export default data;
