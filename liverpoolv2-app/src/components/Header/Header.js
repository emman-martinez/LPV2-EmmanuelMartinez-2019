import React from 'react';
import logo from './../../img/liverpool-logo.svg';
import bolsa from './../../img/bag.png';

const Header = () => {
    return(
        <div className="header">
            <div className="contenedor">
                <div className="imagen-buscador">
                    <div className="logo">
                        <img src={logo} alt="liverpool"/>
                    </div>
                    <div className="buscador">
                        <form action="#">
                            <input type="text" className="busqueda" placeholder="Buscar..."/>                            
                            <button type="submit">
                                <i className="icono fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="navegador">
                    <nav className="navegacion">
                        <ul>
                            <li><a href="http://localhost:3000/">Mis Pedidos</a></li>
                            <li><a href="http://localhost:3000/">Iniciar Sesión</a></li>
                            <li><a href="http://localhost:3000/"><img src={bolsa} alt="bolsa"/></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;