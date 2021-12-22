import axios from 'axios';
import { DATA_REQUEST, DATA_RESPONSE, ERROR_RESPONSE} from './actionTypes';




export const getAPIData = (dispatch) =>{
    dispatch(requestAction())
    axios.get("https://reqres.in/api/users?page=1")
         .then(response => dispatch(responseDataAction(response.data)))
         .catch(error=> dispatch(responseErrorAction(error.message)))
}

export const requestAction= ()=>{
    return {
        type: DATA_REQUEST
    }
}

export const responseDataAction = (data) =>{
    return {
        type: DATA_RESPONSE,
        payload: data
    }
}

export const responseErrorAction = (error) =>{
    return {
        type: ERROR_RESPONSE,
        payload: error
    }
}