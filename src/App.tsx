import { Route, Routes } from 'react-router-dom';
import './App.scss';
import ConcertMainPage from './Pages/ConcertMainPage/ConcertMainPage';
import UserPage from './Pages/UserPage/UserPage';
import SinglePostPage from './Pages/SinglePostPage/SinglePostPage';

import { useEffect } from 'react'

import { useAppDispatch } from './utils/Hook';
import { fetchUsers } from './store/slices/userSlice'
import { fetchPosts } from './store/slices/postSlice'
import ScrollToTop from './utils/ScrollToTop';


function App(): JSX.Element {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchPosts())
  }, [dispatch])
  return (
    <div className="app">
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<ConcertMainPage />} />
          <Route path=':name'  >
            <Route index element={<UserPage />} />
            <Route path=':title' element={<SinglePostPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
