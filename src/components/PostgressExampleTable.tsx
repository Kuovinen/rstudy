import "./PostgressExampleTable.css";
function PostgressExampleTable() {
  return (
    <div id="sqlTables">
      <span id="table0">TOP</span>
      <table className="tableSQL">
        <tr>
          <th>ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Title</th>
          <th>BirthYear</th>
          <th>Manager</th>
          <th>Department</th>
        </tr>
        <tr>
          <td>000A</td>
          <td>David</td>
          <td>Wallace</td>
          <td>CEO</td>
          <td>1965 </td>
          <td>-</td>
          <td>Management</td>
        </tr>
        <tr>
          <td>0000</td>
          <td>Jan</td>
          <td>Levinson</td>
          <td>Vice Pres.</td>
          <td>1967 </td>
          <td>000A</td>
          <td>Management</td>
        </tr>
      </table>
      <span id="table1">SCRANTON</span>
      <table className="tableSQL">
        <tr>
          <th>ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Title</th>
          <th>BirthYear</th>
          <th>Manager</th>
          <th>Department</th>
        </tr>
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
          <td>Jim</td>
          <td>Halpert</td>
          <td>Salesman</td>
          <td>1979 </td>
          <td>0001</td>
          <td>Sales</td>
        </tr>
        <tr>
          <td>0003</td>
          <td>Dwight </td>
          <td>Schrute</td>
          <td>Salesman</td>
          <td>1966</td>
          <td>0001</td>
          <td>Sales</td>
        </tr>
        <tr>
          <td>0004</td>
          <td>Kevin </td>
          <td>Malone</td>
          <td>Accountant </td>
          <td>1972 </td>
          <td>0006</td>
          <td>Accounting </td>
        </tr>
        <tr>
          <td>0005</td>
          <td>Toby </td>
          <td>Flenderson</td>
          <td>HR rep</td>
          <td>1967 </td>
          <td>0001</td>
          <td>HR</td>
        </tr>
        <tr>
          <td>0006</td>
          <td>Angela </td>
          <td>Martin</td>
          <td>S.Accountant</td>
          <td>1971 </td>
          <td>0001</td>
          <td>Accounting</td>
        </tr>
        <tr>
          <td>0007</td>
          <td>Pam </td>
          <td>Beesly</td>
          <td>Receptionist</td>
          <td>1974 </td>
          <td>0001</td>
          <td>Management</td>
        </tr>
      </table>
      <span id="table2">STAMFORD</span>
      <table className="tableSQL">
        <tr>
          <th>ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Title</th>
          <th>BirthYear</th>
          <th>Manager</th>
          <th>Department</th>
        </tr>
        <tr>
          <td>0001</td>
          <td>Josh </td>
          <td>Porter</td>
          <td>Reg.Manager</td>
          <td>1965 </td>
          <td>0000</td>
          <td>Management</td>
        </tr>
        <tr>
          <td>0002</td>
          <td>Jim</td>
          <td>Halpert</td>
          <td>Salesman</td>
          <td>1979 </td>
          <td>0001</td>
          <td>Sales</td>
        </tr>
        <tr>
          <td>0003</td>
          <td>Andy </td>
          <td>Bernard</td>
          <td>Salesman</td>
          <td>1974</td>
          <td>0001</td>
          <td>Sales</td>
        </tr>
        <tr>
          <td>0004</td>
          <td>Karen </td>
          <td>Filippelli</td>
          <td>Salesman </td>
          <td>1976 </td>
          <td>0001</td>
          <td>Sales </td>
        </tr>
        <tr>
          <td>0006</td>
          <td>Hannah </td>
          <td>Smoterich</td>
          <td>Accountant</td>
          <td>1966 </td>
          <td>0001</td>
          <td>Accounting</td>
        </tr>
      </table>
    </div>
  );
}
export default PostgressExampleTable;
