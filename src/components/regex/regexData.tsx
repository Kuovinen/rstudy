/*
<span className='yellow2'></span>
<span className='green2'>RESULT</span>
*/
<span className="yellow2"></span>;
const arr = [
  {
    title: "theactualregex",
    description: (
      <span>
        <span className="yellow2"> /g  </span>- flag, "global" meaning that the expression is searched throught the whole string, otherwise only the first match would be returned.
      </span>
    ),
    example: 'e',

  },
  {
    title: "s+",
    description: (
      <span>
        <span className="yellow2"> +  </span>- match one or more of the token (symbol) that is before the plus sign.In this case all s and all multiple s will be matched.
      </span>
    ),
    example: 's+',

  },
  {
    title: "ci?",
    description: (
      <span>
        <span className="yellow2"> ?  </span>- match c but if i is after c also match that (ci).
      </span>
    ),
    example: 'ci?',

  },
  {
    title: "ol*",
    description: (
      <span>
        <span className="yellow2"> *  </span>- match any o but also match any amount of l's after it for example ollllll. In the example it matches olo's as well because it sees the second o as individual instance of the regex expression formula with an ol preceeding it as it's own instance.
      </span>
    ),
    example: 'ol*',

  },
  {
    title: ".at",
    description: (
      <span>
        <span className="yellow2"> .  </span>- match any one symbol per period except new line before the at.
      </span>
    ),
    example: '.at',

  },
  {
    title: "\\.",
    description: (
      <span>
        <span className="yellow2"> \.  </span>- seach for the perido itself, escaping it being a regex symbol.
      </span>
    ),
    example: '\\.',

  },
  {
    title: "\\w",
    description: (
      <span>
        <span className="yellow2"> \w  </span>- lowercase w matches any WORD or NUMBER character excluding &.? !@# and so on.Does include _ (underscore). 
      </span>
    ),
    example: '\\w',

  },
  {
    title: "\\W",
    description: (
      <span>
        <span className="yellow2"> \W  </span>- uppercase W matches the only symbols like ? % $ @ and spaces, except _ (underscore)  and spaces and so on.
      </span>
    ),
    example: '\\W',

  },
  {
    title: "\\s",
    description: (
      <span>
        <span className="yellow2"> \s  </span>- lowercase s matches any white spaces. 
      </span>
    ),
    example: '\\s',

  },
  {
    title: "\\S",
    description: (
      <span>
        <span className="yellow2"> \S  </span>- uppercase S matches any NONwhite spaces.
      </span>
    ),
    example: '\\S',

  },
  {
    title: "\\w{4}",
    description: (
      <span>
        <span className="yellow2"> {4}  </span>- get any 4 symbols in a row (the split happens on none \w characters).
      </span>
    ),
    example: '\\w{4}',

  },
  {
    title: "\\w{4,}",
    description: (
      <span>
        <span className="yellow2"> , </span>- get any 4 symbols OR MORE in a row (the split happens on none \w characters).
      </span>
    ),
    example: '\\w{4,}',

  },
  {
    title: "\\w{4,5}",
    description: (
      <span>
        <span className="yellow2"> {'{4,5}'} </span>- get any 4 to 5 symbols in a row (the split happens on none \w characters).
      </span>
    ),
    example: '\\w{4,5}',

  },
  {
    title: "[fc]",
    description: (
      <span>
        <span className="yellow2"> [fc] </span>- match any f or c character.
      </span>
    ),
    example: '[fc]',

  },
  {
    title: "[a-c]",
    description: (
      <span>
        <span className="yellow2"> [a-c] </span>- match any letter from  a to c.
      </span>
    ),
    example: '[a-c]',

  },
  {
    title: "[^a-d]",
    description: (
      <span>
        <span className="yellow2"> [^] </span>- match anything BUT what follows the caret symbol.
      </span>
    ),
    example: '[^a-d]',

  },
  {
    title: "^Lo",
    description: (
      <span>
        <span className="yellow2"> [^Lo] </span>- match Lo but only in the beginning of.
      </span>
    ),
    example: '^Lo',

  },

];
export default arr;
