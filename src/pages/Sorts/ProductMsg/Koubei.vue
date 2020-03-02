<template>
    <div class="koubei" v-if="comment.user">
        <div style="width:100%;height:83px; margin-bottom:15px;">
            <div class="stars">
                <p>{{comment.star}}</p>
                <p style="color:#BBBBBB">
                    <i :class="{iconfont:true,pinkColor:star<=comment.star}" v-for="(star,indx) in [1,2,3,4,5]" :key='indx'>&#xe634;</i>
                </p>
            </div>
            <div class="bar">
                <p>
                五星：
                <span class="whiteBar">
                    <span class="pinkBar five"></span>
                </span>
                </p>
                <p>
                四星：
                <span class="whiteBar">
                    <span class="pinkBar four"></span>
                </span>
                </p>
                <p>
                三星：
                <span class="whiteBar">
                    <span class="pinkBar three"></span>
                </span>
                </p>
                <p>
                二星：
                <span class="whiteBar">
                    <span class="pinkBar two"></span>
                </span>
                </p>
                <p>
                一星：
                <span class="whiteBar">
                    <span class="pinkBar one"></span>
                </span>
                </p>
            </div>
        </div>
        <div class="comment" v-for="(item,index) in comment.user" :key="index" >
            <div class="comment_left">
                <p>
                <img src="../../../assets/icon.png" alt />
                <span>{{item.name}}</span>
                </p>
                <div class="userHead">
                <img :src="item.head" alt />
                </div>
            </div>
            <div class="comment_right">
                <div>{{item.msg}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: "Koubei",
    data(){
        return {
            koubei:{}
        }
    },
    props:{
        comment:{
            type:Object,
            required:true
        }
    },
    mounted(){
    }
    
    };
</script>

<style lang="less" scoped>
    .koubei {
        width: 100%;
        overflow: hidden;
    .stars {
        width: 45%;
        float: left;
        margin-top: 20px;
    }
    .bar {
        width: 55%;
        float: left;
        font-size: 13px;
        text-align: left;
        .whiteBar {
        display: inline-block;
        width: 118px;
        height: 9px;
        background: #fff;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        border: 1px solid #d4d0d1;
        .pinkBar {
            height: 100%;
            display: inline-block;
            background: #ff406f;
            position: absolute;
            top: 0;
            left: 0;
        }
        .one {
            width: 30%;
        }
        .two {
            width: 50%;
        }
        .three {
            width: 50%;
        }
        .four {
            width: 50%;
        }
        .five {
            width: 50%;
        }
        }
    }
    .comment {
        width: 100%;
        text-align: left;
        margin-bottom: 15px;
        padding: 15px;
        box-sizing: border-box;
        overflow: hidden;
        border-top: 1px solid  #acacac;
        .comment_left {
            width: 30%;
            float: left;
            font-size: 15px;
            img {
                width: 12px;
                height: 12px;
                margin-right: 10px;
            }
            .userHead {
                text-align: center;
                margin-top: 5px;
                img {
                width: 41px;
                height: 41px;
                }
            }
        }
        .comment_right {
            width: 70%;
            float: left;
            padding: 3px;
            box-sizing: border-box;
            font-size: 12px;
            color: #acacac;
        }
        }
    }
    .pinkColor{
        color: #FF406F
    }
</style>