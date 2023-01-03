import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogLandingPage from './pages/BlogLandingPage';
import BlogAdd from './components/BlogAdd';
import BlogForm from './components/BlogForm';
import BlogListItem from './components/BlogListItem';
import BlogDetailPage from './pages/BlogDetailPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<BlogLandingPage />} />
          <Route path='/BlogAdd' element={<BlogAdd />} />
          <Route path='/BlogForm' element={<BlogForm />} />
          <Route path='/BlogListItem' element={<BlogListItem />} />
          <Route path='/BlogDetailPage' element={<BlogDetailPage />} />

        </Routes>
      </BrowserRouter>
    </div >
  );

}

export default App;
