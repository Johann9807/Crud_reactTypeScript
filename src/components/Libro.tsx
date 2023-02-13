import { FunctionComponent, useState } from "react";
import ILibro from "../entidades/ILibro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


interface LibroPropiedades {
    libro: ILibro;
    onEdit: (libro: ILibro) => void;
}

export const Libro: FunctionComponent<LibroPropiedades> = ({ libro, onEdit }) => {
    const [editarTabla, setEditarTabla] = useState(false);
    const [nombre, setNombre] = useState(libro.NombreLibro);
    const [autor, setAutor] = useState(libro.AutorLibro);
    const [genero, setGenero] = useState(libro.Genero);
    const [editorial, setEditorial] = useState(libro.Editorial);

    const manejarEditarClic = () => {
        setEditarTabla(true);
    };
    const manejarGuardarClic = () => {
        onEdit({
            ...libro,
            NombreLibro: nombre,
            AutorLibro: autor,
            Genero: genero,
            Editorial: editorial
        });
        setEditarTabla(false);
    };
   

    if (editarTabla) {
        return (
            <tr>
                <td><input type="text" value={nombre} onChange={e => setNombre(e.target.value)} /></td>
                <td><input type="text" value={autor} onChange={e => setAutor(e.target.value)} /></td>
                <td><input type="text" value={genero} onChange={e => setGenero(e.target.value)} /></td>
                <td><input type="text" value={editorial} onChange={e => setEditorial(e.target.value)} /></td>
                <td>
                    <button className="button-guardar" onClick={manejarGuardarClic}>
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                    <button className="button-cancelar" onClick={() => setEditarTabla(false)}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                </td>
            </tr>
        );
    }

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