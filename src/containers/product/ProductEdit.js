import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productCreate, productUpdate, productFetch } from '../../actions/ProductActions';
import Header from '../../conponents/Header';
import Footer from '../../conponents/Footer';
import ProductForm from '../../conponents/product/ProductForm';

class ProductEdit extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.productFetch(this.props.match.params.id);
        }
    }

    render() {
        const { formValues, products, productCreate, productUpdate, match } = this.props;
        return (
            <div>
                <Header />
                <div className="container col-md-5">

                    {match.path.indexOf('add') > 0 && (
                        <div>
                            <h2>Add</h2>
                            <ProductForm onProductSubmit={() => productCreate(formValues)} />
                        </div>

                    )}
                    {match.path.indexOf('edit') > 0 && (
                        <div>
                            <h2>Edit</h2>
                            <ProductForm onProductSubmit={() => productUpdate(products.id, formValues)} />
                        </div>
                    )}

                </div>
                <Footer company="NITIRAT" email="nitirat.wo@gmail.com" />
            </div>
        )
    }
}

function mapStateToProps({ form, products }) {
    return { formValues: products.ProductForm ? form.ProductForm.values : null, products };
}


export default connect(mapStateToProps, { productCreate, productUpdate, productFetch })(ProductEdit);