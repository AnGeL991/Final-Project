import "./styles/global.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';
import App from "./App";

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));
