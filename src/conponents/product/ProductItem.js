import React, { Component } from 'react';

class ProductItem extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const { productName, price } = this.props;
        return (
            <div>
                <p>{productName}</p>
                <p>{price}</p>
            </div>
        )
    }
}

export default ProductItem;