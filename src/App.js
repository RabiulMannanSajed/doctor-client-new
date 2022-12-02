import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        } />
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
