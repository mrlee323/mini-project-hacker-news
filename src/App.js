import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Top from './pages/Top';
import Show from './pages/Show';
import New from './pages/New';
import Ask from './pages/Ask';
import Job from './pages/Job';
import About from './pages/About';
import User from './pages/User';
import Comment from './pages/Comment';
import NotFound from './pages/NotFound';
import TopPost from './pages/TopPost';
import TopUser from './pages/TopUser';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopData } from './modules/top';
import { getUserData } from './modules/user';
import UserSubmission from './pages/UserSubmission';
import UserComment from './pages/UserComment';
import UserFavorite from './pages/UserFavorite';
import { getShowData } from './modules/show';
import { getNewData } from './modules/news';

function App() {
  const dispatch = useDispatch();
  const totalData = useSelector((state) => state);
  useEffect(() => {
    // dispatch(getShowData());
    dispatch(getTopData());
    dispatch(getUserData());
    // dispatch(getNewData());
    return totalData;
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<Top />}>
          <Route path="post" element={<TopPost />} />
          <Route path="user" element={<TopUser />} />
        </Route>
        <Route path="/user/:username" element={<User />}>
          <Route path="submission" element={<UserSubmission />} />
          <Route path="comment" element={<UserComment />} />
          <Route path="favorite" element={<UserFavorite />} />
        </Route>
        <Route path="new" element={<New />} />
        <Route path="show" element={<Show />} />
        <Route path="ask" element={<Ask />} />
        <Route path="job" element={<Job />} />
        <Route path="about" element={<About />} />
        <Route path="comment/:id" element={<Comment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
