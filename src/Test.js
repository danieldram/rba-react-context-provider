import React, {Component} from "react";

export default class Test extends Component {

    render(){
        const keys = Object.keys(this.props);
        return(
            <span>
                imagine a serach component UI or an inventory component UI
                {keys.map( key => console.log(this.props[key])  && `${key}, `)}
            </span>
        )
    }
}

