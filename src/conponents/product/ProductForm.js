import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormField from '../common/FormField';
import { productFormField } from './FormField';

class ProductForm extends Component {

    renderField(formField) {
        return formField.map(({ label, name, type, required }, i) => {
            return (
                <Field key={i} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })
    }

    render() {
        return (
            <div>
                <form>
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
    console.log(values);
    const errors = {};
    productFormField.forEach(({name, required}) => {
        
    });
}

export default reduxForm({ form: "ProductForm", validate })(ProductForm);
