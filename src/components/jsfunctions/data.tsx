let data = [
  {
    name: `.reduce()`,
    form: `Array.reduce((previousValue, currentValue)=>{return -action-},initialValue);`,
    comment: `//The reduce() method executes a user-supplied “reducer” function on
                each element(currentValue) of the array, in order, passing in the 
                return value from the calculation as 'previousValue'. If not supplied, 
                'initialValue' is 0, otherwise 'initialValue' is used instead of previousValue
                during the first loop.`,
    returns: "RETURN: Single value dependant on reducer function.",
    example: `[1,2,3].reduce((previousValue, currentValue)=>{return previousValue+currentValue},0);`,
    vis: `//returns (((0+1)+2)+3)=6;`,
  },
  {
    id: "find",
    name: `.find()`,
    form: `Array.find(element=>{return element.property ==value});`,
    comment: `//The find() method executes a user-supplied callback function on
                each element of the array, in order, and returns the first 
                element that passes the functions condition. `,
    returns: "RETURN: First element that fits or UNDEFINED",
    example_f: "EXAMPLE:",
    example: `[{id:'a'},{id:'b'},{id:'c'}].find(element=>{return element.id==='b'});`,
    vis: `//returns {id:'b'};`,
  },
  {
    id: "findIndex",
    name: `.findIndex()`,
    form: `Array.findIndex(element=>element ==='value');`,
    comment: `//The findIndex() method executes a user-supplied callback function on
                each element of the array, in order, and returns the index of the first 
                element that passes the functions condition. `,
    returns: "RETURN: The index of first element that fits or -1 if none do",
    example_f: "EXAMPLE:",
    example: `[{id:'a'},{id:'b'},{id:'c'}].find(element=>{return element.id==='b'});`,
    vis: `//returns 1;`,
  },
  {
    name: `.splice()`,
    form: `Array.splice(start,deleteCount,item1,item2,itemN);`,
    comment: `//MODIFIES THE ARRAY. Begin at start included (if greater than length, no
    deletion happes and behaves pike push, if negative, - that many from the end)
    delete "deleteCount" amount of elements and add items  1, 2 ,3 N.`,
    returns: "RETURN: returns the deleted values, even if an empty one",
    example_f: "EXAMPLE:",
    example: `[0,1,2,3,4,5,6,7].splice(2, 3, "two", "three", "four");`,
    vis: `//returns [2,3,4]; because  [0,1,->2,3,4<-,5,6,7]`,
  },
  {
    name: `.map()`,
    form: `Array.map((x)=>{return actionupon(x)});`,
    comment: `//The map() method creates a new array populated with the results of calling a provided
                 function on every element in the calling array.`,
    returns: "RETURN: New array with modified values",
    example_f: "EXAMPLE:",
    example: `[1,2,3].map((x)=>{x*2});`,
    vis: `//returns [1*2,2*2,3*2];`,
  },

  {
    name: `.push() &  .pop()`,
    form: `Array.push(x) or Array.pop()`,
    comment: `//Push adds a new x element to the end of the array.Pop removes and returns 
                the last element of the array.Both methods changes the length of the original array.`,
    returns: "RETURN: pop() returns last element of an array",
    example_f: "EXAMPLE:",
    example: `[1,2,3].push(4);  and  pop([1,2,3]);`,
    vis: `//push() modifies the array to [1,2,3,4] 
                                        and pop() modifies array to [1,2] and returns 3;`,
  },
  {
    name: `.unshift() &  .shift()`,
    form: `Array.unshift(x) or Array.shift()`,
    comment: `//Shift adds a new x element to the beginning of the array. Unshift removes and returns 
                the first element of the array. Both methods changes the length of the original array.`,
    returns: "RETURN: shift() returns last element of an array",
    example_f: "EXAMPLE:",
    example: `[1,2,3].unshift(4);  and  shift([1,2,3]);`,
    vis: `//unshift() modifies the array to [4,1,2,3] 
                                        and shift() modifies array to [2,3] and returns 1;`,
  },
  {
    name: `.slice()`,
    form: `Array.slice(start, end)`,
    comment: `//The slice() method returns a shallow copy of a portion of an array into a new array object 
                selected from start to end (end not included) where start and end represent the index of items in that 
                array. The original array will not be modified.`,
    returns:
      "RETURN: A shallow copy of the array, limited by the start/end parameters.",
    example_f: "EXAMPLE:",
    example: `[1,2,3,4,5,6,7,8,9,10].slice(1,-2);   OR   [1,2,3,4,5,6,7,8,9,10].slice(1,8);`,
    vis: `//both return a new copy array [2,3,4,5,6,7,8];`,
  },

  {
    name: `.indexOf() & .lastIndexOf()`,
    form: `Array.indexOf(x) and Array.lastIndexOf(x)`,
    comment: `//The indexOf() method returns the first index at which a given element (x) can be found in the array, 
             lastIndexOf() returns the last one.Both return -1 if it is not present.`,
    returns: "RETURN: index of given element or -1 if nothing is found. ",
    example_f: "EXAMPLE:",
    example: `[1,2,3].indexOf(2); and [1,2,3,4,5,2].indexOf(2);`,

    vis: `//indexOf() returns 1 and lastIndexOf() returns 5`,
  },
  {
    name: `.sort()`,
    form: `Array.sort((a,b)=>//sorter formula)`,
    comment: `//Sorts the array, by default in ascending order, converting elements into strings and comparing tehir UTF-16 code values.If a sorting function is given, its return value is checked. If the value is bigger than 0, a is place after b, if the return value is less than 0, a is placed before b, if 0, no change.`,
    returns:
      "RETURN: a reference to the same array as was input but now sorted. ",
    example_f: "EXAMPLE:",
    example: `[2,3,1,4].sort((a,b)=>{return a-b});`,

    vis: `// returns [1,2,3,4] <- modifies the original to this.`,
  },

  {
    name: `.trim()`,

    form: `String.trim()`,
    comment: `//Removes whitespaces, newlines, tabs, and similar
        characters from the start and end of a string. Does not modify the original string.`,
    returns:
      "RETURN: Copy of original string with no whitespaces on either side.",
    example_f: "EXAMPLE:",
    example: `' hello '.trim();`,
    vis: `//returns 'hello'`,
  },

  {
    name: `setTimeout()`,
    form: `setTimeout(()=>//dostuff,time)`,
    comment: `//Set a time that upon reachin the time parameter runs the callback function`,
    returns: "RETURN: - ",
    example_f: "EXAMPLE:",
    example: `' setTimeout(()=>console.log('Hello'),1000);`,
    vis: `//Logs 'Hello' to console after 1 second.'`,
  },
  {
    name: `setInterval()`,
    form: `setInterval(()=>//dostuff,time)`,
    comment: `//Runs the callback function every 'time' seconds. Loops endlessly`,
    returns: "RETURN: - ",
    example_f: "EXAMPLE:",
    example: `' setInterval(()=>console.log('Hello'),2000);`,
    vis: `//Logs 'Hello' to console every 2 seconds.'`,
  },
  {
    name: `clearInterval()`,
    form: `cetInterval(intervalName)`,
    comment: `//Stops the interval.`,
    returns: "RETURN: - ",
    example_f: "EXAMPLE:",
    example: `' clearInterval(intervalName);`,
    vis: `//Stops intervalName from running further'`,
  },
];

export default data;
