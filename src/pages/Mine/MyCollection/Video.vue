<template>
    <div v-if='videos.length>0'>
        <div class="videoBox"  v-for="(item,index) in videos" :key='index'>
            <div class="video_user">
                <div class="user">
                    <span><img :src="item.head" alt=""></span>
                    <span>{{item.user}}</span>
                </div>
                <div class="time">{{item.time}}</div>
            </div>
            <div class="video">
                <video :src="item.video_src" controls></video>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name:'Video',
        props:{
            videos:{
                type:Array,
                required:true
            }
        }
    }
</script>

<style lang="less" scoped>
    .videoBox{
        width: 355px;
        height: 260px;
        margin: 0 auto 20px;
        box-shadow: 0 2px 15px #EAEAEA;
        border-radius: 5px;
        overflow: hidden;
        .video_user{
            width: 100%;
            color: #acacac;
            text-align: left;
            padding: 5px;
            margin: 10px 0;
            box-sizing: border-box;
            overflow: hidden;
            .user{
                width: 50%;
                height: 25px;
                line-height: 25px;
                float: left;
                text-align: left;
                padding: 0 10px;
                box-sizing: border-box;
                img{
                    width: 25px;
                    height: 25px;
                    margin-right: 5px;
                }
            }
            .time{
                width: 50%;
                height: 25px;
                line-height: 25px;
                float:right;
                text-align: right;
            }
        }
        .video{
            width: 336px;
            height: 158px;
            margin: 0 auto;
            video{
                width: 336px;

            }
        }
    }

</style>