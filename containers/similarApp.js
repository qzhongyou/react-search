import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as similarAction from "../actions/similarAction";
import Service from "../components/servicelist/services";

class SimilarServices extends Component {
    render() {
        const {action, similarServices, errorMessage, match} = this.props;
        return (<Service action={action} id = {match.params.id} services={similarServices} errorMessage={errorMessage}/>)
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
        action: bindActionCreators(similarAction.loadSimilar(id), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimilarServices);
