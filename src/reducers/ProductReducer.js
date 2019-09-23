import { PRODUCTS_FETCH, PRODUCT_CREATE, PRODUCT_FETCH, PRODUCT_UPDATE } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case PRODUCTS_FETCH:
        case PRODUCT_FETCH:
            return action.payload;
        case PRODUCT_CREATE:
            return { save: true, message: "Save Done" };
        case PRODUCT_UPDATE:
            return { ...state, save: true, message: "Update Done" };
        default:
            return state;
    }
}