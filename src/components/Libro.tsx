import React from 'react';
import { FunctionComponent } from "react";
import ILibro from "../entidades/ILibro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


interface LibroPropiedades {
    libro: ILibro;
    editarLibro: (id: string) => void;
    eliminarLibro: (id: string) => void;

}

export const Libro: FunctionComponent<LibroPropiedades> = ({ libro, editarLibro, eliminarLibro }) => {

    return (
        <tr>
            <td>{libro.NombreLibro}</td>
            <td>{libro.AutorLibro}</td>
            <td>{libro.Genero}</td>
            <td>{libro.Editorial}</td>
            <td>
                <button className="button-editar" onClick={_ => editarLibro(libro.IdLibro || "")}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="button-eliminar" onClick={_ => eliminarLibro(libro.IdLibro || "")}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    );
};