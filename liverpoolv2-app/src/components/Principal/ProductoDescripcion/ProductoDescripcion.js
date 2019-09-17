import React from 'react';

const ProductoDescripcion = () => {
    return(
        <div className="producto-descripcion">
            <h3>Consola PlayStation 4 Days of Play 1 TB</h3>
            <p>Código de Producto: 1084706741</p>
            <h4>Raiting <p>4 Opiniones</p></h4>
            <hr/>
            <p>$8,299.00</p>
            <p>$7,469.10</p>
            <p>Color: GRIS ACERO</p>
            <div className="circulo">
                <div className="circulo-interno"></div>
            </div>
            <p>Talla:</p>
            <div className="tamano">
                <p>1 TB</p>
            </div>
            <br/>
            <div className="icono">
                <i className="fas fa-share-alt"> <p>Compartir</p></i>
            </div>
        </div>
    );
}

export default ProductoDescripcion;