import axios from '../utils/http';
import base from './base';



const api = {
    getFind(params){
        return axios.get(base.baseUrl+base.find,{params});
    },
    getFindimg(params){
        return axios.get(base.baseUrl+base.img,{params})
    },
    getFinddaren(params){
        return axios.get(base.baseUrl+base.daren,{params})
    },
    getFindshangpin(params){
        return axios.get(base.baseUrl+base.shangpin,{params})
    },
    getFindfaqidianjin(params){
        return axios.get(base.baseUrl+base.faqi,{params})
    },
    getFindlogin(params){
        return axios.post(base.baseUrl+base.login,params)
    },
    getFind(params){
        return axios.get(base.baseUrl+base.find,{params});
    },
    // 获取类目列表
    getSorts(params){
        return axios.get(base.baseUrl + base.sorts, {
            params
        })
    },
    // 获取产品详细信息
    getProductMsg(params){
        return axios.get(base.baseUrl + base.productMsg,{
            params
        })
    },
    // 获取我的收藏
    getCollection(params){
        return axios.get(base.baseUrl + base.collection,{
            params
        })
    },
    // 获取粉丝或者关注
    getFsAndGz(params){
        return axios.get(base.baseUrl + base.fsgz,{
            params
        })
    },
    // 1.首页轮播图接口
    getBanner(params){
        return axios.get(base.baseUrl+base.getBanner,{
            params
        })
    },
    // 2.图片接口
    getPic(params){
        return axios.get(base.baseUrl+base.getPic,{
            params
        })
    },
   
   
    // 4.日记接口
    getTip(params){
        return axios.get(base.baseUrl+base.getTip,{
            params
        })
    }
}


export default api;