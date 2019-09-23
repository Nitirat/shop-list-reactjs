import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import FormField from '../common/FormField';
import { productFormField } from './FormField';

class ProductForm extends Component {

    renderField(formField) {
        return formField.map(({ label, name, type, required }, i) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })
    }

    render() {
        const { onProductSubmit } = this.props;
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    {this.renderField(productFormField)}
                    <button className="btn btn-block btn-info title" type="submit">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

const validate = values => {
    const errors = {};
    productFormField.forEach(({ name, required }) => {
        if (!values[name] && required) {
            errors[name] = 'ใส่ข้อมูล';
        }
    });
    return errors;
}

function mapStateToProps({ products }) {
    console.log(products);
    if (products && products.id) {
        return { initialValues : products};
    }else{
        return {};
    }
}

ProductForm = reduxForm({ form: "ProductForm", validate })(ProductForm);

export default connect(mapStateToProps)(ProductForm);
