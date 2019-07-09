import React, { Component } from 'react';

import Header from "../../conponents/Header";
import Footer from "../../conponents/Footer";
import { connect } from 'react-redux';
import { ordersFetch, orderDelete } from '../../actions';

class Order extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.ordersFetch();
    }

    deleteOrder = (order) => { 
        this.props.orderDelete(order.id);
    }

    showOrders() {
        return this.props.orders && this.props.orders.map(order => {
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
                            return (
                                <li key={record.product.id}>
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

    render() {
        return (
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

function mapStateToProps({ orders }) {
    return { orders };
}

export default connect(mapStateToProps, { ordersFetch, orderDelete })(Order);