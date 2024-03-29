import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styles from './styles/index.scss'
import logements from './datas/logements.json'
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Header from './components/Header';
import Footer from './components/Footer';
import PageErreur from './pages/PageErreur';
import Fiche from './pages/Fiche';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/OCR_KASA_P8">
      <Header />
      <Routes>
        <Route path='/' element={<Accueil logements={logements} />} />
        <Route path='/fiche/:ficheId' element={<Fiche logements={logements} />} />
        <Route path='/apropos' element={<APropos/>} />
        <Route path='*' element={<PageErreur/>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
