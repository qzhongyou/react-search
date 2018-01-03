import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as similarAction from "../actions/similarServicesAction";
import SimilarServiceList from "../components/Services/SimilarServiceList";
import ErrorMessage from "../components/common/ErrorMessage";
import IsFetching from "../components/common/IsFetching";

@ErrorMessage

class SimilarServicesContainer extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchSimilarservices();
        }
    }

    componentWillMount() {
        this.props.fetchSimilarservices();
    }

    render() {
        const {similarServices} = this.props;
        return (
            IsFetching(this.props) ||
            <SimilarServiceList services={similarServices}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        similarServices: state.similarServices,
        errorMessage: state.errorMessage,
        isFetching: state.similarServices.isFetching
    }
}

const mapDispatchToProps = (dispatch, props)=> {
    const {id} = props.match.params;
    return {
        fetchSimilarservices: bindActionCreators(similarAction.fetchsimilarservices(id), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimilarServicesContainer);
