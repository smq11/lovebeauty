<template>
    <div v-if="this.product_data">
        <div class="productMsgTitle">
            <span>产品详情</span>
            <i class='iconfont productBack' @click="back">&#xe691;</i>
        </div>
        <!-- 商品整体简介 -->
        <div class="productIntroduce">
            <div class="pImg">
                <img :src="this.product_data.image" alt="">
            </div>
            <div class="pIntroduce">
                <p class="productTitle">
                    {{this.product_data.title}}
                </p>
                <p class="productPrice">
                    参考价：<span>{{this.product_data.cankao_price}}</span>
                </p>
                <div class="productExplain">
                    产品说明书：
                    <div>
                        <p class="explain">  功效：{{this.product_data.gongxiao}}</p>
                        <p class="explain">  妆感：{{this.product_data.zhuanggan}}</p>
                        <p class="explain">  适用季节：{{this.product_data.season}}</p>
                        <p class="explain">  容量：{{this.product_data.volume}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 购买推荐 -->
        <div class='recommend'>
            <p>购买推荐</p>
            <ul class="container">
                <li v-for="(ele,index) in this.tuijian " :key='index'>
                    <div class="pImg1">
                        <img src="http://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/02/20/118/13f5cc79-9283-4225-b6ad-17834512a18a-50_420_531.jpg" alt="">
                    </div>
                    <div class="pIntroduce">
                        <p class="from">{{ele.name}}</p>
                        <p class="price">价格：<span>{{ele.price}}</span></p>
                        <p class="shop">市场价:<span>{{ele.shop}}</span></p>
                        <p class="productComment">
                            <i class="iconfont">&#xe61e;</i>{{ele.comment_num}}人评价
                        </p>
                    </div>
                </li>
            </ul>
          
        </div>


         <tabs  :currentIndex='currentIndex'  @changeCurrentIndex='getIndex'  class="distance">
            <tab label='口碑点评' index=1> 
                <Koubei :comment='this.comment' v-if="this.comment"/>
            </tab>
            <tab label='相关话题' index=2 >
                <Topic :topic='this.topic' />
            </tab>
            <tab label='相关产品' index=3>
                <Xiangguan :related='this.related' />
            </tab>
        </tabs>


    </div>
</template>

<script>
    import Koubei from './Koubei.vue';
    import Topic from './Topic.vue';
    import Xiangguan from './Xiangguan.vue'
    export default {
        name:'ProductMsg',
        data(){
            return {
                product_id:123,
                currentIndex:'1',
                product_data:[],
                tuijian:[],
                // 相关话题
                topic:[],
                // 相关产品
                related:[],
                // 评论
                comment:{}

            }
        },
        components:{
            Koubei,
            Topic,
            Xiangguan
        },
        methods:{
            back(){
                this.$router.back()
            },
            getIndex(index){
                this.currentIndex = index;
            }
        },
        mounted(){
            this.$api.getProductMsg({id:1001})
            .then(res=>{
                if(res.status === 200){
                    console.log(res.data.data);
                    this.product_data = res.data.data;
                    this.tuijian = res.data.data.otherWeb;
                    this.comment = res.data.data.comment;
                    this.topic = res.data.data.topic;
                    var arr=[];
                    if(res.data.data.related.length<=2){
                        this.related.push(res.data.data.related)
                    } else {
                        for(var i=0; i<res.data.data.related.length; i++){
                            if(i%2 == 0){
                                arr.push(res.data.data.related[i])
                            } else {
                                arr.push(res.data.data.related[i])
                                this.related.push(arr);
                                arr=[];
                            }
                        }
                        
                    }
                }else {
                    console.log('请求失败')
                }
               
            })
            .catch(error=>{
                console.log(error)
            })
        }

    }
</script>

<style lang="less" scoped>
    .productMsgTitle{
        font-size: 20px;
        font-family: '宋体';
        color:#fff;
        height: 60px;
        line-height: 60px;
        text-align: center;
        position: relative;
        background: #FF406F;
    }
      .productBack{
        font-size: 25px;
        color:#fff;
        position: absolute;
        top:3px;
        left:15px;
    }
    // 商品介绍
    .productIntroduce{
        width: 100%;
        padding: 10px;
        overflow: hidden;
        text-align: left;
        box-sizing: border-box;
        .pImg{
            float: left;
            margin-right: 15px;
            border: 2px solid #e5e5e5;
            img{
                width: 103px;
                height: 102px;
            }
        }
        .pIntroduce{
            float: left;
            padding: 2px;
            box-sizing: border-box;
            .productTitle{
                font-size: 17px;
                
            
            }
            .productPrice{
                font-size: 12px;
                margin: 5px 0;
            }
            .productExplain{
                font-size: 13px;
                .explain{
                    font-size: 13px;
                    color:#D7D7D7;
                }
            }
        }
        
    }

    // 购买推荐
    .recommend{
        width: 100%;
        margin-top: 10px;
        :first-child{
            text-align: left;
            color:#ACACAC;
            padding-left: 7px;
            margin-bottom: 5px;
        }
        .container{
            width:356px;
            // height: 100px;
            margin: 0 auto;
            box-shadow: 0 5px 5px rgba(0,0,0,.3);
            border: 1px solid #D4D0D1;
            border-radius: 5px;
            li{
                text-align: left;
                padding: 15px;
                position: relative;
                box-sizing: border-box;
                .pImg1{
                    float: left;
                    margin-right: 20px;
                    border: 1px solid #e5e5e5;
                    box-sizing: border-box;
                    padding: 0;
                    img{
                        width: 47px;
                        height: 64px;
                        margin: 0;
                        padding: 0;
                    }
                }
                .from{
                    color:#000;
                    margin-bottom: 5px;
                }
                .price,.shop{
                    color:#ACACAC;
                    font-size: 13px;
                }
                .productComment{
                    color:#ACACAC;
                    font-size: 12px;
                    position: absolute;
                    bottom: 13px;
                    right:9px;
                }
                .shop>span{
                    text-decoration:line-through;
                        
                }
                
            }
           
        }
    }
    // tab切换
    .distance{
        margin-top: 20px;
    }

    // ------------------------------
    
    
</style>