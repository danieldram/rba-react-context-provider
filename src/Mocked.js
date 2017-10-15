import React, {Component} from "react";
import ReactDOM from  "react-dom";

import ContextProvider from "./ContextProvider";
import Test from "./Test";


export default class Mocked extends Component {
    
    render(){
        return(
            <div>
                <ContextProvider component={Test} utils={{}}  actions={{PageServices:{}}}/>
            </div>)
    }
}

const root = document.getElementById('root');

ReactDOM.render(<Mocked />, root);



