import React, {Component} from "react";
import ReactDOM from  "react-dom";
import { createStore } from "redux";
import {connect, Provider } from "react-redux";

import ContextProvider from "./ContextProvider";
import Test from "./Test";

import {testStore} from "./store/testStore";
import "./actions";

const PageActions = window.RBA_react.actions.PageActions;

const mapStateToProps = (state, props) => {
    return {
        testContent: state.testContent
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: PageActions.onClick.bind(null, dispatch)
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
const attrs = root.attributes;

ReactDOM.render(<Provider store={window.RBA_react.stores.testStore}><MappedComponent test={attrs} /></Provider>, root);



