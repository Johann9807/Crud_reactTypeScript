import React, { FunctionComponent } from 'react'
import ILibro from '../entidades/ILibro';
import { Libro } from './Libro';


export interface LibroPropiedadesTabla {
  libros: ILibro[];
  onEdit: (libro: ILibro) => void;
}
export const TablaLibros: FunctionComponent <LibroPropiedadesTabla> = ({libros, onEdit}) => {

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
            <th>Editar </th>
        </tr>
        </thead>
        <tbody>
        {
          libros.map((libro: ILibro) => 
          <Libro key={libro.IdLibro} 
          libro={libro} 
          onEdit={onEdit} />
          
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


