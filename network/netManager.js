
// import Vue from 'vue'
import axios from 'axios'

// Vue.use(axios)

//设置请求超时时间
axios.defaults.timeout = 30000

//baseURL
axios.defaults.baseURL = "http://localhost:8080/"

//挂载拦截器-请求之前
axios.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.error(error);
})

//响应拦截器
axios.interceptors.response.use((response) => {
    //解析服务器响应状态码，做出初步处理
    //提示器
    
    return response
}, (error) => {
    return Promise.reject(error)
})

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then((res) => {
            // console.log("GET",res.data);
            resolve(res.data)
        }).catch((error) => {
            console.log(error);
            reject(error)
        })
    })

}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then((res) => {
            console.log("POST",res.data);
            resolve(res.data)
        }).catch((error) => {
            console.log(error);
            reject(error)
        })
    })
}


export default function apiAddress(way, url, params) {
    switch (way) {
        case "GET":
            return get(url, params)
        case "POST":
            return post(url, params)

    }
}
