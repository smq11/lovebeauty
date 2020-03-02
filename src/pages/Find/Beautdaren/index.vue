<template>
    <div>
        <div class="head">
            <div class="head-left">
                <i class="iconfont" @click="back">&#xe691;</i>
            </div>
            <div class="head-center">
                <p >最美达人</p>
            </div>
            <div class="head-right">

            </div>
        </div>
        <div class="nav">
            <img :src="pic" alt="">
            <div class="nav-desc">
                <p>最美达人</p>
                <p>Top 50</p>
            </div>
        </div>
        <div class="content">
            <router-link to='/sorts/productmsg/1'>

           
            <div class="daren" v-for="ele in array">
                <div class="daren-title">
                    <div>

                    <img :src="ele.pic" alt="">
                    <span>{{ele.author}}</span>
                    </div>
                    <div>

                    <button >关注Ta</button>
                    </div>
                </div>
                <div class="daren-img">
                    <img :src="ele.pic1" alt="">
                </div>
            </div>
             </router-link>
        </div>
    </div>
</template>

<script>
    import pic from '../../../assets/findimg/5.jpg'
    import api from "../../../api";
    export default {
        name: "index",
        data(){
            return{
                pic:pic,
                array:[],
            }
        },
        methods:{
            back(){
                this.$router.push('/find')
            }
        },
        mounted() {
            api.getFinddaren().then(res=>{
                console.log(res);
                this.array = res.data.data;
            })
            window.onscroll = ()=> {
                console.log(document.documentElement.scrollHeight,document.documentElement.clientHeight)
                if (document.documentElement.scrollTop +20>document.documentElement.scrollHeight-document.documentElement.clientHeight){
                    api.getFinddaren().then(res=>{
                        this.array = this.array.concat(res.data.data);
                    })
                }else {

                }
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
            p{
                font-size: 20px;
                color: white;
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
        box-shadow: 5px 10px 30px rgba(0,0,0,.3);
        border-radius: 5px;
        overflow: hidden;

        i{
            font-size: 10px;
        }
        img{
            width: 100%;
            height: 100%;
        }
        .nav-desc{
            position: absolute;
            top:55px;
            left: 94px;
            width: 155px;
            height: 60px;
            background: white;
            line-height: 30px;
            p{
                color: rgb(255,123,153);
            }
            p:nth-child(2){
                font-size: 14px;
            }
        }



    }
    .content{
        height: 100px;
        margin-top: 120px;

        .daren{
            width: 94%;
            margin-left: 3%;
            height: 240px;
            border: 1px solid #f5f2f0;
            border-radius: 5px;
            margin-top: 20px;
            .daren-title{
                img {
                    width: 40px;
                    height: 40px;
                }
                display: flex;
                position: relative;
                top:-10px;
                div:nth-child(1){
                    flex: 3;
                    float: left;

                    span{
                        margin-left: 20px;
                        font-size: 10px;
                    }
                }
                div:nth-child(2){
                    flex: 7;
                    button{
                        position: relative;
                        float: right;

                        top:24px;
                        width: 55px;
                        height: 20px;
                        border-radius: 10px;
                        background: white;
                        border: 1px solid gray;
                    }
                }
            }
            .daren-img{
                width: 100%;
                height: 80%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }

        }
    }
</style>