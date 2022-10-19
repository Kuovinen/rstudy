/*
<span className='yellow2'></span>
<span className='green2'>RESULT</span>
*/
<span className="yellow"></span>;
const arr = [
  {
    title: "/theactualregex/g",
    description: (
      <span>
        extracts<span className="yellow"> /g  </span>- flag, "global" meaning that the expression is searched throught the whole string, otherwise only the first match would be returned.
      </span>
    ),
    example: 'e',
  },
  {
    title: "/s+/g",
    description: (
      <span>
        <span className="yellow"> +  </span>- match one or more of the token (symbol) that is before the plus sign.In this case all s and all multiple s will be matched.
      </span>
    ),
    example: 's+',
  },

];
export default arr;
