import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import ProductReducer from './ProductReducer';
import OrderReducer from './OrderReducer';

const rootReducer = combineReducers({
    orders: OrderReducer,
    from: reduxForm,
    products: ProductReducer
})

export default rootReducer;