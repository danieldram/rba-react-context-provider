import React, {Component} from "react";
import ReactDOM from  "react-dom";
import { createStore } from "redux";
import {connect, Provider } from "react-redux";

import ContextProvider from "./ContextProvider";
import Test from "./Test";

import {testStore} from "./store/testStore";

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

ReactDOM.render(<Provider store={window.RBA_react.stores.testStore}><MappedComponent/></Provider>, root);



