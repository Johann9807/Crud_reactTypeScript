import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InicioLibro } from './pages/InicioLibro';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<InicioLibro/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
