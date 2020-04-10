import axios from "axios";
import { API_URL } from "../config";

/* SELECTORS */
export const getTeaProduct = ({ teaProduct }) => teaProduct.data;
export const getRequest = ({ teaProduct }) => teaProduct.request;

// action name creator //
const reducerName = "teaProduct";
const createActionName = (name) => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");

const LOAD_TEA_PRODUCT = createActionName("LOAD_TEA_PRODUCT");

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

export const loadTeaProduct = (payload) => ({
  payload,
  type: LOAD_TEA_PRODUCT,
});

/* THUNKS */
export const loadTeaProductRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/teaProduct`);
      dispatch(loadTeaProduct(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
};
/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_TEA_PRODUCT:
      return { ...statePart, data: [...action.payload] };
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: false },
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: false },
      };
    default:
      return statePart;
  }
}
