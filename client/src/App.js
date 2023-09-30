import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Error404 from './pages/error/Error404';
import ForgotPassword from './pages/login/ForgotPassword';
import Library from './pages/library/Library';
import { useAuth } from './context/AuthContext';

const App = () => {
  const {user } = useAuth()

  const RequireAuth = ({ children }) =>{
    return user !== null? children: <Navigate to="/login" />
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/'>
            <Route exact index path='/' element={<RequireAuth> <Home /></RequireAuth>} />
            <Route exact path='home' element={<RequireAuth> <Home /></RequireAuth>} />
          </Route>

          <Route exact path='/library'>
            <Route exact index path='' element={<RequireAuth> <Library /></RequireAuth>} />
            {/* <Route exact path='books' element={<Books />} /> */}
          </Route>
          
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/forgot-password' element={<ForgotPassword />} />
          <Route exact path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
