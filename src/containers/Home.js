import React, { Component } from 'react';

import Header from "../conponents/Header";
import Footer from "../conponents/Footer";
import Item from "../conponents/product/ProductItem";
import Monitor from "../conponents/Monitor";
import Axios from "axios";


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { products : "" }
  }

  getData = async () => {
    let data = await Axios.get("http://127.0.0.1:3001/products");
    this.setState({products : data.data});
  }

  componentDidMount() {
    // this.setState({
    //   products: [
    //     { productId: 1, productName: "สลัดผัก", price: "120", thumbnail: "/images/product/1.jpg" },
    //     { productId: 2, productName: "ไก่ทอด", price: "90", thumbnail: "/images/product/2.jpg" },
    //     { productId: 3, productName: "บิงซู", price: "200", thumbnail: "/images/product/3.jpg" },
    //     { productId: 4, productName: "เฟรนฟราย", price: "140", thumbnail: "/images/product/4.jpg" },
    //     { productId: 5, productName: "เค้ก 3 ชั้น", price: "200", thumbnail: "/images/product/5.jpg" },
    //     { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", price: "140", thumbnail: "/images/product/6.jpg" }
    //   ]
    // })

    // fetch("http://127.0.0.1:3001/products", {method : "GET"})
    //   .then(promis => promis.json())
    //   .then(res => {
    //     this.setState({products : res});
    //   });

    // Axios.get("http://127.0.0.1:3001/products").then(res => {
    //   this.setState({products : res.data});
    // });

    this.getData();
  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.state.products}/>
        <Footer company="NITIRAT" email="nitirat.wo@gmail.com" />
      </div>
    );
  }
}

export default Home;
