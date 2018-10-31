import React, { Component } from "react";
import Calculator from "./Calculator";
import ProductList from "./product/ProductList";

class Monitor extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <ProductList products={this.props.products}/>
                    </div>
                    <div className="col-2">
                        <Calculator />
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor;