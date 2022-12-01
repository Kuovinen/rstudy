let data = [
  {
    name: ` simple query`,
    comment: `//Assuming generic setup a simple query is { books{name,genre,author{name,age}}}.`,
    return: (
      <span>
        {
          "books:[{name:bookA, genre:fantasy, author {name:Brandon,42}},{name:bookB....}]"
        }
      </span>
    ),
  },
  {
    name: ` basic node express sever`,
    comment: `//Non functioning template with no schema.`,
    return: (
      <div>
        <div>{'const express = require("express");'}</div>
        <div>{'const graphqlHTTP = require("express-graphql");'}</div>
        <div>{"const app = express();"}</div>
        <div>{"const PORT = 3500;"}</div>
        <div>{'app.use("/graphql",graphqlHTTP({'}</div>
        <div>{"}));"}</div>
        <div>{'app.listen(PORT, () => console.log("Port 4000")); '}</div>
      </div>
    ),
  },
  {
    name: ` basic node schema`,
    comment: `//Basic one object schema.`,
    return: (
      <div>
        <div>{'const graphql = require("graphql");'}</div>
        <div>{"const { GraphQLObjectType, GraphQLString } = graphql;"}</div>
        <div>{"const BookType = new GraphQLObjectType({"}</div>
        <div>&emsp;&emsp;{'name: "Book",'}</div>
        <div>&emsp;&emsp;{"fields: () => ({"}</div>
        <div>
          &emsp;&emsp;&emsp;&emsp;&emsp;{"id: { type: GraphQLString },"}
        </div>
        <div>
          &emsp;&emsp;&emsp;&emsp;&emsp;{"name: { type: GraphQLString },"}
        </div>
        <div>
          &emsp;&emsp;&emsp;&emsp;&emsp;{"genre: { type: GraphQLString },"}
        </div>
        <div>&emsp;&emsp;&emsp;&emsp;&emsp;{"}),"}</div>
        <div>{"});"}</div>
        <div>
          {"const RootQuery = new GraphQLObjectType("}{" "}
          <span className="yellow2">{"{"}</span>
        </div>
        <div>&nbsp;&nbsp;&nbsp;{'name: "RootQueryType",'}</div>
        <div>
          &nbsp;&nbsp;&nbsp;{"fields: "} <span className="green2">{"{"}</span>
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"book: {"}
        </div>
        <div className="g">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {"//^ 'book' the name of the query, the first word we will type."}
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {"type: BookType,"}
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {"args: {"}
        </div>
        <div>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {
            "id: { type: GraphQLString }, //what identified will be use in the query"
          }
        </div>
        <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {"},"}</div>
        <div>
          &emsp;&emsp;&emsp;
          {"resolve(parent, args) {"}
        </div>
        <div className="g">{"//code to get data from db/other source"}</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</div>
        <div>
          &nbsp;&nbsp;&nbsp;<span className="green2">{"}"}</span>
          {","}
        </div>

        <div>
          {" "}
          <span className="yellow2">{"}"}</span>
          {");"}
        </div>
        <div>{"module.exports = new GraphQLSchema({"}</div>
        <div>&emsp;{"query: RootQuery,"}</div>
        <div>{"});"}</div>
      </div>
    ),
  },
];

export default data;
