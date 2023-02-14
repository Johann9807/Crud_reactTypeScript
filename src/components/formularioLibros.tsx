import  { FunctionComponent, useState } from 'react';
import ILibro from '../entidades/ILibro';


interface LibroProps {
  alCambiarValor : (name : string, value : string) => void
  guardarLibro : () => void
  libro : ILibro
  limpiarFormulario : () => void
}


const  FormularioLibros: FunctionComponent <LibroProps> = ({limpiarFormulario,alCambiarValor, guardarLibro,libro  }) => {
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();  
    guardarLibro() 
    limpiarFormulario();
    
  };

  const [isChecked, setIsChecked] = useState(false);
  
  

  return (
    <>
    <form className='Form-libros' onSubmit={handleSubmit}>
      <h4>Buscador Avanzado</h4>
      <div>
        <p className='ipt-check'><input  required type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} /> Acepta los terminos y condiciones</p>
        
        <label htmlFor="nombreLibro">Titulo: </label>
        <input className="ipt-nombre" required disabled={!isChecked}
          type="text"
          id="nombreLibro"
          name="NombreLibro"
          value={libro.NombreLibro}
          onChange={(event)=>alCambiarValor(event.target.name,event.target.value)} />
      </div>
      <div>
        <label htmlFor="autorLibro">Autor: </label>
        <input className="ipt-nombre"  required disabled={!isChecked}
          type="text"
          id="autorLibro"
          name="AutorLibro"
          value={libro.AutorLibro}
          onChange={(event)=>alCambiarValor(event.target.name,event.target.value)} />
      </div>
      <div>
      <label htmlFor="Editorial">Genero: </label>
        <input className="ipt-nombre" required  disabled={!isChecked} minLength={5} maxLength={30}
          type="text"
          id="genero"
          name="Genero"
          value={libro.Genero}
          onChange={(event)=>alCambiarValor(event.target.name,event.target.value)} />
      </div>
      <div>
      <label htmlFor="editorial">Editorial: </label>
        <input className="ipt-nombre" required disabled={!isChecked}
          type="text"
          id="editorial"
          name="Editorial"
          value={libro.Editorial}
          onChange={(event)=>alCambiarValor(event.target.name,event.target.value)} />
      </div>
      <p>Para que la búsqueda sea más precisa rellene el máximo número de campos posibles.</p>
      <div className='boton' >
      <button type="submit">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Guardar</button>
      
      </div>
    </form>
    </>
  );
}

export default FormularioLibros;

