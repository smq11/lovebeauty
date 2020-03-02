<template>
    <div>
        <div class="head">
            <div class="head-left">
                <i class="iconfont" @click="back">&#xe691;</i>
            </div>
            <div class="head-center">
                <p >最热商品</p>
            </div>
            <div class="head-right">

            </div>
        </div>
        <div class="nav">
            <img :src="pic" alt="">
            <div class="nav-desc">
                <p>最热商品</p>
                <p>Top 50</p>
            </div>
        </div>
        <div class="content">

        <div class="topicdesc" v-for="(ele,index) in array" v-if="index<2">
            <img :src="ele.pic" alt="">
            <p>{{ele.title}}</p>
            <p>{{ele.author}}</p>
        </div>


        </div>
        <div class="bottom-shop">
            <p><span><i class="iconfont">&#xe634;</i></span> LOL直选 <span><i class="iconfont">&#xe634;</i></span></p>
            <div class="lol-zhi" v-for="(ele,data) in data">
                <div >
                    <img :src="ele.img" alt="">
                </div>
                <div>
                    <p>{{ele.title}}</p>
                    <p>{{ele.address}}</p>
                    <p>￥{{ele.price}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import pic from '../../../assets/findimg/4.png'
    import api from "../../../api";

    export default {
        name: "index",
        data(){
            return{
                pic:pic,
                array:[],
                data:[],
            }
        },
        methods:{
            back(){
                this.$router.push('/find')
            }
        },
        created() {

            api.getFindimg().then(res=>{

                this.array = res.data.data;
            })
        },
        mounted() {
            api.getFindshangpin().then(res=>{
                console.log(res);

                this.data = res.data.data;
            })
            window.onscroll = ()=> {
                if (document.documentElement.scrollTop +20>document.documentElement.scrollHeight-document.documentElement.clientHeight){
                    api.getFindshangpin().then(res=>{
                        this.data = this.data.concat(res.data.data);
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
        margin-top: 100px;}
    .topicdesc{
        margin-top: 12px;
        margin-left: 3.5%;
        width: 45% ;
        height: 170px;
        float: left;
        border: 1px solid #f5f2f0;
        border-radius: 5px;
        p{
            font-size: 8px;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        img{
            height: 78%;
            width: 100%;
        }
    }
    .bottom-shop{
        margin-top: 20px;
        i{
            font-size: 5px;
            color: red;
        }
        div{
            float: left;
        }
       
    }
    .lol-zhi{
        margin-top: 20px;
        width: 94%;
        margin-left: 3%;
        height: 120px;
        border: 1px solid #f5f2f0;
        box-shadow: 0 2px 3px rgba(0,0,0,.2);
        div{
            float: left;
        }
        div:nth-child(1){
            width: 30%;
            img{
                width: 100%;
                height: 80%;
            }
        }
        div:nth-child(2){
            width: 70%;
            text-align: left;
            padding-top: 20px;
            box-sizing: border-box;
            font-size: 12px;
        }
    }

</style>