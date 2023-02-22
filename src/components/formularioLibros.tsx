import React from 'react';
import { FunctionComponent } from 'react';
import ILibro from '../modelos/Libro/entidades/ILibro';
import {
  FormControl,
  FormGroup,
  TextField,
  Checkbox,
  Button,
  Typography,
  Box,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { IPokemon } from '../modelos/pokemon/entidades/IPokemon';

interface LibroProps {
  alCambiarValor: (name: string, value: string) => void
  guardarLibro: () => void
  libro: ILibro
  limpiarFormulario: () => void
  isChecked: boolean
  pokemonList: IPokemon[]
  habilitarFormulario: () => void
}

const FormularioLibros: FunctionComponent<LibroProps> = ({ limpiarFormulario, alCambiarValor, guardarLibro, libro, isChecked, pokemonList, habilitarFormulario }) => {
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    guardarLibro()
    limpiarFormulario();
  };

  return (
    <>
      <Typography variant="h4" sx={{
        textAlign: 'center',
        paddingBottom: 3,
        paddingTop: 9,
        fontFamily: 'initial',
        color: '#24303c',
        fontSize: '24px'
      }}>
        Buscador Avanzado
      </Typography>
      <Box sx={{
      }}
        display="flex" justifyContent="center">
        <FormControl component="form" className="Form-libros" onSubmit={handleSubmit}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: '#1f53c5',
                    margin: '20px 5px 20px 100px',
                  }}
                  required
                  onClick={habilitarFormulario}
                  name="aceptaTerminos"
                  id="aceptaTerminos"
                />
              }
              label="Acepta los términos y condiciones"
            />
            <FormControl sx={{
              margin: '20px 5px 20px 0px',
              background: "#b7e9ff",
              border: 'none'
            }}>

              <InputLabel shrink={!!libro.pokemon}>Elije tu pokemon</InputLabel>
              <Select
                disabled={isChecked}
                labelId="pokemon-select-label"
                id="pokemon-select"
                value={libro.pokemon || ''}
                onChange={(event) => alCambiarValor(event.target.name, event.target.value)}
              >
                <MenuItem value="">Selecciona un Pokémon</MenuItem>
                {pokemonList.length > 0 &&
                  pokemonList.map((pokemon) => (
                    <MenuItem key={pokemon.id} value={pokemon.name}>
                      {pokemon.name}
                    </MenuItem>
                  ))
                }
              </Select>

            </FormControl>


            <TextField
              InputProps={{
                style: {
                  color: "#1f53c5",
                  margin: "0 0 26px 0",
                  width: "500px",
                  height: "55px",
                  background: "#b7e9ff",
                },
              }}
              required
              disabled={isChecked}
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
                  margin: "0 0 26px 0",
                  width: "500px",
                  height: "55px",
                  background: "#b7e9ff",
                },
              }}
              required
              disabled={isChecked}
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
                  margin: "0 0 26px 0",
                  width: "500px",
                  height: "55px",
                  background: "#b7e9ff",
                },
              }}
              required
              disabled={isChecked}
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
                  margin: "0 0 26px 0",
                  width: "500px",
                  height: "55px",
                  background: "#b7e9ff",
                },
              }}
              required
              disabled={isChecked}
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
              padding: "20px",
              marginRight: "10px",
              textAlign: "center"
            }}
          >
            Para que la búsqueda sea más precisa rellene el máximo <br />
            número de campos posibles.
          </Typography>

          <Button variant="contained"
            color="primary"
            type="submit" sx={{
              width: "150px",
              height: "50px",
              margin: "23px 0 36px 180px"
            }}>
            Guardar
          </Button>
        </FormControl>
      </Box>



    </>
  );
}

export default FormularioLibros;

