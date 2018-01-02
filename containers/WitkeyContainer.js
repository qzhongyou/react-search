import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as exclusiveAction from "../actions/witkeyAction";
import Witkey from "../components/witkey/witkey";

class ExclusiveWitkeys extends Component {
    render() {
        const {action, witkeys, errorMessage} = this.props;
        return (<Witkey action={action} witkeys={witkeys} isFetching = {witkeys.isFetching} errorMessage={errorMessage}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        witkeys: state.witkeys,
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