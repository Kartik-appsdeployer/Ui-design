import './App.css';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Data from './data.json'
import axios from 'axios';
import Loader from 'lodash';

const pageSize = 200;
function App() {
  const [State, setState] = useState(Data)
  const [data, setData] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [paginatedPosts, setPaginatedPosts] = useState()
  // const columns = [
  //   { dataField: 'id', text: 'ID' },
  //   { dataField: 'title', text: 'title' },
  //   { dataField: 'description', text: 'description' },
  //   { dataField: 'location', text: 'location' },
  //   { dataField: 'lng', text: 'lng' },
  //   { dataField: 'lat', text: 'lat' },
  //   { dataField: 'userId', text: 'userId' },
  //   { dataField: 'name', text: 'name' },
  //   { dataField: 'isdeleted', text: 'isdeleted' },
  //   { dataField: 'videoUrl', text: 'videoUrl' },
  //   { dataField: 'images', text: 'images' },
  //   { dataField: 'mediatype', text: 'mediatype' },
  //   { dataField: 'imagePaths', text: 'imagePaths' },
  //   { dataField: 'feedsComment', text: 'feedsComment' },
  //   { dataField: 'commentCount', text: 'commentCount' },
  //   { dataField: 'createdAt', text: 'createdAt' },
  //   { dataField: 'code', text: 'code' },
  //   { dataField: 'msg', text: 'msg' },
  // ];
  // // console.log(data, "Dataaaaa");
  // const paginationOptions = {
  //   sizePerPage: 100,  // number of rows to show per page
  //   hideSizePerPage: true,  // hide the option to change number of rows per page
  //   hidePageListOnlyOnePage: true,  // hide pagination controls when there is only one page
  // };
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setState(res.data);
      setPaginatedPosts(Loader(State).slice(0).take(pageSize).value());
    })
  }, [])
  // 
  const pageCount = State ? Math.ceil(State.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = Loader.range(1, pageCount + 1);
  const pagination = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    const paginatePost = Loader(State).slice(startIndex).take(pageSize).value();
    setPaginatedPosts(paginatePost);
  } 
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
          <p>Get the result here: <span style={{ fontWeight: "bold" }}>{data}</span></p>
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
                  <th>ID</th>
                  <th>Post ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {
                  paginatedPosts.map((obj, i) => (
                    <tr key={i}>
                      <td onClick={() => setData(obj.id)}>{obj.id}</td>
                      <td onClick={() => setData(obj.albumId)}>{obj.albumId}</td>
                      <td onClick={() => setData(obj.title)}>{obj.title}</td>
                      <td onClick={() => setData(obj.url)}>{obj.url}</td>
                      <td onClick={() => setData(obj.thumbnailUrl)}>{obj.thumbnailUrl}</td>
                      </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
          <nav className='d-flex justify-content-center'>
            <ul className="pagination">
              {
                pages.map((page) => (
                  <li className={
                    page === currentPage ? "page-item active" : "page-item"
                  } style={{cursor: "pointer"}}>
                    <p className="page-link"
                    onClick={() => pagination(page)}>{page}</p>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>

    </div>
  );
}

export default App;