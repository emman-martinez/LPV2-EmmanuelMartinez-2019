import React, { Component } from 'react';
import Main from './../../templates/Main/Main';
import Header from './../../components/Header/Header'; 
import SubHeaderUno from './../../components/SubHeaderUno/SubHeaderUno';
import SubHeaderDos from './../../components/SubHeaderDos/SubHeaderDos';
import Principal from './../../components/Principal/Principal';

class ProductDetailPage extends Component {

    render() {
        return (
            <Main>
                { /* Componente: Header */ }
                { console.log('Header...') }
                <Header/>
                { /* Componente: SubHeaderUno */ }
                { console.log('...SubHeaderUno...') }
                <SubHeaderUno/>
                { /* Componente: SubHeaderDos */ }
                { console.log('...SubHeaderDos...') }
                <SubHeaderDos/>
                { /* Componente: Principal */ }
                { console.log('...Principal...') }
                <Principal/>
            </Main>
        );
    }
}

export default ProductDetailPage;
