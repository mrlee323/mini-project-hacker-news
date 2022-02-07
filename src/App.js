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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<Top />}>
          <Route path="post" element={<TopPost />} />
          <Route path="user" element={<TopUser />} />
        </Route>
        <Route path="user/:username" element={<User />} />
        <Route path="new" element={<New />} />
        <Route path="show" element={<Show />} />
        <Route path="ask" element={<Ask />} />
        <Route path="job" element={<Job />} />
        <Route path="about" element={<About />} />
        <Route path="comment" element={<Comment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
