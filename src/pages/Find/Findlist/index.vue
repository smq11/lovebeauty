<template>
    <div>
        <div class="head">
            <div class="head-left" >
                    <i class="iconfont" @click="goSerach">&#xe624;</i>
            </div>
            <div class="head-center">
                <p >发现</p>
            </div>
            <router-link exact to="/minefa">
                <div class="head-right">
                    <i class="iconfont">&#xe6de;</i>
                </div>

            </router-link>
        </div>
        <div class="nav">
            <router-link to="/beautbozhu"><div class="nav-left">
                <img :src="pic1" alt="">
                <p>最火话题</p>
            </div></router-link>
            <router-link to="/beautydaren"> <div class="nav-center">
                <img :src="pic2" alt="">
                <p>最美达人</p>
            </div></router-link>
           <router-link to="/beautshangpin">

            <div class="nav-right">
                <img :src="pic3" alt="">
                <p>最热商品</p>
            </div>
           </router-link>
        </div>
        <div class="content">
            <div v-for="ele in arr" class="content-dec">
                <p>{{ele.title}}</p>
                <p><span>{{ele.talk}}个话题</span><span>{{ele.hot}}个热议</span></p>
                <img :src="ele.pic" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import pic1 from '../../../assets/findimg/1.png'
    import pic2 from '../../../assets/findimg/2.png'
    import pic3 from '../../../assets/findimg/3.png'
    import api from '../../../api'
    export default {
        name: "index",
        data(){
            return{
                pic1:pic1,
                pic2:pic2,
                pic3:pic3,
                arr:[]
            }
        },
        methods:{
            goSerach(){
            this.$router.push('/serach')
            }
        },
        mounted() {
            api.getFind().then(res=>{
                console.log(res);
                this.arr = res.data.data
            })
            window.onscroll = ()=> {
                if (document.documentElement.scrollTop +80>document.documentElement.scrollHeight-document.documentElement.clientHeight){
                    api.getFind().then(res=>{
                        this.arr = this.arr.concat(res.data.data);
                    })
                }else {

                }
            }
        },

    }
</script>

<style lang="less" scoped>
.head{
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
        margin: 0 1.5%;
        height: 170px;
        background: white;
        position: absolute;
        top: 100px;
        box-shadow: 5px 10px 30px rgba(0,0,0,.2);
        border-radius: 5px;
        overflow: hidden;

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
            margin-top: 15px;
            float: left;
        }

        p{
            color: #FF406F;
            font-size: 14px;
        }
    }
    .content{
        margin-top: 130px;
        height: 230px;
        .content-dec{
            padding-top: 10px;
            box-sizing: border-box;
            height: 220px;
            margin-top: 20px;
            background: white;
            img{
                margin-top: 20px;
                height: 70%;
                width: 100%;
            }
            span{
                font-size: 12px;
                color: rgb(160,166,166);
            }
            box-shadow: 5px 10px 30px rgba(0,0,0,.2);

        }
    }
</style>