/**
 * @description 服务列表action
 */
import {polyfill} from "es6-promise";
polyfill();
import  fetchJsonp from "fetch-jsonp";

export const SERVICES_REQUEST = "SERVICES_REQUEST";
export const SERVICES_SUCCESS = "SERVICES_SUCCESS";
export const SERVICES_FAILURE = "SERVICES_FAILURE";


export const loadServices = () =>(dispatch, getState)=> {
    dispatch({type: SERVICES_REQUEST});
    fetchJsonp("http://alg.api.zbj.com/indexRecommend/v1/track/recent/services/before/20171217", {
        jsonpCallback: "jsonpcallback",
        timeout: 3000,
    }).then(response => {
        return response.json();
    }).then(json => {
        dispatch({type: SERVICES_SUCCESS, services: json[0].services});
    }).catch(function (ex) {
        dispatch({type: SERVICES_FAILURE,error:ex.message});
        console.log('parsing failed', ex)
    })
}
