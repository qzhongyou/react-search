import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import moment from "moment";
import {DatePicker} from "antd";
import * as servicesAction from "../actions/servicesAction";
import Footprint from "../components/Services/Footprint";
import  {selectDate}  from "../actions/dateAction";
import IsFetching from  "../components/common/IsFetching";
import ErrorMessage from "../components/common/ErrorMessage";

// 错误提示
@ErrorMessage

class App extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.date !== this.props.date && nextProps.date !== "") {
            this.props.fetchServices(nextProps.date);
        }
    }

    componentWillMount() {
        this.props.fetchServices(this.props.date);
    }

    render() {
        const {services, date, selectDate} = this.props;
        const dateFormat = 'YYYYMMDD';
        // loading status
        return (
        IsFetching(this.props) ||
        <div>
            <DatePicker defaultValue={moment(date, dateFormat)} format={dateFormat} onChange={selectDate}/>
            <Footprint services={services}/>
        </div>)
    }
}

const mapStateToProps = (state)=> ({
    services: state.services,
    date: state.date.date,
    errorMessage: state.errorMessage,
    isFetching:state.services.isFetching
})

const mapDispatchToProps = (dispatch)=> ({
    fetchServices: bindActionCreators(servicesAction.fetchServices, dispatch),
    selectDate: function (date, dateString) {
        bindActionCreators(selectDate, dispatch)(dateString);
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
