/**
 * 封装网络请求
 */

import axios from "axios"
import qs from "querystring"

// 错误信息响应方法
const errroHandle = (status,other) => {
    switch(status){
        case 400:
            console.log("服务器无法理解请求信息");
            break;
        case 401:
            console.log("用户信息验证失败");
            break;
        case 403:
            console.log("请求被限制");
            break;
        case 404:
            console.log("客户端请求信息错误");
            break;
        default:
            console.log(other);
            break;
    }
}

// 创建axios对象
const instance = axios.create({
    timeout:5000
})

// 挂在全局对象
instance.defaults.baseUrl = "";
// instance.defaults.headers.common['Authorization'] = store.state.token;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 拦截器：请求拦截和响应拦截  post请求参数需要转码
// axios的返回值对象要求是一个promise对象
instance.interceptors.request.use(config =>{
    if(config.method === "post"){
     
        config.data = qs.stringify(config.data)
    }
  
    return config;
},error => Promise.reject(error))

instance.interceptors.response.use(
    // 成功
    response => response.status === 200 ? Promise.resolve(response) :Promise.reject(response),
    // 失败
    error => {
        const { response } = error;
        if(response){
            errroHandle(response.status,response.data)
            return Promise.reject(response)
        }else{
            // 错误信息都无法返回
            console.log("请求被中断");
        }
    }
)

export default instance