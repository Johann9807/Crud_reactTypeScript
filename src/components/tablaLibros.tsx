import React, { FunctionComponent } from 'react'
import ILibro from '../modelos/Libro/entidades/ILibro';
import { Libro } from './Libro';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow 
} 
from '@mui/material';


export interface LibroPropiedadesTabla {
  libros: ILibro[];
  editarLibro: (id: string) => void;
  eliminarLibro: (id: string) => void;
  
}
export const TablaLibros: FunctionComponent <LibroPropiedadesTabla> = ({libros, editarLibro,  eliminarLibro}) => {

  return (
    <>
    <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nombre Libro</TableCell>
          <TableCell>Nombre Autor</TableCell>
          <TableCell>Genero</TableCell>
          <TableCell>Editorial</TableCell>
          <TableCell>Pokemon</TableCell>
          <TableCell>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          libros.length > 0 ?
          (
            libros.map((libro: ILibro) => 
              <Libro key={libro.IdLibro} 
                libro={libro} 
                editarLibro={editarLibro}
                eliminarLibro={eliminarLibro}
              />
            )
          ) :
          (
            <TableRow>
              <TableCell colSpan={5} align="center">
              </TableCell>
            </TableRow>
          )
        }
      </TableBody>
    </Table>
  </TableContainer>
  </>
  )
}


