import React from 'react';
import ProductoImg from './ProductoImg/ProductoImg';
import ProductoDescripcion from './ProductoDescripcion/ProductoDescripcion';
import ProductoAgregar from './ProductoAgregar/ProductoAgregar';

const Principal = () => {
    return(
        <div className="principal">
            { /* Componente: ProductoImg */ }
            { console.log('...ProductoImg...') }
            <ProductoImg/>
            { /* Componente: ProductoDescripcion */ }
            { console.log('...ProductoDescripcion...') }
            <ProductoDescripcion/>
            { /* Componente: ProductoAgregar */ }
            { console.log('...ProductoAgregar...') }
            <ProductoAgregar/>
        </div>
    );
}

export default Principal;