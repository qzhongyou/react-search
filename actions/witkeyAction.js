/**
 * @description 专属服务商
 */

import {polyfill} from "es6-promise";
polyfill();
import  fetchJsonp from "fetch-jsonp";

export const WITKEY = "WITKEY";

export const fetchwitkeys = ()=> {
    return {
        type: WITKEY,
        payload: fetchJsonp("http://alg.api.zbj.com/indexRecommend/intention/shops/", {
            jsonpCallback: "jsonpcallback",
            jsonpCallbackFunction: "jsonp_witkey",
            timeout: 3000,
        })
    }
}
