import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar'; 
import Home from './views/Home/Home';
import Shop from './views/Shop/Shop';
import Consultation from './views/Consultation/Consultation';
import Support from './views/Support/Support';
import QueryLog from './views/QueryLog/QueryLog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Navbar /> 
          
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/support" element={<Support />} />
              <Route path="/querylog" element={<QueryLog />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
