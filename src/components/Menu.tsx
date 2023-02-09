import React, { FunctionComponent } from 'react';
interface IPropiedadesMenu{
irAdministracionLibro:()=>void;
irAdministracionUsuario:() => void; 
irAdministracionPrestamo:() => void
}

   export const Menu:FunctionComponent<IPropiedadesMenu> = ({irAdministracionLibro,irAdministracionUsuario,irAdministracionPrestamo}) =>{
  return(
    <div className="container">
      <nav>
      <h2 className="logo"><span>Book</span>shop</h2>
      <ul>
      <button className="button-menu" type="button" onClick={irAdministracionLibro}>Libros</button>
      <button className="button-menu" type="button" onClick={irAdministracionUsuario}>Usuarios</button>
      <button className="button-menu" type="button" onClick={irAdministracionPrestamo}>Prestamo</button>
      </ul>
      <button className="button-login" type="button">Login</button>
      </nav>
    </div>
  )
}


