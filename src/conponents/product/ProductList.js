import React, { Component } from "react";
import ProdcutItem from "./ProductItem";

class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    showProducts() {
        return this.props.products && this.props.products.map(product => (
            <ProdcutItem key={product.productId} {...product} />
        ));
    }

    render() {
        return (
            <div className="row">
                {this.showProducts()}
            </div>
        )
    }
}

export default ProductList;
