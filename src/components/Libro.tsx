import React from 'react';
import { FunctionComponent } from "react";
import ILibro from "../entidades/ILibro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


interface LibroPropiedades {
    libro: ILibro;
    onEdit: (libro: ILibro) => void;
    onDelete: (id: string) => void;

}

export const Libro: FunctionComponent<LibroPropiedades> = ({ libro, onEdit, onDelete }) => {
    const nombre = (libro.NombreLibro);
    const autor = (libro.AutorLibro);
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


    const manejarEliminarClic = () => {
        onDelete(libro.IdLibro  ? libro.IdLibro : "");
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
                <button className="button-eliminar" onClick={manejarEliminarClic}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    );
};