/**
 * @description 专属服务商
 */

import {polyfill} from "es6-promise";
polyfill();
import  fetchJsonp from "fetch-jsonp";

export const WITKEY_DETAIL_REQUEST = "WITKEY_DETAIL_REQUEST";
export const WITKEY_DETAIL_SUCCESS = "WITKEY_DETAIL_SUCCESS";
export const WITKEY_DETAIL_FAILURE = "WITKEY_DETAIL_FAILURE";



export const loadExclusiveWitkey = () =>(dispatch, getState)=> {
    dispatch({type: WITKEY_DETAIL_REQUEST});
    fetchJsonp("http://alg.api.zbj.com/indexRecommend/intention/shops/", {
        jsonpCallback: "jsonpcallback",
        timeout: 3000,
    }).then(response => {
        return response.json();
    }).then(json => {
        dispatch({type: WITKEY_DETAIL_SUCCESS, witkeys: json});
    }).catch(function (ex) {
        dispatch({type: WITKEY_DETAIL_FAILURE,error:ex.message});
        console.log('parsing failed', ex)
    })
}
