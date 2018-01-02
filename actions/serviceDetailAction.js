/**
 * @description 服务详情 action
 */

import {polyfill} from "es6-promise";
polyfill();
import  fetchJsonp from "fetch-jsonp";

export const SERVICE_DETAIL = "SERVICE_DETAIL";

export const fetchServiceDetail = (serviceId) => {
    return {
        type: SERVICE_DETAIL,
        payload: fetchJsonp("http://alg.api.zbj.com/indexRecommend/v1/track/service/" + serviceId, {
            jsonpCallback: "jsonpcallback",
            timeout: 3000,
        })
    }
}
