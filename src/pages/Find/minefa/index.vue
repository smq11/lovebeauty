<template>
    <div>

    <div class="head">
        <div class="head-left" @click="back">
            <i class="iconfont">&#xe691;</i>
        </div>
        <div class="head-center">
           <ul>
               <li><p>我发起的</p></li>
               <li><p>我参与的</p></li>
           </ul>
        </div>
        <div class="head-right">
            <i class="iconfont">&#xe604;</i>
        </div>
    </div>
        <router-link to="/faqidianjin/1001">

        <div class="nav">
            <div class="nav-left">
                <img :src="pic" alt="">
            </div>
            <div class="nav-right">
                <p>美丽的一天</p>
                <p><span><i class="iconfont">&#xe6b7;</i>9天前</span>
                <span><i class="iconfont">&#xe6de;</i>3120</span>
                <span><i class="iconfont">&#xe747;</i>30</span>
                <span><i class="iconfont">&#xe634;</i>500</span></p>
            </div>
        </div>
        </router-link>
    </div>
</template>

<script>
    import pic from '../../../assets/findimg/8.png'
    export default {
        name: "index",
        data(){
            return{
                pic:pic
            }
        },
        methods:{
            back(){
                this.$router.push('/find')
            }
        }
    }
</script>

<style lang="less" scoped>
    .head{
        padding-top: 10px;
        display: flex;
        height: 150px;
        background: #FF406F;
    i{
        font-size: 24px;
        color: white;
    }
    .head-left{
        flex: 1;
    }
    .head-center{
        flex: 8;
        ul{
            text-align: center;
            li:nth-child(1){
                border-bottom: 2px solid white;
            }
        }
    p{
        font-size: 20px;
        color: white;
    }
        li{
            float: left;
            margin-left: 40px;
        }
    }
    .head-right{
        flex: 1;
    }
    }
    .nav{
        width: 97%;
        margin: 0 1.5%;
        height: 170px;
        background: white;
        position: absolute;
        top: 80px;
        box-shadow: 5px 10px 30px rgba(0,0,0,.2);
        border-radius: 5px;
        overflow: hidden;

    img{
        width: 100%;
        height: 130px;
    }
    .nav-left{
        width: 50%;
        height: 50%;
        margin-top: 26px;
        float: left;
        img{
            width: 150px;
            height: 75px;

        }
    }

    .nav-right{
        padding-top: 26px;
        box-sizing: border-box;
        width: 50%;
        float: left;
        p:nth-child(1){
            font-size: 18px;
            position: relative;
            top: 7px;
            color: black;
        }
        p:nth-child(2){
            position: relative;
            top: 35px;
        }
        span{
            font-size: 10px;
            margin-left: 2px;
            color: black;
        }
        i{
            font-size: 10px;
        }

    }

    }
</style>