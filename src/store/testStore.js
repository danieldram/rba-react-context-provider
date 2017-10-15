import { createStore } from "redux";

let store = (state = {testContent:"null"}, action) => {
    switch(action.type){
        case "TEST_CONTENT":
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