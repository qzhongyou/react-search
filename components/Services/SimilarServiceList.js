import React, {Component} from 'react';
import ServiceList from "./ServiceList";

class SimilarServiceList extends Component {

    render() {
        return (
        <div>
            <ServiceList {...this.props} />
        </div>
        )
    }
}

export  default SimilarServiceList;
