import React, { Component } from "react";
import Calculator from "./Calculator";
import ProductList from "./product/ProductList";
import Axios from "axios";

class Monitor extends Component {

    constructor(props) {
        super(props);
        this.state = { totalPrice: 0, orders: [] };
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
    }

    addOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.productId == product.productId);
        if (findOrder) {
            findOrder.quantity++;
        } else {
            this.state.orders.push({ product: product, quantity: 1 });
        }
        const totalPrice = this.state.totalPrice + parseInt(product.price);
        this.setState({ totalPrice: totalPrice, orders: this.state.orders });
    }

    delOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.productId == product.productId);
        let resultOrder = this.state.orders.filter(order => order.product.productId != product.productId);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.price));
        this.setState({ totalPrice: totalPrice, orders: resultOrder });
    }

    cancelOrder = () => {
        this.setState({ totalPrice: 0, orders: [] });
    }

    submitOrder = async () => {
        const {totalPrice, orders} = this.state;
        await Axios.post("http://127.0.0.1:3001/orders", { orderedDate: new Date(), totalPrice, orders});
        this.setState({ totalPrice: 0, orders: [] });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-2">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onSubmitOrder={this.submitOrder} onCancelOrder={this.cancelOrder} onDeleteOrder={this.delOrder} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor;