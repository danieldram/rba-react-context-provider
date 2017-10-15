import React, {Component} from "react";
import ReactDOM from  "react-dom";
import { createStore } from "redux";
import {connect, Provider } from "react-redux";

import ContextProvider from "./ContextProvider";
import Test from "./Test";


let store = (state = {testContent:"null"}, action) => {
    switch(action.type){
        case "TEST_CONTENT":
            return {testContent: action.data}
        default: 
            return state
    }
};


window.RBA_react = {};
window.RBA_react.stores = {};
let createdStore = createStore(store);
window.RBA_react.stores.testStore = createdStore;


const mapStateToProps = (state, props) => {
    return {
        testContent: state.testContent
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: ()=> {
            dispatch({type: 'TEST_CONTENT', data:"test content"});
        }
    }
}


export default class Mocked extends Component {
    
    render(){
        return(
            <div>
                <ContextProvider component={Test} {...this.props}/>
            </div>)
    }
}

const MappedComponent = connect(mapStateToProps, mapDispatchToProps)(Mocked);
const root = document.getElementById('root');



ReactDOM.render(<Provider store={createdStore}><MappedComponent/></Provider>, root);



