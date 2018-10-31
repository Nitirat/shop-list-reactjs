import React, { Component } from "react";

class Calculator extends Component {

    showOrder(orders) {
        if (!orders || orders.length == 0) {
            return <li className="text-right text-success">Not have order</li>
        } else {
            return orders.map((order, i) => {
                console.log(i);
                return (
                    <li className="text-right text-success" key={i}>
                        {order.product.productName} x {order.quantity} = {order.quantity * order.product.price}
                        <button className="btn btn-light btn-sm" onClick={() => this.props.onDeleteOrder(order.product)}>x</button>
                    </li>
                )
            });
        }
    }

    render() {

        const { totalPrice, orders } = this.props;

        return (
            <div>
                <h4 className="text-right">{totalPrice}</h4>
                <hr />
                <ul className="list-unstyled">
                    {this.showOrder(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-danger">Submit</button>
                <button className="btn btn-block btn-secondary">Cnacel</button>
            </div>
        )
    }
}

export default Calculator;