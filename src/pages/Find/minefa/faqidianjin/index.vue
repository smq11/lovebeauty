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
        <div>
            <div class="daren"  v-for="ele in arr">
                <div class="daren-title">
                    <div>

                        <img :src="ele.pic" alt="">

                    </div>
                    <div>
                        <div>

                        <p>{{ele.author}}</p>
                        <p>{{ele.time}}</p>
                        <p>{{ele.fans}}粉丝</p>
                        </div>
                    </div>
                </div>
                <div class="daren-img">
                    <img :src="ele.img" alt="">
                </div>
        </div>
        </div>

    </div>
</template>

<script>
    import api from '../../../../api'
    export default {
        name: "index",
        data(){
            return{
                arr:[],
            }
        },
        methods:{
            back(){
                this.$router.back();
            }
        },
        mounted() {
            console.log(this.$route.params.id);
            api.getFindfaqidianjin({
                id:this.$route.params.id
            }).then(res=>{
                console.log(res)
                this.arr = res.data.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .head{
        padding-top: 10px;
        display: flex;
        height: 40px;
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
    .daren{
        width: 94%;
        margin-left: 3%;
        height: 240px;
        border: 1px solid #f5f2f0;
        border-radius: 5px;
        margin-top: 20px;
        .daren-title{
            img {
                width: 60px;
                height: 60px;
            }
            display: flex;
            position: relative;
            top:-10px;
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
        .daren-img{
            width: 100%;
            height: 80%;
            img{
                width: 100%;
                height: 100%;
            }
        }

    }


</style>