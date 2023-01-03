import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
  Routes
} from 'react-router-dom';
import BlogLandingPage from './pages/BlogLandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<BlogLandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
