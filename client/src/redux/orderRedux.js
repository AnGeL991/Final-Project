import axios from "axios";
import {API_URL} from "../config";

export const getOrder=({orderProduct}) => orderProduct.data;
export const getRequest = ({orderProduct}) => orderProduct.request;


const reducerName= 'order';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST =createActionName("END_REQUEST");
const ERROR_REQUEST= createActionName("ERROR_REQUEST");

const LOAD_ORDERS = createActionName("LOAD_BRAND");

export const startRequest = () => ({type: START_REQUEST});
export const endRequest = () => ({ type:END_REQUEST});
export const errorRequest =(error) => ({error, type: ERROR_REQUEST});

export const loadOrders = ( payload) => ({
    payload,
    type: LOAD_ORDERS,
})

export const loadOrdersRequest = () => {
    return async (dispatch) => {
        dispatch(startRequest());
        try {
            let res = await axios.get(`${API_URL}/Orders`);
            dispatch(loadOrders(res.data));
            dispatch(endRequest());
        } catch (e) {
            dispatch (errorRequest(e.message));
        }
    };
};

const initialState = {
    data: [],
    request: {
        pending: false,
        error: null,
        success: null,
    }
}


export default function reducer(statePart = initialState, action ={}){
    switch (action.type) {
        case LOAD_ORDERS:
            return {...statePart,data: [...action.payload]};
        case START_REQUEST:
            return {
                ...statePart,
                request:{pending:true,error:null, success:false }
            }
        case END_REQUEST:
            return {
                ...statePart,
                request: {pending: false, error: null, success: true},
            }
        case ERROR_REQUEST:
            return {
                ...statePart,
                request:{pending:false, error:action.error,success:false},
            }
        default:
            return statePart;            
    }
}