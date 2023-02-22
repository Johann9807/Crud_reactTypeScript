import { useEffect, useState } from "react";
import FormularioLibros from "../components/formularioLibros";
import { Menu } from "../components/Menu";
import { TablaLibros } from "../components/tablaLibros";
import ILibro from "../modelos/Libro/entidades/ILibro";
import { v4 as uuidv4 } from 'uuid';
import InicioUsuarios from "./InicioUsuario";
import InicioPrestamo from "./InicioPrestamo";
import React from 'react';
import PieDePagina from "../components/PieDePagina";

import { IPokemon } from "../modelos/pokemon/entidades/IPokemon";
import consultarCaratulas from "../modelos/Libro";


const estadoInicial: ILibro = {
  IdLibro: '',
  NombreLibro: '',
  AutorLibro: '',
  Genero: '',
  Editorial: '',
  pokemon: '',
}

export const InicioLibro = () => {
  const [libro, setLibro] = useState<ILibro>(estadoInicial);
  const [listaLibros, setListaLibros] = useState<ILibro[]>([]);
  const [abrirAdministracionlibro, setAdministracionLibro] = useState<boolean>(true);
  const [abrirAdministracionUsuario, setAdministracionUsuario] = useState<boolean>(false);
  const [abrirAdministracionPrestamo, setAdministracionPrestamo] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(true);
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  useEffect(() => {
    const obtenerPokemon = async () => {
      const pokemonData = await consultarCaratulas();
      setPokemonList(pokemonData);
    }
    obtenerPokemon();
  }, []);


const habilitarFormulario = () =>{
  setIsChecked(!isChecked)
}

  
const alCambiarValor = (name: string, value: string) => {
  let pokemonSeleccionado = pokemonList.find(pokemon => pokemon.name === value);

  setLibro({
    ...libro,
    [name]: pokemonSeleccionado ? pokemonSeleccionado.id : value,
    pokemon: pokemonSeleccionado ? value : libro.pokemon
  });
};


  
const guardarLibro = () => {
    let lista = [...listaLibros];
    let nuevoLibro = { ...libro, IdLibro: libro.IdLibro || uuidv4() };
    const indice = lista.findIndex((l) => l.IdLibro === nuevoLibro.IdLibro);
    if (indice === -1) {
      lista.push(nuevoLibro);
    } else {
      lista[indice] = nuevoLibro;
    }
    setListaLibros(lista);
  };

  const limpiarFormulario = () => {
    setLibro(estadoInicial)
  }
  const irAdministracionLibro = () => {
    setAdministracionLibro(true);
    setAdministracionUsuario(false);
    setAdministracionPrestamo(false);
  }

  const irAdministracionUsuario = () => {
    setAdministracionLibro(false);
    setAdministracionUsuario(true);
    setAdministracionPrestamo(false);
  }

  const irAdministracionPrestamo = () => {
    setAdministracionLibro(false);
    setAdministracionUsuario(false);
    setAdministracionPrestamo(true)
  }

  const editarLibro = (idLibro: string) => {
    let libroAEditar = listaLibros.find((libro) => libro.IdLibro === idLibro);
    if (libroAEditar) {
      setLibro(libroAEditar);
    }
  };
 
  const eliminarLibro = (id: string) => {
    setListaLibros(listaLibros.filter((libro) => libro.IdLibro !== id));
  };

  return (
    <>
      <Menu irAdministracionLibro={irAdministracionLibro} irAdministracionUsuario={irAdministracionUsuario} irAdministracionPrestamo={irAdministracionPrestamo}/>
      {abrirAdministracionlibro && (

        <>
        <FormularioLibros alCambiarValor={alCambiarValor} guardarLibro={guardarLibro} libro={libro} limpiarFormulario={limpiarFormulario} 
        isChecked={isChecked}
        habilitarFormulario={habilitarFormulario}
        pokemonList={pokemonList}
        />
        <TablaLibros libros={listaLibros} editarLibro={editarLibro}  eliminarLibro={eliminarLibro}/>
        </>

      )}

      {abrirAdministracionUsuario && (
        <><InicioUsuarios />
        </>
        )}
      {abrirAdministracionPrestamo && (
        <>
        <InicioPrestamo/>
        </>
        )}
        <PieDePagina/>      
    </>
  )
}
