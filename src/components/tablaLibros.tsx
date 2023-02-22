import React, { FunctionComponent } from 'react'
import ILibro from '../modelos/Libro/entidades/ILibro';
import { 
  IconButton,
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow 
} 
from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export interface LibroPropiedadesTabla {
  libros: ILibro[];
  editarLibro: (id: string) => void;
  eliminarLibro: (id: string) => void;
  
}
export const TablaLibros: FunctionComponent <LibroPropiedadesTabla> = ({libros, editarLibro,  eliminarLibro}) => {

  const styles = {
    table: {
      minWidth: 650,
      width: "90%",
      border: "1px solid #24303c",
      borderRadius: "10px",
    },
    tableHeadCell: {
      fontWeight: 'normal',
      backgroundColor: '#24303c',
      color: '#ffff',
      border: 'none',
      borderLeft: "1px solid #b7e9ff",
      padding: '10px 10px 10px 70px',
    },
    tableBodyCell: {
      fontSize: '14px',
      backgroundColor: '#b7e9ff',
      border: "1px solid #24303c",
      fontWeight: 'normal',
      padding: '10px 10px 10px 50px'
      
    },
  };
  
  return (
    <>
    <TableContainer style={{
      margin: "10px 0px 0px 80px "}}>
      <Table style={styles.table
      }>
        <TableHead>
          <TableRow>
            <TableCell sx={{
              fontWeight: 'normal',
              backgroundColor: '#24303c',
              color: '#ffff',
              border: 'none',
              padding: '10px 10px 10px 70px',
              TextDecoder: 'none'
            }}>Nombre Libro</TableCell>
            <TableCell style={styles.tableHeadCell}>Nombre Autor</TableCell>
            <TableCell style={styles.tableHeadCell}>Genero</TableCell>
            <TableCell style={styles.tableHeadCell}>Editorial</TableCell>
            <TableCell style={styles.tableHeadCell}>Pokemon</TableCell>
            <TableCell style={styles.tableHeadCell}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {libros.length > 0 ? (
            libros.map((libro) => (
              <TableRow key={libro.IdLibro}>
                <TableCell style={styles.tableBodyCell}>{libro.NombreLibro}</TableCell>
                <TableCell style={styles.tableBodyCell}>{libro.AutorLibro}</TableCell>
                <TableCell style={styles.tableBodyCell}>{libro.Genero}</TableCell>
                <TableCell style={styles.tableBodyCell}>{libro.Editorial}</TableCell>
                <TableCell style={styles.tableBodyCell}><img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${libro.pokemon}.gif`} alt="pokemon" /></TableCell>
                <TableCell style={styles.tableBodyCell}>
                  <IconButton onClick={() => editarLibro(libro.IdLibro || "")}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => eliminarLibro(libro.IdLibro || "")}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell 
              colSpan={6} 
              align="center" 
              style={styles.tableBodyCell}>
                No hay libros disponibles
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  )
}


