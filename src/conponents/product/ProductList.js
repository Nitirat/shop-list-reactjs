import React, { Component } from "react";
import ProdcutItem from "./ProductItem";

class ProductList extends Component {

    showProducts() {
        return this.props.products && this.props.products.map(product => (
            <ProdcutItem key={product.id} product={product} onAddOrder={this.props.onAddOrder} onDelete={this.props.onDelete} onEditProduct={this.props.onEditProduct}/>
        ));
    }

    render() {
        return (
            <div className="row">
                {this.props.products && Array.isArray(this.props.products) && (
                    this.showProducts()
                )}
            </div>
        )
    }
}

export default ProductList;
