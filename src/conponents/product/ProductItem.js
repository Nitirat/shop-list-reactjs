import React, { Component } from 'react';

class ProductItem extends Component {

    buyClick(param){
        console.log(param.target.value);
    }

    render() {
        const { productName, price, thumbnail } = this.props.product;
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <p className=" mt-1">{productName}</p>
                <p className="text-right">{price} THB</p>
                <button className="btn btn-block btn-secondary" onClick={() => this.props.onAddOrder(this.props.product)}>Buy</button>
                <hr />
            </div>
        )
    }
}

export default ProductItem;