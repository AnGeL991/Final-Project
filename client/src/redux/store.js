import {combineReducers, createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';

// import reducers
import coffeeProduct from './coffeeRedux';
import teaProduct from './teaRedux';
import machinProduct from './machinRedux';
import yerbaProduct from './yerbaRedux';
import brandProduct from './brandRedux';
import orderProduct from './orderRedux';
import basket from './basketRedux';

//combine reducers
const rootReducer = combineReducers({
  coffeeProduct,
  teaProduct,
  machinProduct,
  yerbaProduct,
  brandProduct,
  orderProduct,
  basket,
})





const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
