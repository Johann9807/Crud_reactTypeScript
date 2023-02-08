import { useEffect, useState } from "react";
import FormularioLibros from "../components/formularioLibros";
import { Menu } from "../components/Menu";
import { TablaLibros } from "../components/tablaLibros";
import ILibro from "../entidades/ILibro";

const estadoInicial: ILibro ={
    IdLibro: '',
    NombreLibro: '',
    AutorLibro: '',
    Genero: '',
    Puntuacion: 0
  }

  

export const InicioLibro = () => {
  const [libro, setLibro] = useState<ILibro>(estadoInicial);
  const [listaLibros, setListaLibros] = useState<ILibro[]>([]);

//   useEffect(() => {
//     setListaLibros(listaLibros);
//   }, [listaLibros])

    const alCambiarValor = ( name: string, value: string) => {
        setLibro({
          ...libro,
          [name]: value
        });
      };

    const guardarLibro =() => {
        let lista = [...listaLibros]
        lista.push(libro)
   setListaLibros(lista);
   console.log(lista);
    }
    const  limpiarFormulario = () => {
        setLibro(estadoInicial)
      }

    return(
        <>
        <Menu />
        <FormularioLibros alCambiarValor={alCambiarValor} guardarLibro={guardarLibro} libro={libro} limpiarFormulario={limpiarFormulario} />
        <TablaLibros libros={listaLibros} />
        </>
    )
}
