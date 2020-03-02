import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Sorts from '../pages/Sorts'
// 分类
import SortsContent from '../pages/Sorts/SortsContentView'
// 商品详情页面
import ProductMsg from '../pages/Sorts/ProductMsg'

import Find from '../pages/Find'
import Mine from '../pages/Mine'
// 我的收藏
import Collection from '../pages/Mine/MyCollection'
// 粉丝和关注
import GzAndFs from '../pages/Mine/GzAndFs'
import Layout from "../pages/Layout";
import Beautbozhu from '../pages/Find/Beautbozhu'
import Beautdaren from '../pages/Find/Beautdaren'
import Beautshangpin from '../pages/Find/Beautshangpin'
import Search from '../components/Search'
import minefa from '../pages/Find/minefa'
import faqidianjin from '../pages/Find/minefa/faqidianjin'
import Login from '../pages/Login/index'
import store from '../store'


import Commend from '../pages/Home/commend'
import Beauty from '../pages/Home/beauty'
import Scan from '../pages/Home/scan'
import NotFound from '../pages/Home/NotFound'

import Vcr from '../pages/Home/beauty/vcr'
import Diary from '../pages/Home/beauty/diary'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    meta:'isLogin',
   children:[
      {
        path: '/',
        name:'home',
        meta:'isLogin',
        component: Home,
        // redirect:"/commend",
        children:[
          {
            path: '/',
            name:'commend',
            meta:'isLogin',
            component: Commend,
          },
          {
            path: '/beauty',
            name:'/beauty',
            component: Beauty,
            redirect:"beauty/vcr",
            children:[
              {
                path: 'vcr',
                name:'vcr',
                component: Vcr,
              },
              {
                path: 'diary',
                name:'diary',
                component: Diary,
              },
            ]
          },
         
          
        ]
      },
      {
        path: 'scan',
        name:'scan',
        component: Scan,
      },
      {
        path: 'sorts',
        name: 'Sorts',
        component:Sorts,
      },
      {
        path: 'find',
        name: 'Find',
        component:Find,

      },
      {
        path: 'mine',
        name: 'Mine',
        component:Mine
      },
    ]
  },
  {
    path: '/beautydaren',
    name:'Beautdaren',
    component: Beautdaren,

  },
  {
    path: '/beautbozhu',
    name:'Beautbozhu',
    component: Beautbozhu,

  },
  {
    path: '/beautshangpin',
    name:'Beautshangpin',
    component: Beautshangpin,

  },
  //发现
  {
    path:'/minefa',
    name:'minefa',
    component:minefa,

  },
  {
    path:'/serach',
    component:Search,
  },
  {
    path: '/faqidianjin/:id',
    name: 'faqidianjin',
    component: faqidianjin,
  },
  {
    path:'/log',
    name:'login',
    component:Login
  },

  // 分类列表信息
  {
    path:'/sorts/content/:sortsid',
    name:'sortsContent',
    component:SortsContent
  },
  // 商品详细信息
  {
    path:'/sorts/productmsg/:productid',
    name:'productMsg',
    component:ProductMsg
  },
  {
    path:'/mine/mycollection',
    name:'Collection',
    component:Collection
  },
  {
    path:'/search',
    name:'Search',
    component:Search
  },
  {
    path:'/mine/gzandfs/:id',
    name:'GzAndFs',
    component:GzAndFs
  },
  {
    path: '/article',
    name:'article',
    component: ()=>import("../pages/Home/commend/listPages/Article"),
  },
  {
    path: '/activity',
    name:'activity',
    component: ()=>import("../pages/Home/commend/listPages/Activity"),
  },
  {
    path: '/signin',
    name:'signin',
    component: ()=>import("../pages/Home/commend/listPages/Signin"),
  },
  {
    path: '/setting',
    name:'setting',
    component: ()=>import("../pages/Home/Setting"),
  },
  {
    path: '/lastpage',
    name:'lastpage',
    component: ()=>import("../pages/Home/Setting/lastpage"),
  },
  {
    path: '/aboutus',
    name:'aboutus',
    component: ()=>import("../pages/Home/aboutUs"),
  },
  {
    path: '/helping',
    name:'helping',
    component: ()=>import("../pages/Home/helping"),
  },
  {
    path:'*',
    name:'notFound',
    component:NotFound
  }


]

const router = new VueRouter({
  linkExactActiveClass:'Active',
  routes,
  mode:'history'
})
router.beforeEach((to,from,next)=>{

  if (to.meta == 'isLogin'){//需要登录
    if (store.state.token){//登录成功
      next();
    }else{
      next('/log');
    }
  }else{
    next();
  }
})

export default router
