import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components';
import { getUsers } from './api';

const App = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers()
      .then(users => {
        setUserList(users)
      })
      .catch(error => {
        console.error(`Here is error: ${error}`)
      });
  }, []);

  return (
    <div id="App">
      <Header userList={ userList } />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);