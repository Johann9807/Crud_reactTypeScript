import { FunctionComponent } from "react";
import ILibro from "../entidades/ILibro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


interface LibroPropiedades {
    libro: ILibro;
    onEdit: (libro: ILibro) => void;

}

export const Libro: FunctionComponent<LibroPropiedades> = ({ libro, onEdit }) => {
    const nombre = (libro.NombreLibro);
    const autor= (libro.AutorLibro);
    const genero = (libro.Genero);
    const editorial = (libro.Editorial);

    const manejarEditarClic = () => {
        onEdit({
            ...libro,
            NombreLibro: nombre,
            AutorLibro: autor,
            Genero: genero,
            Editorial: editorial
        });
    };
   
    

    return (
        <tr>
            <td>{libro.NombreLibro}</td>
            <td>{libro.AutorLibro}</td>
            <td>{libro.Genero}</td>
            <td>{libro.Editorial}</td>
            <td>
                <button className="button-editar" onClick={manejarEditarClic}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
            </td>
        </tr>
    );
};