import { FunctionComponent, useState } from "react";
import ILibro from "../entidades/ILibro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


interface LibroPropiedades {
    libro: ILibro;
    onEdit: (libro: ILibro) => void;
}

export const Libro: FunctionComponent<LibroPropiedades> = ({libro, onEdit}) => {
    const [editarTabla, setEditarTabla] = useState(false);

    const manejarEditarClic = () => {
        setEditarTabla(true);
    };

    if (editarTabla) {
    return(
        <tr>
            <td><input type="text" value={libro.NombreLibro} /></td>
            <td><input type="text" value={libro.AutorLibro} /></td>
            <td><input type="text" value={libro.Genero} /></td>
            <td><input type="text" value={libro.Editorial} /></td>
            <td>
                <button className="button-guardar" onClick={() => {
                    onEdit({
                        ...libro,
                        NombreLibro: "Nuevo Nombre Libro",
                        AutorLibro: "Nuevo Nombre Autor",
                        Genero: "Nuevo Genero",
                        Editorial: "Nueva Editorial"
                    });
                    setEditarTabla(false);
                }}>
                    <FontAwesomeIcon icon={faSave} />
                </button>
                <button className="button-cancelar" onClick={() => setEditarTabla(false)}>
                <FontAwesomeIcon icon={faTimesCircle} /> 
                </button>
            </td>
        </tr>
    );
}

return(
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