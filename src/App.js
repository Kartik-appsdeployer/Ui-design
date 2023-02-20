import './App.css';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Data from './data.json'

function App() {
  const [State, setState] = useState(Data)
  const [data, setData] = useState("");
  // const columns = [
  //   { dataField: 'id', text: 'ID' },
  //   { dataField: 'name', text: 'Name' },
  //   { dataField: 'age', text: 'Age' },
  //   { dataField: 'college', text: 'College' },
  //   { dataField: 'city', text: 'City' },
  //   { dataField: 'college_city', text: 'College City' },
  //   { dataField: 'hometown', text: 'Hometown' },
  //   { dataField: 'currentTown', text: 'CurrentTown' },
  //   { dataField: 'hobbies', text: 'Hobbies' },
  //   { dataField: 'jobRole', text: 'Job Role' },
  //   { dataField: 'company', text: 'Company' },
  //   { dataField: 'companyLocation', text: 'Company Location' },
  //   { dataField: 'projectLeader', text: 'Project Leader' },
  //   { dataField: 'teamLeader', text: 'Team Leader' },
  //   { dataField: 'supervisor', text: 'Supervisor' },
  // ];
  // console.log(data, "Dataaaaa");
  const paginationOptions = {
    sizePerPage: 15,  // number of rows to show per page
    hideSizePerPage: true,  // hide the option to change number of rows per page
    hidePageListOnlyOnePage: true,  // hide pagination controls when there is only one page
  };
  return (
    <div className="App">
      <div className="navBar">

      </div>
      <div className="center-content">
        <div style={{ minWidth: '15%' }}>
          <div className="sideBar">

          </div>
        </div>

        <div style={{ minWidth: '85%' }}>
          <p>Get the result here: <span style={{fontWeight: "bold"}}>{data}</span></p>
          <div className="my-Table">
            {/* <BootstrapTable
              keyField="id"
              data={State}
              columns={columns}
              pagination={paginationFactory(paginationOptions)}
              
            /> */}
            <Table responsive bordered>
            <thead>
                <tr>
                  <th>S.NO</th>
                  <th>name</th>
                  <th>age</th>
                  <th>college</th>
                  <th>city</th>
                  <th>college_city</th>
                  <th>hometown</th>
                  <th>hobbies</th>
                  <th>jobRole</th>
                  <th>company</th>
                  <th>companyLocation</th>
                  <th>projectLeader</th>
                  <th>teamLeader</th>
                  <th>supervisor</th>
                </tr>
              </thead>
              <tbody>
                {
                  State.map((obj, i) => (
                    <tr key={i}>
                      <td onClick={(e) => setData(obj.id)}>{obj.id}</td>
                      <td onClick={(e) => setData(obj.name)}>{obj.name}</td>
                      <td onClick={(e) => setData(obj.age)}>{obj.age}</td>
                      <td onClick={(e) => setData(obj.college)}>{obj.college}</td>
                      <td onClick={(e) => setData(obj.city)}>{obj.city}</td>
                      <td onClick={(e) => setData(obj.college_city)}>{obj.college_city}</td>
                      <td onClick={(e) => setData(obj.hometown)}>{obj.hometown}</td>
                      <td onClick={(e) => setData(obj.hobbies)}>{obj.hobbies}</td>
                      <td onClick={(e) => setData(obj.jobRole)}>{obj.jobRole}</td>
                      <td onClick={(e) => setData(obj.company)}>{obj.company}</td>
                      <td onClick={(e) => setData(obj.companyLocation)}>{obj.companyLocation}</td>
                      <td onClick={(e) => setData(obj.projectLeader)}>{obj.projectLeader}</td>
                      <td onClick={(e) => setData(obj.teamLeader)}>{obj.teamLeader}</td>
                      <td onClick={(e) => setData(obj.supervisor)}>{obj.supervisor}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;