import {Route} from "react-router-dom";
import  React from "react";
import App from "../containers/App";
import exclusiveApp from "../containers/exclusiveApp";
import similarApp from "../containers/similarApp";
import serviceDetailApp from "../containers/serviceDetailApp";
import Menu from "../components/Menu/Menu";
export default () => ( <div>
    <Route path="*" render={({match})=> {
        return (<Menu selectedkeys={match.url}/>)
    }}/>
    <Route exact path="/" component={App}/>
    <Route exact path="/exclusive" component={exclusiveApp}/>
    <Route exact path="/similar/:id" component={similarApp}/>
    <Route exact path="/service/:id" component={serviceDetailApp}/>
</div>)

