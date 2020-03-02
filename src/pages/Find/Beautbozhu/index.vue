<template>
    <div>
        <div class="head">
            <div class="head-left">
                    <i class="iconfont" @click="back">&#xe691;</i>
            </div>
            <div class="head-center">
                <p >最火话题</p>
            </div>
            <div class="head-right">

            </div>
        </div>
        <div class="nav">
            <img :src="pic" alt="">
            <div class="nav-desc">
                <p>最火话题</p>
                <p>Top 50</p>
            </div>
        </div>
        <div class="content">
                <p><span><i class="iconfont">&#xe634;</i></span> 话题排行榜 <span><i class="iconfont">&#xe634;</i></span></p>
            <div class="topicdesc" v-for="ele in array">
                <img :src="ele.pic" alt="">
                <p>{{ele.title}}</p>
                <p>{{ele.author}}</p>
            </div>

        </div>
    </div>
</template>

<script>
    import pic from '../../../assets/findimg/7.jpg'
    import api from '../../../api'
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
            api.getFindimg().then(res=>{
                console.log(res);
                this.array = res.data.data;
            })
            window.onscroll = ()=> {
                if (document.documentElement.scrollTop +20>document.documentElement.scrollHeight-document.documentElement.clientHeight){
                    api.getFindimg().then(res=>{
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
        margin-top: 100px;
        span{
            color: #FF406F;
            font-size: 7px;
        }
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
    }
</style>