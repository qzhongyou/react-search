import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as similarAction from "../actions/similarServicesAction";
import Service from "../components/Services/similar";

class SimilarServices extends Component {
    render() {
        const {fetchSimilarservices, similarServices, errorMessage, match} = this.props;
        return (<Service fetchSimilarservices = {fetchSimilarservices} id = {match.params.id} services={similarServices} isFetching ={similarServices.isFetching} errorMessage={errorMessage}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        similarServices: state.similarServices,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = (dispatch, props)=> {
    const {id} = props.match.params;
    return {
        fetchSimilarservices: bindActionCreators(similarAction.fetchsimilarservices(id), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimilarServices);
