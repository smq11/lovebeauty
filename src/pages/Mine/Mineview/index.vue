<template>
    <div>
        <div class="head">
            <div class="head-left" >
            </div>
            <div class="head-center">
                <p >我的</p>
            </div>
            <router-link exact to="/setting">
                <div class="head-right">
                    <i class="iconfont">&#xe66b;</i>
                </div>

            </router-link>
        </div>
        <div class="nav" v-if="arr">
            <div class="daren"  v-for="ele in arr">
                <div class="daren-title">
                    <div>
                        <img :src="ele.pic" alt="">
                    </div>
                    <div>
                        <div>
                            <p>{{ele.author}}</p>
                            <p>Beautiful</p>
                        </div>
                    </div>
                </div>

            </div>
                    <div class="fans">
                        <ul>
                            <router-link tag="li" to="/mine/gzandfs/1">
                                <span>关注</span>
                            </router-link>
                            <router-link tag="li" to="/mine/gzandfs/2">

                            <span>粉丝</span>
                            </router-link>
                        </ul>
                    </div>

        </div>
        <div class="content">
                <div>
                    <p><i class="iconfont">&#xe747;</i></p>
                    <p>消息</p>
                </div>
            <div>
                    <p><i class="iconfont">&#xe634;</i></p>
                    <p>收藏</p>
                </div>
            <div>
                <router-link tag="li" to="/signin">
 <p><i class="iconfont">&#xe6b7;</i></p>
                    <p>签到</p>
                </router-link>
                   
                </div>
        </div>

    </div>
</template>

<script>
    import api from "../../../api";
    import pic from '../../../assets/findimg/10.png'

    export default {
        name: "index",
        data(){
            return{
                arr:'',
                pic:pic,
            }
        },
        mounted() {
            api.getFindfaqidianjin({
                id:1001
            }).then(res=>{
                this.arr = res.data.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .head{
        box-sizing: border-box;
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
            padding-right: 5px;
        }
    }

    .nav{
        width: 97%;
        margin: 0;
        height: 170px;
        background: white;
        position: absolute;
        top: 80px;
        box-shadow: 5px 10px 30px rgba(0,0,0,.2);
        border-radius: 5px;

        img{
            width: 100%;
            height: 130px;
        }
        .nav-left{
            width: 30%;
        }
        .nav-center{
            width: 30%;

        }
        .nav-right{
            width: 30%;

        }
        div{
            /*padding: 10px 0 10px 10px;*/
            /*box-sizing: border-box;*/
            margin-left: 2.5%;
            float: left;
        }

        p{
            color: #FF406F;
            font-size: 14px;
        }
    }
    .daren{
        width: 94%;
        margin-left: 3%;
        border: 1px solid #f5f2f0;
        border-radius: 5px;
        .daren-title{
            img {
                width: 60px;
                height: 60px;
            }
            display: flex;
            position: relative;
            top:-10px;
            z-index: 888;
            div:nth-child(1){
                flex: 2;
                float: left;

            }
            div:nth-child(2){
                flex: 7;
                div{
                    float: left;
                    position: relative;
                    top: 10px;
                }
                p{
                    text-align: left;
                    font-size: 14px;
                }
            }
        }


    }

.fans{
    margin: 40px auto;
    // width: 100%;
    width: 350px;
    li{
        float: left;
        width: 50%;
    }
}
    .content{
        height: 70px;
        width: 97%;
        margin: 130px auto;
        box-shadow: 5px 5px 30px rgba(0,0,0,.2);
        border-radius: 8px;
        display: flex;
        div{
            flex: 1;
            margin-top: 17px;
        }

        p{
            font-size: 14px;
        }
        i{
            font-size: 24px;
        }
    }
</style>