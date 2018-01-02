import {Route} from "react-router-dom";
import  React from "react";
import App from "../containers/AppContainer";
import Witkey from "../containers/WitkeyContainer";
import SimilarServices from "../containers/SimilarServicesContainer";
import ServiceDetail from "../containers/ServiceDetailContainer";
import Menu from "../components/Menu/Menu";
export default () => ( <div>
    <Route path="*" render={({match})=> {
        return (<Menu selectedkeys={match.url}/>)
    }}/>
    <Route exact path="/" component={App}/>
    <Route exact path="/exclusive" component={Witkey}/>
    <Route exact path="/similar/:id" component={SimilarServices}/>
    <Route exact path="/service/:id" component={ServiceDetail}/>
</div>)

