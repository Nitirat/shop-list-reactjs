import React, { Component } from 'react';

import Header from "../conponents/Header";
import Footer from "../conponents/Footer";


class About extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    Nitirat
                </div>
                <Footer company="NITIRAT" email="nitirat.wo@gmail.com" />
            </div>
        );

    }

}

export default About;