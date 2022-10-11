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
    title: "--SELECT",
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
    title: "--CONSTRAINT",
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
    title: "--WHERE",
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
    title: "--UPDATE",
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
    title: "--DELETE",
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
    title: "--INSERT INTO",
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
    title: "ALTER DATABASE",
    description: <span>modifies a database</span>,
    example: <span>data</span>,
    result: <span className="green">RESULT</span>,
  },
  {
    title: "--CREATE TABLE",
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
            '--VARCHAR = TEXT has a constraint of 255 character length. SERIAL=INT that automatically adds 1 to current id as new entities are made. PRIMARY = unique NB! If the value name needs to be an SQL keyword, wrap it in double quotes (not single!). Profile=> "user" <-otherwise user would have been picked up as a keyword. Names should be singular, not plural form. '
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
    title: "--DROP TABLE",
    description: <span>deletes a table</span>,
    example: (
      <span>
        <span className="yellow2">DROP TABLE</span> scranton;
      </span>
    ),
    result: <span>RESULT: scranton table is gone</span>,
  },
  {
    title: "CREATE INDEX",
    description: <span>creates an index (search key)</span>,
    example: <span>data</span>,
    result: <span className="green">scranton table is deleted.</span>,
  },
  {
    title: "DROP INDEX",
    description: <span>deletes an index</span>,
    example: <span>data</span>,
    result: <span className="green">RESULT</span>,
  },
];
export default arr;
