import './styles/global.scss'
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
//import { Provider } from "react-redux";
import App from "./App";


const Root = () => (   
         <BrowserRouter>
            <App />
         </BrowserRouter>  
);

ReactDOM.render(<Root />, document.getElementById("root"));
