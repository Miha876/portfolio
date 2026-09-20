import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="relative bg-background min-h-screen text-foreground flex flex-col">
        <div className="noise-overlay"></div>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer className="py-8 text-center text-xs text-neutral-600 uppercase tracking-widest bg-neutral-950 mt-auto border-t border-neutral-900">
          © {new Date().getFullYear()} — wαspᴇl.py
        </footer>
      </div>
    </Router>
  );
}

export default App;
