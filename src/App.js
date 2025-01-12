import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Payment from './pages/Payment';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
