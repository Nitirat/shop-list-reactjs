import React, { Component } from 'react';

import Header from "../conponents/Header";
import Footer from "../conponents/Footer";
import Item from "../conponents/product/ProductItem";
import Monitor from "../conponents/Monitor";
import { connect } from 'react-redux';
import { productsFetch } from '../actions';


class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.productsFetch();
  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="NITIRAT" email="nitirat.wo@gmail.com" />
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products }
}

export default connect(mapStateToProps, { productsFetch })(Home);
