<template>
    <div class="box" v-if='related.length>0'>
            <div class="sortsContainer"  v-for="(ele,index) in related" :key="index"  >
                <router-link :to="{name:'productMsg',params:{productid:item.id}}" v-for="(item,indx) in ele" :key="indx">
                    <div  :class="{cosmetics:true,distance:indx==0}">
                        <div class='cosmetics_img'>
                            <img :src="item.image" alt="">
                        </div>
                        <p class="cosmetics_msg">{{item.name}}</p>
                        <p class="cosmetics_price">参考价:￥<span>{{item.price}}</span></p>
                        <span class="cosmetics_comment"><i class="iconfont">&#xe61e;</i>{{item.comment_num}}</span>
                    </div>
                </router-link>
            </div>
        </div>
</template>

<script>
    export default {
        name:'Xiangguan',
        props:{
            related:{
                type:Array,
                required:true
            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="less" scoped>
    a{
        color: #000;
    }
    .box{
        width: 100%;
        .sortsContainer{
            width: 325px;
            height: 100%;
            margin: 0 auto;
            background: #fff;
            box-shadow: 0 5px 5px rgba(0,0,0,.3);
            border: 1px solid #D4D0D1;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 20px;
            .cosmetics{
                width: 158px;
                height: 170px;
                float: left;
                position: relative;
                .cosmetics_img>img{
                    width:158px;
                    height: 119px;
                }
                .cosmetics_msg{
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    text-align: left;
                    margin-bottom: 5px;
                    font-size: 14px;
                    padding: 0 10px;
                }
                .cosmetics_price{
                    text-align: left;
                    font-size: 12px;
                    padding: 0 10px;
                }

                .cosmetics_comment{
                    position: absolute;
                    bottom: 5px;
                    right: 0px;
                    font-size: 12px;
                }
            }
        }
        .distance{
             margin-right: 8.5px;
        }
    }
</style>