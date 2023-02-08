import React, { FunctionComponent } from 'react'
import ILibro from '../entidades/ILibro';
import { Libro } from './Libro';

// export const getlistaLibros = () => {
//   if (!localStorage["Libro"]) {
//       localStorage["Libro"] = JSON.stringify([]);
//   }

//   let libro = JSON.parse(localStorage["Libro"])
//   return libro;
// }

export interface LibroPropiedadesTabla {
  libros: ILibro[];
}

export const TablaLibros: FunctionComponent <LibroPropiedadesTabla> = ({libros}) => {
  // const [libros, setLibro] = useState([]);

  return (
    <div>
      {
        libros.length > 0 ? (
        
      <table className='tablaLibro'>
        <thead>
        <tr>
          <th>Nombre Libro </th>
          <th>Nombre Autor </th>
          <th>Genero </th>
          <th>Puntuacion </th>
        </tr>
        </thead>
        <tbody>
        {
          libros.map((libro: ILibro) => 
          <Libro key={libro.IdLibro} libro={libro} /> 
          
          )
        }
        </tbody>
      </table>
      ): (
        <p>no hay libros</p>
      )
    }
    </div>
  )
}


