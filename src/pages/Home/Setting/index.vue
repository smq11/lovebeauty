<template>
    <div>
        <div class="header">
            <span class="backTo"  @click='backToBtn'>&lt;</span>
            <span class="title">设置</span>
        </div>
        <div class="settingBox">
            <ul>
                <router-link to="/mine"><li><span>🍬 </span><span>个人资料</span></li></router-link>
                <router-link to="/lastpage"><li><span>🎀 </span><span>绑定</span></li></router-link>
                <router-link to="/lastpage"><li><span>💌 </span><span>收货地址</span></li></router-link>
                <router-link to="/lastpage"><li><span>💫 </span><span>清除缓存</span></li></router-link>
                <router-link to="/lastpage"><li><span>💎 </span><span>小屏模式</span><span class="myBtn">💍</span></li></router-link>
                <router-link to="/lastpage"><li><span>📤 </span><span>消息推送</span></li></router-link>
                <router-link to="/aboutus"><li><span>🌈 </span><span>关于loveliness</span></li></router-link>
                <router-link to="/helping"><li><span>🌼 </span><span>帮助</span></li></router-link>
                <router-link to="/lastpage"><li><span>👑 </span><span>意见反馈</span></li></router-link>
            </ul>
            <div class="logoutBtn" @click="logoutBtn"><button>退出登录</button></div>
        </div>
    </div>
</template>

<script>
import store from "../../../store";
    export default {
        name:"Setting",
        methods:{
            logoutBtn(){
                localStorage.removeItem('username');
                store.commit('setToken','')
                this.$router.replace('/');//跳转到登录页面
                console.log(111);    
            },
            backToBtn(){
                this.$router.go(-1);
                console.log(111);
            }
        }
    }
</script>

<style lang="less" scoped>
.header{
    height: 60px;
    background-color: #FF406F;
    line-height: 60px;
    .backTo{
        float: left;
        margin-left: 10px;
        font-size: 32px;
        font-weight: 300;
        color: #fff;
    }
    .title{
        color: #fff;
        font-size: 18px;
        margin-right: 22px;
    }
    
}
.settingBox{
    padding: 30px 10px;
    ul li{
        text-align: left;
        height: 45px;
        color: rgb(50, 54, 54);
        .myBtn{
            margin-left: 230px;
        }
    }
    .logoutBtn{
        margin-top: 25px;
        button{
            border-radius: 15px;
            font-size: 16px;
            width: 265px;
            height: 40px;;
            background-color: #FF406F; 
            outline: none;
            color: #fff;
        }
    }
}
</style>