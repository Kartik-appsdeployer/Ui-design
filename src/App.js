import './App.css';
import { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

function App() {
  const [State, setState] = useState([
    {
      id: 1,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 2,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 3,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 4,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 5,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 6,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 7,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 8,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 9,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 10,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 11,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 12,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 13,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 14,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 15,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 16,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 17,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 18,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 19,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    },
    {
      id: 20,
      name: "kartik",
      age: "20",
      college: "SKITM",
      city: "itarsi",
      college_city: "indore",
      hometown: "itarsi",
      currentTown: "banglore",
      hobbies: "Music",
    }
  ])
  const columns = [
    { dataField: 'id', text: 'ID' },
    { dataField: 'name', text: 'Name' },
    { dataField: 'age', text: 'Age' },
    { dataField: 'college', text: 'College' },
    { dataField: 'city', text: 'City' },
    { dataField: 'college_city', text: 'College City' },
    { dataField: 'hometown', text: 'Hometown' },
    { dataField: 'currentTown', text: 'CurrentTown' },
    { dataField: 'hobbies', text: 'Hobbies' },
  ];
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
          <div className="my-Table">
            <BootstrapTable
              keyField="id"
              data={State}
              columns={columns}
              pagination={paginationFactory(paginationOptions)}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
