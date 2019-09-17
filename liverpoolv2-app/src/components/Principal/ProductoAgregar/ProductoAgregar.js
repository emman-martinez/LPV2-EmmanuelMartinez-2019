import React from 'react';

const ProductoAgregar = () => {
    return(
        <div className="producto-agregar">
            <form action="">
                <div className="fecha">
                    <select name="" id="">
                        <option value=""> Fecha estimada de entrega: </option>
                        <option value="">Uno</option>
                        <option value="">Dos</option>
                        <option value="">Tres</option>
                        <option value="">Cuatro</option>
                        <option value="">Cinco</option>
                        <option value="">Seis</option>
                    </select>
                </div>
                <div className="disponibilidad">
                    <select name="" id="">
                        <option value="">Disponibilidad: </option>
                        <option value="">Uno</option>
                        <option value="">Dos</option>
                        <option value="">Tres</option>
                        <option value="">Cuatro</option>
                        <option value="">Cinco</option>
                        <option value="">Seis</option>
                    </select>
                </div>
                <div className="cantidad">
                    <p>Cantidad:</p>
                    <div className="seleccion-boton">
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6+</option>
                        </select>
                        <button type="submit">Agregar a mi bolsa</button>
                    </div>
                </div>
                <br/>
                <hr/>
            </form>
        </div>
    );
}

export default ProductoAgregar;