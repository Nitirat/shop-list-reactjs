import React, { Component } from 'react';
import Header from '../../conponents/Header';
import Footer from '../../conponents/Footer';
import ProductForm from '../../conponents/product/ProductForm';

class ProductEdit extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container col-md-5">
                    <ProductForm />
                </div>
                <Footer company="NITIRAT" email="nitirat.wo@gmail.com" />
            </div>
        )
    }
}



export default ProductEdit;