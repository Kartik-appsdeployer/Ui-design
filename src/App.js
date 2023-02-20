import './App.css';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';

const Handle = [
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
]
function App() {
  const [State, setState] = useState(Handle)
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
            <Table className="table" responsive>
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
                </tr>
              </thead>
              <tbody>
                {
                  State.map(obj => (
                    <tr key={1}>
                      <td>{obj.id}</td>
                      <td>{obj.name}</td>
                      <td>{obj.age}</td>
                      <td>{obj.college}</td>
                      <td>{obj.city}</td>
                      <td>{obj.college_city}</td>
                      <td>{obj.hometown}</td>
                      <td>{obj.hobbies}</td>
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
