import { DATA_REQUEST, DATA_RESPONSE, ERROR_RESPONSE}  from './actionTypes';

const initialState ={
    loading: false,
    responseData: {},
    errorData: ""
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case DATA_REQUEST : return {
            ...state,
            loading: true
        }
        case DATA_RESPONSE  : return {
            ...state,
            loading:false,
            responseData: action.payload
        }
        case ERROR_RESPONSE : return {
            ...state,
            loading: false,
            errorData: action.payload
        }
        default: return state
    }
}

export default reducer;