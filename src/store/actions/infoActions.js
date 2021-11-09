import {GET_INFORMATIONS, INFORMATION_ERROR} from '../types'
import axios from 'axios'
import {INFO_API_URL} from "../../_helpers/params";

export const getInfo = () => async dispatch => {

    try{
        const res = await axios.get(INFO_API_URL,{ headers: {
                'Content-type': 'application/json',
             } })
        dispatch( {
            type: GET_INFORMATIONS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: INFORMATION_ERROR,
            payload: console.log(e),
        })
    }

}


