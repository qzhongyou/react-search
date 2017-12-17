/**
 * @description 服务详情 action
 */

import {polyfill} from "es6-promise";
polyfill();
import  fetchJsonp from "fetch-jsonp";

export const SERVICES_DETAIL_REQUEST = "SERVICES_DETAIL_REQUEST";
export const SERVICES_DETAIL_SUCCESS = "SERVICES_DETAIL_SUCCESS";
export const SERVICES_DETAIL_FAILURE = "SERVICES_DETAIL_FAILURE";



export const loadServiceDetail = (serviceId) =>(dispatch, getState)=> {
    dispatch({type: SERVICES_DETAIL_REQUEST});
    fetchJsonp("http://alg.api.zbj.com/indexRecommend/v1/track/service/"+serviceId, {
        jsonpCallback: "jsonpcallback",
        timeout: 3000,
    }).then(response => {
        return response.json();
    }).then(json => {
        dispatch({type: SERVICES_DETAIL_SUCCESS, service: json});
    }).catch(function (ex) {
        dispatch({type: SERVICES_DETAIL_FAILURE,error:ex.message});
        console.log('parsing failed', ex)
    })
}
