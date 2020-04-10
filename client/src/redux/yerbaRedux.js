import axios from "axios";
import {API_URL} from "../config";

/*SELECTORS */
export const getYerbaProduct=({yerbaProduct}) => yerbaProduct.data;
export const getRequest = ({ yerbaProduct}) => yerbaProduct.request;

// action name creator //
const reducerName ="yerbaProduct";
const createActionName = (name)=> `app/${reducerName}/${name}`;

const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST =createActionName("ERROR_REQUEST");

const LOAD_YERBA_PRODUCT = createActionName("LOAD_YERBA_PRODUCT");

export const startRequest = () => ({type:START_REQUEST});
export const endRequest = () => ({type: END_REQUEST});
export const  errorRequest =(error) => ({error,type:ERROR_REQUEST});

export const loadYerbaProduct = (payload)=>({
    payload,
    type: LOAD_YERBA_PRODUCT,
});
/* THUNKS */
export const loadYerbaProductRequest =()=>{
    return async (dispatch) => {
        dispatch(startRequest());
        try{
            let res = await axios.get(`${API_URL}/yerbaProduct`);
            dispatch(loadYerbaProduct(res.data));
            dispatch(endRequest());
        } catch (e){
            dispatch(errorRequest(e.message));
        }
    };
};

/* INITIAL STATE */

const initialState ={
    data: [],
    request: {
        pending: false,
        error: null,
        success:null,
    },
};

/*REDUCER */

export default function reducer(statePart = initialState, action ={}){
    switch (action.type) {
        case LOAD_YERBA_PRODUCT:
            return {...statePart,data:[...action.payload]};
        case START_REQUEST:
            return {
                ...statePart,
                request: {pending:true, error:null, success:false},
            };
        case END_REQUEST:
            return {
                ...statePart,
                request: {pending:false,error: null,success:true},
            };
        case ERROR_REQUEST:
            return {
                ...statePart,
                request:{pending:false, error: action.error,success:false},
            };
        default:
            return statePart;    
    }
}