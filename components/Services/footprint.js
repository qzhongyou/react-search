import React, {Component} from 'react';
import Services from "./services";
import moment from "moment";
import {DatePicker} from "antd";

class Footprint extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.date !== this.props.date && nextProps.date !== "") {
            this.props.action(nextProps.date);
        }
    }

    componentWillMount() {
        this.props.action(this.props.date);
    }

    render() {
        const {date ,selectDate} = this.props;
        const dateFormat ='YYYYMMDD';
        return (
        <div>
            <DatePicker defaultValue={moment(date, dateFormat)} format={dateFormat} onChange ={selectDate} />
            <Services {...this.props} />
        </div>
        )
    }
}


export  default  Footprint;
