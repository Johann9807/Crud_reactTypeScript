import React, { FunctionComponent } from 'react';
import ILibro from '../entidades/ILibro';

interface LibroProps {
  alCambiarValor : (name : string, value : string) => void
  guardarLibro : () => void
  libro : ILibro
  limpiarFormulario : () => void
}


const  FormularioLibros: FunctionComponent <LibroProps> = ({limpiarFormulario,alCambiarValor, guardarLibro,libro  }) => {
  // const [libro, setLibro] = useState<ILibro>(estadoInicial);
  // const [listaLibros, setListaLibros] = useState<ILibro[]>([]);


  const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    guardarLibro()
    // localStorage.setItem('libro', JSON.stringify(libro));
    
    limpiarFormulario();
  };
  

  return (
    <>
    <form className='Form-libros' onSubmit={handleSubmit}>
      <div>
        <label className="lbl-nombre" htmlFor="nombreLibro">Nombre Libro: </label>
        <input
          type="text"
          id="nombreLibro"
          name="NombreLibro"
          value={libro.NombreLibro}
          onChange={(event)=>alCambiarValor(event.target.name,event.target.value)} />
      </div>
      <div>
        <label className="lbl-nombre" htmlFor="autorLibro">Nombre Autor: </label>
        <input
          type="text"
          id="autorLibro"
          name="AutorLibro"
          value={libro.AutorLibro}
          onChange={(event)=>alCambiarValor(event.target.name,event.target.value)} />
      </div>
      <div>
        <label htmlFor="genero">Genero Libro: </label>
        <select
          id="genero"
          name="Genero"
          value={libro.Genero}
          onChange={(event)=>alCambiarValor(event.target.name,event.target.value)} >
            <option value="">Seleccionar...</option>
            <option value="terror">Terror</option>
            <option value="aventura">Aventura epica</option>
            <option value="drama">Drama</option>
            <option value="romance">Romance</option>
          </select>
      </div>
      <div>
        <label htmlFor="puntuacion">Puntuacion Libro: </label>
        <select
          id="puntuacion"
          name="Puntuacion"
          value={libro.Puntuacion}
          onChange={(event)=>alCambiarValor(event.target.name,event.target.value)} >
            <option value="">Seleccionar...</option>
            <option value="1">1-Estrella</option>
            <option value="2">2-Estrella</option>
            <option value="3">3-Estrella</option>
            <option value="4">4-Estrella</option>
          </select>
      </div>
      <div>
      <button type="submit">Guardar</button>
      </div>
    </form>
    </>
  );
}

export default FormularioLibros;