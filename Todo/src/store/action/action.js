import { actionTypes } from '../constant/constant'
import axios from 'axios'



export function add(obj) {
    return (dispatch) => {
        dispatch({type:actionTypes.ADD, payload:obj})
    }
}

