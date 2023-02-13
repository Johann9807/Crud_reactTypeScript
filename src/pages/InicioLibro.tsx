import { useState } from "react";
import FormularioLibros from "../components/formularioLibros";
import { Menu } from "../components/Menu";
import { TablaLibros } from "../components/tablaLibros";
import ILibro from "../entidades/ILibro";
import { v4 as uuidv4 } from 'uuid';
import InicioUsuarios from "./InicioUsuario";
import InicioPrestamo from "./InicioPrestamo";

const estadoInicial: ILibro = {
  IdLibro: '',
  NombreLibro: '',
  AutorLibro: '',
  Genero: '',
  Editorial: ''
}

export const InicioLibro = () => {
  const [libro, setLibro] = useState<ILibro>(estadoInicial);
  const [listaLibros, setListaLibros] = useState<ILibro[]>([]);
  const [abrirAdministracionlibro, setAdministracionLibro] = useState<boolean>(true);
  const [abrirAdministracionUsuario, setAdministracionUsuario] = useState<boolean>(false);
  const [abrirAdministracionPrestamo, setAdministracionPrestamo] = useState<boolean>(false);
  


  const alCambiarValor = (name: string, value: string) => {
    setLibro({
      ...libro,
      [name]: value
    });
  };

  const guardarLibro = () => {
    let lista = [...listaLibros]
    let nuevoLibro = { ...libro, IdLibro: uuidv4() };
    lista.push(nuevoLibro);
    setListaLibros(lista);
  }
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

  return (
    <>
      <Menu irAdministracionLibro={irAdministracionLibro} irAdministracionUsuario={irAdministracionUsuario} irAdministracionPrestamo={irAdministracionPrestamo}/>
      {abrirAdministracionlibro && (

        <><FormularioLibros alCambiarValor={alCambiarValor} guardarLibro={guardarLibro} libro={libro} limpiarFormulario={limpiarFormulario} /><TablaLibros libros={listaLibros} /></>

      )}

      {abrirAdministracionUsuario && (
        <InicioUsuarios/>
        )}
      {abrirAdministracionPrestamo && (
        <InicioPrestamo/>
        )}
      
    </>
  )
}
