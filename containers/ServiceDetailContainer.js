import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as serviceDetailAction from "../actions/serviceDetailAction";
import ServiceDetail from "../components/ServiceDetail/ServiceDetail";

class ServiceDetail extends Component {
    render() {
        const {action, serviceDetail, errorMessage} = this.props;
        return (<ServiceDetail  action = {action} serviceDetail ={serviceDetail} isFetching ={serviceDetail.isFetching} errorMessage ={errorMessage}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        serviceDetail: state.serviceDetail,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        action: bindActionCreators(serviceDetailAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetail);
