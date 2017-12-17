import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as serviceDetailAction from "../actions/serviceDetailAction";
import Service from "../components/serviceDetail/serviceDetail";

class ServiceDetail extends Component {
    render() {
        const {action, serviceDetail, errorMessage} = this.props;
        return (<Service  action = {action} serviceDetail ={serviceDetail} errorMessage ={errorMessage}/>)
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
