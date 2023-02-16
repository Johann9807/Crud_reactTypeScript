import React from 'react';
import { FunctionComponent, useState } from 'react';
import ILibro from '../entidades/ILibro';
import {
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Checkbox,
  Button,
  Typography,
  Box
} from '@mui/material';
import { width } from '@mui/system';


interface LibroProps {
  alCambiarValor: (name: string, value: string) => void
  guardarLibro: () => void
  libro: ILibro
  limpiarFormulario: () => void
}


const FormularioLibros: FunctionComponent<LibroProps> = ({ limpiarFormulario, alCambiarValor, guardarLibro, libro }) => {
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    guardarLibro()
    limpiarFormulario();

  };

  const [isChecked, setIsChecked] = useState(false);



  return (
    <>
      <Typography variant="h4" sx={{
        textAlign: 'center',
        paddingBottom: 3,
        paddingTop: 9,
        fontFamily: 'initial',
        color: '#24303c'
      }}>
        Buscador Avanzado
      </Typography>
      <Box display="flex" justifyContent="center">
        <FormControl component="form" className="Form-libros" onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel sx={{
              paddingBottom: 3,
              paddingTop: 1,
              textAlign: 'center'
            }}
              htmlFor="aceptaTerminos">
              <Checkbox
                sx={{
                  color: '#1f53c5'
                }}
                required
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                name="aceptaTerminos"
                id="aceptaTerminos"
              />Acepta los terminos y condiciones
            </FormLabel>


            <TextField
              InputProps={{
                style: {
                  color: "#1f53c5",
                  margin: "0 0 26px 0"
                },
              }}
              required
              disabled={!isChecked}
              type="text"
              id="nombreLibro"
              name="NombreLibro"
              label="Titulo"
              value={libro.NombreLibro}
              onChange={(event) => alCambiarValor(event.target.name, event.target.value)}
            />

            <TextField
              InputProps={{
                style: {
                  color: "#1f53c5",
                  margin: "0 0 26px 0"
                },
              }}
              required
              disabled={!isChecked}
              type="text"
              id="autorLibro"
              name="AutorLibro"
              label="Autor"
              value={libro.AutorLibro}
              onChange={(event) => alCambiarValor(event.target.name, event.target.value)}
            />

            <TextField
              InputProps={{
                style: {
                  color: "#1f53c5",
                  margin: "0 0 26px 0"
                },
              }}
              required
              disabled={!isChecked}
              type="text"
              id="genero"
              name="Genero"
              label="Genero"
              value={libro.Genero}
              onChange={(event) => alCambiarValor(event.target.name, event.target.value)}
            />

            <TextField
              InputProps={{
                style: {
                  color: "#1f53c5",
                  margin: "0 0 26px 0"
                },
              }}
              required
              disabled={!isChecked}
              type="text"
              id="editorial"
              name="Editorial"
              label="Editorial"
              value={libro.Editorial}
              onChange={(event) => alCambiarValor(event.target.name, event.target.value)}
            />
          </FormGroup>
          <Typography 
          variant="body1"
          sx={{
            paddingTop: 3,
            paddingBottom: 5,
          }}
          >
            Para que la búsqueda sea más precisa rellene el máximo número de campos posibles.
          </Typography>
          <Button variant="contained" color="primary" type="submit">
            Guardar
          </Button>
        </FormControl>
      </Box>
    </>
  );
}

export default FormularioLibros;

