import React, { Component } from 'react';

class ProductItem extends Component {

    buyClick(param) {
        console.log(param.target.value);
    }

    render() {
        const { productName, price, thumbnail } = this.props.product;
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <p className=" mt-1">{productName}</p>
                <p className="text-right">{price} THB</p>

                {
                    this.props.onAddOrder &&
                    <button className="btn btn-block btn-secondary" onClick={() => this.props.onAddOrder(this.props.product)}>Buy</button>
                }

                {   this.props.onDelete &&
                    <button className="btn col-5 btn-info" onClick={() => this.props.onEditProduct(this.props.product)}>Edit</button>
                }

                {   this.props.onDelete &&
                    <button className="btn col-5 float-right btn-danger" onClick={() => this.props.onDelete(this.props.product)}>Delete</button>
                }
                <hr />
            </div>
        )
    }
}

export default ProductItem;