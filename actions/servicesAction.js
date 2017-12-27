/**
 * @description 服务列表action
 */
import {polyfill} from "es6-promise";
polyfill();
import  fetchJsonp from "fetch-jsonp";

export const SERVICES = "SERVICES";

export const fetchServices = function(date) {
    return {
        type:SERVICES,
        payload:fetchJsonp(
            "http://alg.api.zbj.com/indexRecommend/v1/track/recent/services/before/"+date, {
            jsonpCallback: "jsonpcallback",
            timeout: 3000,
        })
    }
}
