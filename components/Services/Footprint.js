import React, {Component} from 'react';
import ServiceList from "./ServiceList";

class Footprint extends Component {
    render() {
        return <ServiceList {...this.props} />
    }
}

export  default  Footprint;
