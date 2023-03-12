import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import AlbumsPage from './pages/AlbumsPage/AlbumsPage';
import HomePage from './pages/HomePage/HomePage';
import PostPage from './pages/PostsPage/PostPage';
import PostsPage from './pages/PostsPage/PostsPage';
import UserPage from './pages/UsersPage/UserPage';
import UsersPage from './pages/UsersPage/UsersPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:userId' element={<UserPage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/posts/:postId' element={<PostPage />} />
        <Route path='/albums' element={<AlbumsPage />} />
      </Routes>
    </div>
  );
}

export default App;
