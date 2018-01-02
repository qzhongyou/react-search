import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as exclusiveAction from "../actions/witkeyAction";
import WitkeyList from "../components/Witkey/WitkeyList";

class WitkeyContainer extends Component {
    render() {
        const {action, witkeys, errorMessage} = this.props;
        return (<WitkeyList action={action} witkeys={witkeys} isFetching = {witkeys.isFetching} errorMessage={errorMessage}/>)
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

export default connect(mapStateToProps, mapDispatchToProps)(WitkeyContainer);
