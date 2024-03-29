/*
<span className='yellow2'></span>
<span className='green2'>RESULT</span>
*/
<span className="yellow"></span>;
const arr = [
  {
    title: "BASE",
    description: (
      <span>
        extracts<span className="yellow"> data </span>from a database
      </span>
    ),
    example: <span>data</span>,
    result: <span className="green2">RESULT</span>,
  },
  {
    title: "SELECT",
    description: <span>extracts data from a database</span>,
    example: (
      <span>
        <span className="green2">SELECT</span> firstName, birthYear{" "}
        <span className="yellow2">FROM</span> "hq";
        <span className="green1">
          --If instead of firstName, birthYear we put * it selects all COLUMNS
          from table called hq
        </span>
      </span>
    ),
    result: (
      <div>
        RESULT:
        <div>
          {" "}
          <table className="tableSQL" style={{ border: "none" }}>
            <tr>
              <td>David</td>
              <td>1965 </td>
            </tr>{" "}
            <tr>
              <td>Jan</td>
              <td>1967 </td>
            </tr>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: "JOIN",
    description: (
      <span>
        query keyword to get data from multiple tables at once using their
        common field
      </span>
    ),
    example: (
      <span>
        <span className="yellow2">SELECT</span> *{" "}
        <span className="yellow2">FROM</span> scranton{" "}
        <span className="green2">JOIN</span> hq{" "}
        <span className="yellow2">ON</span> hq.id==scranton.manager;
      </span>
    ),
    result: (
      <div>
        RESULT: Assuming the manager field of scranton is referencing hq id's
        only Michales boss is in hq
        <div>
          {" "}
          <table className="tableSQL" style={{ border: "none" }}>
            <tr>
              <td>0001</td>
              <td>Michael </td>
              <td>Scott</td>
              <td>Reg.Manager</td>
              <td>1962</td>
              <td>0000</td>
              <td>Management</td>
            </tr>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: "CONSTRAINT",
    description: <span>defines rules for data in a table</span>,
    example: (
      <span>
        <span className="yellow2">CREATE TABLE</span> post (id{" "}
        <span className="yellow2">SERIAL PRIMARY KEY</span>, name{" "}
        <span className="yellow2">VARCHAR(255)</span>, content{" "}
        <span className="yellow2">TEXT</span>, user_id{" "}
        <span className="yellow2">INT</span>,{" "}
        <span className="green2">CONSTRAINT</span> fk_user{" "}
        <span className="yellow2">FOREIGN KEY</span>(user_id)
        <span className="yellow2"> REFERENCES</span> "user"(id));
        <span className="green2">
          --CONSTRAINT declares a rule FOREIGN KEY defines which column in
          concerns and then REFERENCES defines relationship
        </span>
      </span>
    ),
    result: (
      <div>
        <span>
          RESULT: Creates a table with the row user_id referencing id's from the
          table named user
        </span>{" "}
        <div>post</div>{" "}
        <table className="tableSQL">
          <tr>
            <th>id</th>
            <th>name </th>
            <th>content </th>
            <th>user_id </th>
          </tr>{" "}
        </table>
      </div>
    ),
  },
  {
    title: "WHERE",
    description: <span>sets conditions for queries</span>,
    example: (
      <span>
        <span className="yellow2">SELECT</span>*{" "}
        <span className="yellow2">FROM</span> scranton{" "}
        <span className="green2">WHERE</span> name='Michael';
      </span>
    ),
    result: (
      <span>
        RESULT:{" "}
        <div>
          {" "}
          <table className="tableSQL" style={{ border: "none" }}>
            <tr>
              <td>0001</td>
              <td>Michael </td>
              <td>Scott</td>
              <td>Reg.Manager</td>
              <td>1962</td>
              <td>0000</td>
              <td>Management</td>
            </tr>
          </table>
        </div>
      </span>
    ),
  },
  {
    title: "OR",
    description: <span>Combine query conditions. One must be met.</span>,
    example: (
      <span>
        <span className="yellow2">SELECT</span> *{" "}
        <span className="yellow2">FROM</span> scranton{" "}
        <span className="yellow2">WHERE</span> name='Michael'
        <span className="green2"> OR</span>
        <span className="yellow2"> WHERE</span> name='Jim';
      </span>
    ),
    result: (
      <span>
        RESULT:{" "}
        <div>
          {" "}
          <table className="tableSQL" style={{ border: "none" }}>
            <tr>
              <td>0001</td>
              <td>Michael </td>
              <td>Scott</td>
              <td>Reg.Manager</td>
              <td>1962</td>
              <td>0000</td>
              <td>Management</td>
            </tr>
            <tr>
              <td>0002</td>
              <td>Jim </td>
              <td>Halpert</td>
              <td>Salesman</td>
              <td>1979</td>
              <td>0001</td>
              <td>Sales</td>
            </tr>
          </table>
        </div>
      </span>
    ),
  },
  {
    title: "AND",
    description: <span>Combine query conditions. Both must be met.</span>,
    example: (
      <span>
        <span className="yellow2">SELECT</span> *{" "}
        <span className="yellow2">FROM</span> scranton{" "}
        <span className="yellow2">WHERE</span> name='Michael'
        <span className="green2"> AND</span>
        <span className="yellow2"> WHERE</span> name='Jim';
      </span>
    ),
    result: (
      <span>
        RESULT:{" "}
        <div>
          {" "}
          <table className="tableSQL" style={{ border: "none" }}>
            <span>Nothing, because there's only 1 name</span>
          </table>
        </div>
      </span>
    ),
  },
  {
    title: "UPDATE",
    description: <span>updates data in a database</span>,
    example: (
      <span>
        <span className="green2">UPDATE</span> "scranton"{" "}
        <span className="yellow2">SET</span> title = boss{" "}
        <span className="yellow2">WHERE</span> firstName = Michael;
      </span>
    ),
    result: (
      <div>
        RESULT: Micheal scott title changes to boss
        <div>
          <table className="tableSQL" style={{ border: "none" }}>
            <tr>
              <td>0008</td>
              <td>Michael </td>
              <td>Scott</td>
              <td>boss</td>
              <td>1962 </td>
              <td>0000</td>
              <td>Management</td>
            </tr>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: "DELETE",
    description: <span>deletes data from a database</span>,
    example: (
      <span>
        <span className="green2">DELETE</span>{" "}
        <span className="yellow2">FROM </span> "scranton" WHERE name=Jim ;
      </span>
    ),
    result: <span>RESULT: Jim quits the scranton branch</span>,
  },
  {
    title: "INSERT INTO",
    description: <span>inserts new data into a database</span>,
    example: (
      <span>
        <span className="green2">INSERT INTO</span> "scranton" (firstName,
        lastName, title, birthYear, manager, department){" "}
        <span className="yellow2">VALUES </span>
        ('Ryan' , 'Howard' , 'intern', 1979 , 0001, 'Sales');
        <span className="green1">
          --assuming id is SERIAL.The order of column names not linked to table
          order, but dictates the order of values. Single quotes indicate text
          to SQL, so it doesn't assume keywords in this case.NOT double quotes!
        </span>
      </span>
    ),
    result: (
      <div>
        RESULT: inside scranton table a new entry appears
        <div>
          <table className="tableSQL" style={{ border: "none" }}>
            <tr>
              <td>0008</td>
              <td>Ryan </td>
              <td>Howard</td>
              <td>intern</td>
              <td>1979 </td>
              <td>0001</td>
              <td>Sales</td>
            </tr>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: "CREATE DATABASE",
    description: <span>creates a new database</span>,
    example: <span>data</span>,
    result: <span className="green">RESULT</span>,
  },
  {
    title: "GROUP BY value",
    description: (
      <span>
        merges the return values of a query if they have the same values
      </span>
    ),
    example: <span>SELECT * FROM table GROUP BY amount;</span>,
    result: (
      <span className="green">
        RESULT: would return all entities and merge all those that have the same
        amounts into a singular one.
      </span>
    ),
  },
  {
    title: "ALTER DATABASE",
    description: <span>modifies a database</span>,
    example: <span>data</span>,
    result: <span className="green">RESULT</span>,
  },
  {
    title: "CREATE TABLE",
    description: (
      <span>
        Creates a new table. In the example below the new table is called
        'profile', it's <span className="yellow1">PRIMARY KEY</span> will be
        'id', it'll have a column 'name' and 'email' of{" "}
        <span className="yellow1">VARCHAR(255)</span> datatype, a 'password'
        column of <span className="yellow1">TEXT</span> datatype and an 'age'
        column of datatype <span className="yellow1">INT</span>. Notice the
        comment is started with '--' Also password is TEXT type because irl it's
        likely to be a long hash text. So no constraits are logical.
      </span>
    ),
    example: (
      <span>
        <span className="green2">CREATE TABLE</span> profile (id{" "}
        <span className="yellow2">SERIAL PRIMARY KEY</span>, name{" "}
        <span className="yellow2">VARCHAR(100)</span>, email
        <span className="yellow2">VARCHAR(255)</span>, password{" "}
        <span className="yellow2">TEXT</span>, age{" "}
        <span className="yellow2">INT</span>);
        <span className="green1">
          {
            'VARCHAR = TEXT has a constraint of 255 character length. SERIAL=INT that automatically adds 1 to current id as new entities are made. PRIMARY = unique NB! If the value name needs to be an SQL keyword, wrap it in double quotes (not single!). Profile=> "user" <-otherwise user would have been picked up as a keyword. Names should be singular, not plural form. '
          }
        </span>
      </span>
    ),
    result: (
      <div>
        <div>RESULT:</div>
        <span id="table0">profile</span>
        <table className="tableSQL">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>age</th>
          </tr>
        </table>
      </div>
    ),
  },
  {
    title: "ALTER TABLE",
    description: <span>modifies a able</span>,
    example: <span>data</span>,
    result: <span className="green">RESULT</span>,
  },
  {
    title: "DROP TABLE",
    description: <span>deletes a table</span>,
    example: (
      <span>
        <span className="yellow2">DROP TABLE</span> scranton;
      </span>
    ),
    result: <span>RESULT: scranton table is gone</span>,
  },
  {
    title: "ALTER SEQUENCE X_Y_seq RESTART WITH 1;",
    description: (
      <span>
        Resets the primary serial key named 'sequntialKeyName' in table name
        'tableName' to make it start with 1.{" "}
      </span>
    ),
    example: (
      <span>
        ALTER SEQUENCE <span className="yellow2">X</span>_
        <span className="yellow2">Y</span>_seq RESTART WITH 1;
      </span>
    ),
    result: (
      <span>RESULT: table named X has it's Y column sequence reset to 1</span>
    ),
  },
  {
    title: "\\l",
    description: <span>list all</span>,
    example: (
      <span>
        <span className="yellow2">\l</span>
      </span>
    ),
    result: <span>RESULT: displays all databases</span>,
  },
  {
    title: "\\conninfo",
    description: <span>Outputs information about the connection</span>,
    example: (
      <span>
        <span className="yellow2">\conninfo</span>
      </span>
    ),
    result: (
      <span>
        RESULT: You are connected to database "postgres" as user "me" on host
        "localhost" (address "::1") at port "5432".
      </span>
    ),
  },
  {
    title: "\\c databaseName",
    description: <span>connect to specific database</span>,
    example: (
      <span>
        <span className="yellow2">\c</span> hq
      </span>
    ),
    result: <span>Connects to hq database</span>,
  },
  {
    title: "\\! cls     or   \\! clear ",
    description: (
      <span>clear terminal, cls form windows and clear for linux</span>
    ),
    example: (
      <span>
        <span className="yellow2">\\! clear</span>
      </span>
    ),
    result: <span>Empty terminal</span>,
  },
  {
    title: "\\dt ",
    description: <span>display tables in current database</span>,
    example: (
      <span>
        <span className="yellow2">\dt</span>
      </span>
    ),
    result: <span>Shows hq, scranton and stamford as a list of tables</span>,
  },
  {
    title: "\\sudo –i –u postgres ",
    description: <span>start postgres on linux</span>,
    example: (
      <span>
        <span className="yellow2">\\sudo –i –u postgres</span>
      </span>
    ),
    result: <span>Start PostgreSQL server</span>,
  },
  {
    title: "\\psql ",
    description: <span>Enters the PostgreSQL Console</span>,
    example: (
      <span>
        <span className="yellow2">\psql</span>
      </span>
    ),
    result: (
      <span>
        After entering this console, you can instantly start working with
        databases by executing different queries of your choice in this console.
      </span>
    ),
  },
  {
    title: "DROP INDEX",
    description: <span>deletes an index</span>,
    example: <span>data</span>,
    result: <span className="green">RESULT</span>,
  },
];
export default arr;
