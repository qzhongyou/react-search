import React, {Component} from 'react';
import ServiceList from "./ServiceList";

class SimilarServiceList extends Component {
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
            <ServiceList {...this.props} />
        </div>
        )
    }
}

export  default SimilarServiceList;
