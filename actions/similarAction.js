/**
 * @description 找相似
 */
import {polyfill} from "es6-promise";
polyfill();
import  fetchJsonp from "fetch-jsonp";

export const SIMILAR_REQUEST = "SIMILAR_REQUEST";
export const SIMILAR_SUCCESS = "SIMILAR_SUCCESS";
export const SIMILAR_FAILURE = "SIMILAR_FAILURE";


export const loadSimilar = (serviceId) =>()=>(dispatch, getState)=> {
    dispatch({type: SIMILAR_REQUEST});
    fetchJsonp("http://alg.api.zbj.com/indexRecommend/v1/track/similar/services/"+serviceId, {
        jsonpCallback: "jsonpcallback",
        timeout: 3000,
    }).then(response => {
        return response.json();
    }).then(json => {
        dispatch({type: SIMILAR_SUCCESS, service: json});
    }).catch(function (ex) {
        dispatch({type: SIMILAR_FAILURE,error:ex.message});
        console.log('parsing failed', ex)
    })
}
