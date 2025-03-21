import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Import the Home component
import About from './pages/About';
import Service from './pages/Service';
import Footer from './components/Footer';
import ScreenCast from './pages/ScreenCast';
import ActingSchool from './pages/ActingSchool';
import DanceStudio from './pages/DanceStudio';
import Production from './pages/production';




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
            <Route path="/screencast" element={<ScreenCast />} />
            <Route path="/actingschool" element={<ActingSchool />} />
            <Route path="/dancestudio" element={<DanceStudio />} />
            <Route path="/productions" element={<Production />} />


          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;