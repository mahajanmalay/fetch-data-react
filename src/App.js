import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    setUsers(await response.json())
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="box">
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'></th>
              <th scope='col'>Contact</th>
              <th scope='col'>city</th>
              <th scope='col'>state</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(curElem =>(
                <tr>
                  <td>{curElem.username}</td>
                  <td>{curElem.name}</td>
                  <td>{curElem.address.city}</td>
                  <td>{curElem.address.street}</td>
                  <td><button>View Details</button></td>
                </tr>

            ))}
              
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
}

export default App;
