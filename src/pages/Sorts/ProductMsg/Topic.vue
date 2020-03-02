<template>
    <ul class="topic" v-if='topic.length>0'>
        <li class="topicContent"  v-for="(item,index) in topic" :key='index'>
            <div class="topicImg">
                <img :src="item.image" alt="">
            </div>
            <p class="user">
                <img :src="item.head" alt="" class="topicUserImg">
            {{item.user}}</p>
            <span class='zan'> <i class="iconfont">&#xe634;</i>{{item.collect}}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name:'Topic',
        props:{
            topic:{
                type:Array,
                required:true
            }
        }
    }
</script>

<style lang="less" scoped>
    .topic{
        width: 355px;
        margin: 0 auto;
        padding: 10px;
        box-sizing: border-box;
        .topicContent{
            width: 100%;
            position: relative;
            box-shadow: 0 2px 15px #EAEAEA;
            margin-bottom: 20px;
            .topicImg{
                img{
                    width: 100%;
                    height: 158px;
                }
            }
            .user{
                color: #acacac;
                text-align: left;
                padding: 5px;
                box-sizing: border-box;
                .topicUserImg{
                    width: 25px;
                    height: 25px;
                    margin-right: 5px;
                }
            }
            .zan{
                color: #acacac;
                position: absolute;
                bottom: 6px;
                right: 24px;
            }
        }
    }
</style>