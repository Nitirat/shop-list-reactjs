import React, { Component } from 'react';

import Header from "../../conponents/Header";
import Footer from "../../conponents/Footer";
import ProductList from "../../conponents/product/ProductList";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { productsFetch, productDelete } from '../../actions';

class Products extends Component {

    constructor(props) {
        super(props);
    }

    deleteProduct = (product) => {
        this.props.productDelete(product.id);
    }

    editProduct = (product) => {
        this.props.history.push('products/edit/' + product.id);
    }

    componentDidMount() {
        this.props.productsFetch();
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
                    <ProductList products={this.props.products} onDelete={this.deleteProduct} onEditProduct={this.editProduct} />
                </div>
                <Footer company="NITIRAT" email="nitirat.wo@gmail.com" />
            </div>
        );
    }
}

function mapStateToProps({ products }) {
    return { products }
}

export default withRouter(connect(mapStateToProps, {productsFetch, productDelete})(Products));