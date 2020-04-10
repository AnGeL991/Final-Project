import axios from "axios";
import { API_URL } from "../config";

/* SELECTORS */
export const getCoffeeProduct = ({ coffeeProduct }) => coffeeProduct.data;
export const getRequest = ({ coffeeProduct }) => coffeeProduct.request;

// action name creator //
const reducerName = "coffeeProduct";
const createActionName = (name) => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");

const LOAD_COFFEE_PRODUCT = createActionName("LOAD_COFFEE_PRODUCT");

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

export const loadCoffeeProduct = (payload) => ({
  payload,
  type: LOAD_COFFEE_PRODUCT,
});

/* THUNKS */
export const loadCoffeeProductRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/coffeeProduct`);
      dispatch(loadCoffeeProduct(res.data));
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
    case LOAD_COFFEE_PRODUCT:
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
