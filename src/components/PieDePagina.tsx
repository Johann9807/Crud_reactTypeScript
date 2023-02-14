import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const PieDePagina = () => {
    return (
        <>
            <footer className="pie-pagina">
                <div className='grupo-1'>
                    <div className='box'>
                        <figure>
                        <h2 className="logo"><span>Book</span>shop</h2>
                        </figure>
                    </div>
                    <div className='box'>
                        <h2>Sobre Nosotros</h2>
                        <p>Te ofrecemos más de un millón de libros editados en España y dónde conseguirlos y comprarlos</p>
                        <p>buscador de libros de derecho, ciencias sociales, economía, empresa, historia y ciencias humanas.</p>
                    </div>
                    <div className='box'>
                        <h2>Siguenos</h2>
                        <div className='red-social'>
                        <button><FaFacebook /></button>
                        <button><FaInstagram /></button>
                        <button><FaTwitter /></button>
                        <button><FaYoutube /></button>
                        </div>
                    </div>
                </div>
                <div className='grupo-2'>
                    <small>&copy; 2023 <b>Johann Casallas</b> - Todos los Derechos Reservados</small>
                </div>
            </footer>
        </>
    )
}

export default PieDePagina
