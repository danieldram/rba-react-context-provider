import React, {Component} from "react";

export default class Test extends Component {

    render(){
        const keys = Object.keys(this.props);
        return(
            <span>
                {this.props.testContent}
                {keys.map( key => console.log(this.props[key])  && `${key}, `)}
                <button onClick={()=>{ this.props.onClick()} }> Click Me </button>
            </span>
        )
    }
}

