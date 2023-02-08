import { Link } from "react-router-dom"
export const Menu = () =>{
  return(
    <div className="menu">
      <ul>
        <li><Link to="/">Libros</Link></li>
        <li><Link to="/materias">Usuario</Link></li>
        <li><Link to="/">Prestamo</Link></li>
      </ul>
      
      
      
      </div>
  )
}


