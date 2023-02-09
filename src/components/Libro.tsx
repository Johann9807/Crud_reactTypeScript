import { FunctionComponent } from "react";
import ILibro from "../entidades/ILibro";

interface LibroPropiedades {
    libro: ILibro;
}

export const Libro: FunctionComponent<LibroPropiedades> = ({libro}) => {

    return(
        <tr>
            <td>{libro.NombreLibro}</td>
            <td>{libro.AutorLibro}</td>
            <td>{libro.Genero}</td>
            <td>{libro.Editorial}</td>
        </tr>
    )
} 