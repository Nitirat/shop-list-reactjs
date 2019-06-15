import React, { Component } from 'react';

import Header from "../../conponents/Header";
import Footer from "../../conponents/Footer";
import Axios from "axios";

class Orders extends Component {

    constructor(props){
        super(props);
        this.state = {order:null}
    }

    componentDidMount(){
        this.getOrders();
    }

    getOrders = async () => {
        let data = await Axios.get("http://127.0.0.1:3001/orders");
        this.setState({order : data.data});
    }

    deleteOrder = async (order) => {
        let data = await Axios.delete("http://127.0.0.1:3001/orders/"+ order.id);
        this.getOrders();
    }

    showOrders(){
        return this.state.order && this.state.order.map(order => {
            const date = new Date(order.orderedDate);
            return (
                <div key={order.id} className="col-md-3">
                    <hr />
                    <p>
                        <button className="btn btn-danger btn-sm" onClick={() => this.deleteOrder(order)}>X</button>
                    </p>
                    <h5>Date : {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map(record => {
                            return(
                                <li key={record.product.productId}>
                                    {record.product.productName} x {record.quantity} = {record.product.price * record.quantity}
                                </li>
                            );
                        })}
                    </ul>
                    <p>
                        Total : {order.totalPrice}
                    </p>
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                <Header />
                    <div className="container-fluid">
                        <h1>Orders</h1>
                        <div className="row">
                            {this.showOrders()}
                        </div>
                    </div>
                <Footer company="NITIRAT" email="nitirat.wo@gmail.com" />
            </div>
        );
    }

}

export default Orders;