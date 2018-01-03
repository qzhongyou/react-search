import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as witkeyAction from "../actions/witkeyAction";
import WitkeyList from "../components/Witkey/WitkeyList";
import ErrorMessage from "../components/common/ErrorMessage";
import IsFetching from "../components/common/IsFetching";

@ErrorMessage


class WitkeyContainer extends Component {

    componentWillMount() {
        this.props.fetchwitkeys();
    }

    render() {
        const {witkeys} = this.props;
        return (
        IsFetching(this.props) ||
        <WitkeyList witkeys={witkeys}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        witkeys: state.witkeys,
        errorMessage: state.errorMessage,
        isFetching: state.witkeys.isFetching
    }
}

const mapDispatchToProps = (dispatch, props)=> {
    return {
        fetchwitkeys: bindActionCreators(witkeyAction.fetchwitkeys, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WitkeyContainer);
