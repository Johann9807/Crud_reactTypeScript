import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InicioLibro } from './pages/InicioLibro';
// import InicioMateria from './pages/InicioUsuario';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<InicioLibro/>}></Route>
          {/* <Route path='/materias' element={<InicioMateria/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
