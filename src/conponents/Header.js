import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidMount() {
        // console.log("componentDidMount");
    }

    componentDidUpdate() {
        // console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        // console.log("componentWillUnmount");
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 text-left">
                        <h3><img src="/images/logo/ACIII.png" width="50" height="50" alt="" /><span className=""> ac:o </span></h3>
                    </div>
                    <div className="col-6 text-right mt-3">
                        <span className="text-muted">
                            {this.state.date.toLocaleTimeString()}
                        </span>

                        <ul className="list-inline">
                            <li className="list-inline-item"><Link to="/">Home</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link to="/orders">Orders</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link to="/products">Products</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Header;