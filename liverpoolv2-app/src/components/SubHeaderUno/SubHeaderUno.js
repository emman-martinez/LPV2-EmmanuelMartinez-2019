import React from 'react';

const SubHeaderUno = () => {
    return(
        <div className="subheaderuno">
            <div className="navegador">
                <div className="navegacion1">
                    <div className="departamentos">
                        <nav className="dep">
                            <ul>
                                <li>
                                    <a href="http://localhost:3000/">Departamentos</a>
                                </li>
                            </ul>
                        </nav>
                        <nav className="me-mi-se">
                            <ul>
                                <li>
                                    <a href="http://localhost:3000/">Mesa de regalos</a>
                                </li>
                                <li>
                                    <a href="http://localhost:3000/">Mi crédito</a>
                                </li>
                                <li>
                                    <a href="http://localhost:3000/">Seguros</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="navegacion2">
                    <div className="ayuda">
                        <nav>
                            <ul>
                                <li>
                                    <a href="http://localhost:3000/">Sorteo y Concursos</a>
                                </li>
                                <li>
                                    <a href="http://localhost:3000/">Ayuda</a>
                                </li>
                                <li>
                                    <a href="http://localhost:3000/">Tiendas</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubHeaderUno;