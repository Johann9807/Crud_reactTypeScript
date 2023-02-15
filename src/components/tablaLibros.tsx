import React, { FunctionComponent } from 'react'
import ILibro from '../entidades/ILibro';
import { Libro } from './Libro';


export interface LibroPropiedadesTabla {
  libros: ILibro[];
  editarLibro: (id: string) => void;
  eliminarLibro: (id: string) => void;
  
}
export const TablaLibros: FunctionComponent <LibroPropiedadesTabla> = ({libros, editarLibro,  eliminarLibro}) => {

  return (
    <div className='table-container'>
    <span></span>
      {
        
        libros.length > 0 ? (
      
      <table className='table'>
        <thead>
        <tr>
            <th>Nombre Libro </th>
            <th>Nombre Autor </th>
            <th>Genero </th>
            <th>Editorial </th>
            <th>Acciones </th>
        </tr>
        </thead>
        <tbody>
        {
          libros.map((libro: ILibro) => 
          <Libro key={libro.IdLibro} 
          libro={libro} 
          editarLibro={editarLibro}
          eliminarLibro={eliminarLibro}
          />
          
          )
        }
        </tbody>
      </table>
      ): (
        <p></p>
      )
    }
    </div>
  )
}


