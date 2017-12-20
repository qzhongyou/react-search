import React, {Component} from 'react';
import Services from "./services";

class Similar extends Component {
    componentWillReceiveProps(nextProps) {
        if(nextProps.id !== this.props.id){
            this.props.action();
        }
    }

    componentWillMount() {
        this.props.action();
    }

    render() {
        return (
        <div>
            <Services {...this.props} />
        </div>
        )
    }
}

export  default Similar;
