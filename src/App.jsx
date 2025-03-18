import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Import the Home component
import About from './pages/About';
import Service from './pages/Service';

export const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen w-full bg-slate-950 overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div id="page-content" className="relative z-10">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* About Route */}
            <Route path="/about" element={<About />} />

            <Route path="/service" element={<Service />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;