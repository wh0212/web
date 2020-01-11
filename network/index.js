/**
 * 网络层入口文件
 * index.js负责导出请求方法
 */

import apiAddress from './netManager'


export let login =(url, params)=>{
    return apiAddress("GET", url, params)
}

export let logon =(url, params)=>{
    return apiAddress("POST", url, params)
}
//热门
export let getSreach =(url, params)=>{
    return apiAddress("GET", url, params)
}

//lunbo
export let getbanner =(url,params)=>{
    return apiAddress("GET",url,params)
}


export let getactivity =(url,params)=>{
    return apiAddress("GET",url,params)
}

//lunbo
export let getclassify =(url,params)=>{
    return apiAddress("GET",url,params)
}

export let getlist =(url,params)=>{
    return apiAddress("GET",url,params)
}