import React, { Component } from 'react';

import Header from "../../conponents/Header";
import Footer from "../../conponents/Footer";

class NotFound extends Component {
    render(){
        return(
            <div>
                <Header />
                <div className="container-fluid text-center">
                    <h1>404</h1>
                    <h2>Not Found</h2>
                </div>
                <Footer company="NITIRAT" email="nitirat.wo@gmail.com" />
            </div>
        );
    }
}

export default NotFound;