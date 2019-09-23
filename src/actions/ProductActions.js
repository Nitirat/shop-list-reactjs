import Axios from "axios";
import { PRODUCTS_FETCH, PRODUCT_CREATE, PRODUCT_FETCH, PRODUCT_UPDATE } from './types';

export const productCreate = (values) => {
    return dispatch => {
        Axios.post("http://127.0.0.1:3001/products", values).then(
            res => {
                dispatch({ type: PRODUCT_CREATE, payload: res.data });
            }
        )
    }
}

export const productUpdate = (id, values) => {
    return dispatch => {
        Axios.put("http://127.0.0.1:3001/products/"+id, values).then(
            res => {
                dispatch({ type: PRODUCT_UPDATE, payload: res.data });
            }
        )
    }
}

export const productFetch = (id) => {
    return dispatch => {
        Axios.get("http://127.0.0.1:3001/products/" + id).then(
            res => {
                dispatch({ type: PRODUCT_FETCH, payload: res.data });
            }
        )
    }
}

export const productsFetch = () => {
    return dispatch => {
        Axios.get("http://127.0.0.1:3001/products").then(
            res => {
                dispatch({ type: PRODUCTS_FETCH, payload: res.data });
            }
        )
    }
}

export const productDelete = (id) => {
    return dispatch => {
        Axios.delete("http://127.0.0.1:3001/products/" + id).then(res => {
            Axios.get("http://127.0.0.1:3001/products").then(res => {
                dispatch({ type: PRODUCTS_FETCH, payload: res.data });
            }
            )
        }
        )
    }
}