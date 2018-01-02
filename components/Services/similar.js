import React, {Component} from 'react';
import Services from "./services";

class Similar extends Component {
    componentWillReceiveProps(nextProps) {
        if(nextProps.id !== this.props.id){
            this.props.fetchSimilarservices();
        }
    }

    componentWillMount() {
        this.props.fetchSimilarservices();
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
