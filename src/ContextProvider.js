import React, {Component} from 'react';
import PropTypes from "prop-types";


export default class ContextProvider extends Component {
    
    render(){
        const Component = this.props.component;
        console.log(this.props);
        return(
            <div>
               <Component {...this.props} />
            </div>
        );
    }
}

ContextProvider.propTypes = {
    utils: PropTypes.object.isRequired,
    component: PropTypes.element.isRequired
}
