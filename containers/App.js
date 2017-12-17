import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as servicesAction from "../actions/servicesAction";
import Services from "../components/servicelist/services";
class App extends Component {
    render(){
        const {action,services ,errorMessage} = this.props;
        return (<div >
                    <Services action = {action} services = {services} errorMessage = {errorMessage}/>
                </div>)
    }
}

const mapStateToProps = (state)=> ({
    services:state.services,
    errorMessage:state.errorMessage
})
const mapDispatchToProps = (dispatch)=> ({
    action:bindActionCreators(servicesAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
