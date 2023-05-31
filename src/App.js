import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Loading from './pages/Loading';
import Velkommen from './pages/Velkommen';
import Fejlside from './pages/Fejlside';
import Lavprofil from './pages/Lavprofil';
import Scanarmbaand from './pages/Scanarmbaand';
import Navn from './pages/Navn';
import Aktivearmbaand from './pages/Aktivearmbaand';
import Armbaand from './pages/Armbaand';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Velkommen" />} />
          <Route path="/Velkommen" element={isLoading ? <Loading /> : <Velkommen />} />
          <Route path="/Fejlside" element={<Fejlside />} />
          <Route path="/Lavprofil" element={<Lavprofil />} />
          <Route path="/Scanarmbaand" element={<Scanarmbaand />} />
          <Route path="/Navn" element={<Navn />} />
          <Route path="/Aktivearmbaand" element={<Aktivearmbaand />} />
          <Route path="/Armbaand" element={<Armbaand />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
