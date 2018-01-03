import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as serviceDetailAction from "../actions/serviceDetailAction";
import ServiceDetail from "../components/ServiceDetail/ServiceDetail";
import ErrorMessage from "../components/common/ErrorMessage";
import IsFetching from "../components/common/IsFetching";

@ErrorMessage
class ServiceDetailContainer extends Component {

    componentWillMount() {
        const {match} =this.props;
        this.props.fetchServiceDetail(match.params.id);
    }

    render() {
        const {serviceDetail} = this.props;
        return (
        IsFetching(this.props) ||
        <ServiceDetail serviceDetail={serviceDetail}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        serviceDetail: state.serviceDetail,
        errorMessage: state.errorMessage,
        isFetching:state.serviceDetail.isFetching
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchServiceDetail: bindActionCreators(serviceDetailAction.fetchServiceDetail, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetailContainer);
