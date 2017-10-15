import "../action-types";

const ActionTypes = window.RBA_react.ActionTypes.TestActionTypes;

const PageActions = {
    onClick: (dispatch) => {
        dispatch({type: ActionTypes.TEST_CONTENT, data:"new content data"});
    }
}


window.RBA_react = window.RBA_react || {};
window.RBA_react.actions = window.RBA_react.actions || {};
window.RBA_react.actions.PageActions = PageActions;

export default PageActions;
