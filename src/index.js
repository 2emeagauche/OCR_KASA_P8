import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Header from './components/Header';
import PageErreur from './pages/PageErreur';
import Fiche from './pages/Fiche';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/fiche/:ficheId' element={<Fiche />} />
        <Route path='/apropos' element={<APropos/>} />
        <Route path='*' element={<PageErreur/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
