import {Route} from "react-router-dom";
import React from "react";
import App from "../containers/AppContainer";
import Witkey from "bundle-loader?lazy!../containers/WitkeyContainer";
import SimilarServices from "bundle-loader?lazy!../containers/SimilarServicesContainer";
import ServiceDetail from "bundle-loader?lazy!../containers/ServiceDetailContainer";
import Menu from "../components/Menu/Menu";

import Bundle from './bundle.js';

export const WitkeyContainer = (props) => (
    <Bundle load={Witkey}>
        {(Container) => <Container {...props}/>}
    </Bundle>
)

export const ServiceDetailContainer = (props) => (
    <Bundle load={ServiceDetail}>
        {(Container) => <Container {...props}/>}
    </Bundle>
)

export const SimilarServicesContainer = (props) => (
    <Bundle load={SimilarServices}>
        {(Container) => <Container {...props}/>}
    </Bundle>
)

export default () => ( <div>
    <Route path="*" render={({match})=> {
        return (<Menu selectedkeys={match.url}/>)
    }}/>
    <Route exact path="/" component={App}/>
    <Route exact path="/exclusive" component={WitkeyContainer}/>
    <Route exact path="/similar/:id" component={SimilarServicesContainer}/>
    <Route exact path="/service/:id" component={ServiceDetailContainer}/>
</div>)

