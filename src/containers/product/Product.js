import React, { Component } from 'react';

import Header from "../../conponents/Header";
import Footer from "../../conponents/Footer";
import ProductList from "../../conponents/product/ProductList";
import Axios from "axios";
import { withRouter } from 'react-router-dom';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = { products: null };
    }

    getData = async () => {
        let data = await Axios.get("http://127.0.0.1:3001/products");
        this.setState({ products: data.data });
    }

    deleteProduct = async (product) => {
        console.log(product);
        let data = await Axios.delete("http://127.0.0.1:3001/products/" + product.id);
        this.getOrders();
    }

    editProduct = async (product) => {
        this.props.history.push('products/edit/' + product.id);
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <h1>Products</h1>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-success float-right" onClick={() => this.props.history.push('products/add')}>Add</button>
                        </div>
                    </div>
                    <ProductList products={this.state.products} onDelete={this.deleteProduct} onEditProduct={this.editProduct} />
                </div>
                <Footer company="NITIRAT" email="nitirat.wo@gmail.com" />
            </div>
        );
    }
}

export default withRouter(Products);