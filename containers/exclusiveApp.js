import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as exclusiveAction from "../actions/exclusiveAction";
import Witkey from "../components/witkey/witkey";

class ExclusiveWitkeys extends Component {
    render() {
        const {action, exclusive, errorMessage} = this.props;
        return (<Witkey action={action} exclusive={exclusive} errorMessage={errorMessage}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        exclusive: state.exclusive,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = (dispatch, props)=> {
    const {id} = props.match.params;
    return {
        action: bindActionCreators(exclusiveAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExclusiveWitkeys);
