<template>
    <ul class="lists" v-if='data.length>0'>
        <li v-for='(item,index) in data' :key='index'>
            <div class="list_left">
                <div class="user_head">
                    <img :src="item.user.image" alt="">
                </div>
                <div class="user_msg">
                    <p class="name_msg">{{item.user.name}}</p>
                    <p class="age_msg">
                        <span  style="margin-right:10px">{{item.user.msg.sex}}</span> 
                        <span  style="margin-right:10px">{{item.user.msg.age}}</span> 
                        <span v-if="item.user.msg.jifu" style="margin-right:10px">{{item.user.msg.jifu}}</span> 
                    </p>
                    
                </div>
            </div>
            <div class="list_right">
                <span v-if="item.guanzhu" :class="{guanzhu:true,success:true}">已关注</span>
                <span v-else  :class="{guanzhu:true,cancel:true}">未关注</span>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name:'GzAndList',
        data(){
            return{
        
            }
        },
        props:{
            data:{
                type:Array
            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="less" scoped>
     .lists{
         width: 100%;
         overflow: hidden;
         li{
            width: 100%;
            height:80px;
            padding: 15px 8px;
            margin: 20px 0;
            box-sizing: border-box;
            box-shadow: 0 2px 15px #EAEAEA;
            display: flex;
            .list_left{
                flex:8;
                height: 100%;
                font-size: 15px;
                .user_head{
                    width: 20%;
                    height: 100%;
                    float: left;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .user_msg{
                    width: 80%;
                    height: 100%;
                    float: left;
                    text-align: left;
                    padding: 5px 10px 10px;
                    box-sizing: border-box;

                }

            }
            .list_right{
                flex:2;
                height: 50px;
                line-height: 50px;
                margin-left: 10px;
                .guanzhu{
                    width: 37px;
                    height: 12px;
                    font-size: 13px;
                    padding:3px 12px;
                    border-radius: 15px;
                }
                .success{
                    color:#FF7698;
                    border: 2px solid #FF7698
                }
                .cancel{
                    color:gray;
                    border: 2px solid gray;
                }
            }

        }
    }
</style>