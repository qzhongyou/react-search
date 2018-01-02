/**
 * @description 找相似
 */
import {polyfill} from "es6-promise";
polyfill();
import  fetchJsonp from "fetch-jsonp";


export const SIMILAR_SERVICES = "SIMILAR_SERVICES";
export const fetchsimilarservices = (serviceId) => () => {
    return {
        type:SIMILAR_SERVICES,
        payload:fetchJsonp("http://alg.api.zbj.com/indexRecommend/v1/track/similar/services/" + serviceId, {
            jsonpCallback: "jsonpcallback",
            timeout: 3000,
        })
    }
}

