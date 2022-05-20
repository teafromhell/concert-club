import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import ConcertMainPage from './Pages/ConcertMainPage/ConcertMainPage';
import UserPage from './Pages/UserPage/UserPage';
import axios from 'axios'
import { IUsers } from './types/data';

function App() {

  const [users, setUsers] = useState<IUsers[]>([])

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async (): Promise<void> => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            const data = await response.data
            setUsers([...data])
        } catch (e) { console.log(e) }

    }
  return (
    <div className="app">
      <Routes>
       <Route path='/' element= { <ConcertMainPage users={users}/>}  />
        <Route path='/:name'  element={<UserPage users={users}/>} />
      </Routes>
    </div>
  );
}

export default App;
