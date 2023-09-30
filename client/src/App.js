import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Error404 from './pages/error/Error404';
// import Error from './pages/error/Error';
import ForgetPassword from './pages/login/ForgetPassword';
import Library from './pages/library/Library';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/'>
            <Route exact index path='/' element={<Home />} />
            <Route exact path='home' element={<Home />} />
          </Route>

          <Route exact path='/library'>
            <Route exact index path='' element={<Library />} />
            {/* <Route exact path='books' element={<Books />} /> */}
          </Route>
          
          <Route exact path='login' element={<Login />} />
            <Route exact path='forget-password' element={<ForgetPassword />} />
          <Route exact path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
