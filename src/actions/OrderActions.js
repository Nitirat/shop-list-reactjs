import Axios from "axios";
import { ORDERS_FETCH } from './types';

export const ordersFetch = () => {
    return dispatch => {
        Axios.get("http://127.0.0.1:3001/orders").then(
            res => {
                dispatch({ type: ORDERS_FETCH, payload: res.data });
            }
        )
    }
}

export const orderDelete = (id) => {
    return dispatch => {
        Axios.delete("http://127.0.0.1:3001/orders/" + id).then(res => {
            Axios.get("http://127.0.0.1:3001/orders").then(res => {
                dispatch({ type: ORDERS_FETCH, payload: res.data });
            }
            )
        }
        )
    }
}