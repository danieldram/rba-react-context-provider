import { createStore } from "redux";

import "../action-types";

const ActionTypes = window.RBA_react.ActionTypes.TestActionTypes;

let store = (state = {testContent:"null"}, action) => {
    switch(action.type){
        case ActionTypes.TEST_CONTENT:
            return {testContent: action.data}
        default: 
            return state
    }
};


window.RBA_react = window.RBA_react || {};
window.RBA_react.stores = window.RBA_react.stores || {};
let testStore = createStore(store);
window.RBA_react.stores.testStore = testStore;

export default testStore;