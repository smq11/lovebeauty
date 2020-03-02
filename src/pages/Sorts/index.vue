<template>
    <div>
        <div class="SortsTitle">
            <span>分类</span>
            <router-link to='/search' tag="i" class="iconfont SortsSearch">&#xe624;</router-link>
            
        </div>
        <div class="SortsContentBox">


            <!-- 魅力彩妆 -->
            <div class="SortsContent" >
                <div class="ContentTitle">
                    <p><span class="iconfont Icon">&#xe634;</span>魅力彩妆<span class="iconfont Icon">&#xe634;</span></p>
                </div>
                <div class="ContentBox">
                    <div class="Contents ContentsTop">
                        <router-link :to="{name:'sortsContent',params:{sortsid:1001}}"><div class="MeiLiPic1"></div></router-link>
                    </div>
                    <div class="Contents ContentsTop">
                        <router-link :to="{name:'sortsContent',params:{sortsid:1002}}"><div class="MeiLiPic2"></div></router-link>
                    </div>
                    <div class="Contents ContentsTop">
                        <router-link :to="{name:'sortsContent',params:{sortsid:1003}}"><div class="MeiLiPic3"></div></router-link>
                    </div>
                    <div class="Contents ContentsTop">
                        <router-link :to="{name:'sortsContent',params:{sortsid:1004}}"><div class="MeiLiPic4"></div></router-link>
                    </div>
                    <div class="Contents ContentsBottom">
                        <router-link :to="{name:'sortsContent',params:{sortsid:1005}}"><div class="MeiLiPic5"></div></router-link>
                    </div>
                   
                </div>
            </div>


            <!-- 面部护理 -->
            <div class="SortsContent" >
                <div class="ContentTitle">
                     <p><span class="iconfont Icon">&#xe634;</span>面部护理<span class="iconfont Icon">&#xe634;</span></p>
                </div>
                <div class="ContentBox">
                    <div class="Contents ContentsTop">
                        <router-link :to="{name:'sortsContent',params:{sortsid:2001}}"><div class="HuliPic1"></div></router-link>
                    </div>
                    <div class="Contents ContentsTop">
                        <router-link :to="{name:'sortsContent',params:{sortsid:2002}}"><div class="HuliPic2"></div></router-link>
                    </div>
                    <div class="Contents ContentsTop">
                        <router-link :to="{name:'sortsContent',params:{sortsid:2003}}"><div class="HuliPic3"></div></router-link>
                    </div>
                    <div class="Contents ContentsTop">
                        <router-link :to="{name:'sortsContent',params:{sortsid:2004}}"><div class="HuliPic4"></div></router-link>
                    </div>
                    <div class="Contents ContentsBottom">
                        <router-link :to="{name:'sortsContent',params:{sortsid:2005}}"><div class="HuliPic5"></div></router-link>
                    </div>
                    <div class="Contents ContentsBottom">
                        <router-link :to="{name:'sortsContent',params:{sortsid:2006}}"><div class="HuliPic6"></div></router-link>
                    </div>
                </div>
            </div>
            <!-- 香水 -->
            <div class="SortsContent" >
                <div class="ContentTitle">
                     <p><span class="iconfont Icon">&#xe634;</span>香水<span class="iconfont Icon">&#xe634;</span></p>
                </div>
                <div class="ContentBox">
                    <div class="Contents ContentsTop">
                        <router-link :to="{name:'sortsContent',params:{sortsid:3001}}"><div class="XiangShuiPic1"></div></router-link>
                    </div>
                    <div class="Contents ContentsTop">
                        <router-link :to="{name:'sortsContent',params:{sortsid:3002}}"><div class="XiangShuiPic2"></div></router-link>
                    </div>
                    <div class="Contents ContentsTop">
                        <router-link :to="{name:'sortsContent',params:{sortsid:3003}}"><div class="XiangShuiPic3"></div></router-link>
                    </div>
                    <div class="Contents ContentsTop">
                        <router-link :to="{name:'sortsContent',params:{sortsid:3004}}"><div class="XiangShuiPic4"></div></router-link>
                    </div>
                   
                   
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        name:'Sorts'
    }
</script>

<style lang='less'scoped>
    //分类标题
    .SortsTitle{
        font-size: 20px;
        font-family: '宋体';
        color:#fff;
        height: 60px;
        line-height: 60px;
        text-align: center;
        position: relative;
        background: #FF406F;
    }
    .SortsSearch{
        font-size: 25px;
        color:#fff;
        position: absolute;
        top:3px;
        left:15px;
    }
    // 分类内容
    .SortsContentBox{
        width: 100%;
        margin-top: 20px;
    }
    .SortsContent{
        width: 355px;
        margin: 10px auto 30px;
        // 标题
        .ContentTitle{
            font-size: 16px;
            margin-bottom: 13px;
            .Icon{
                font-size: 10px;
                color: #000;
                margin: 0px 5px;
            }
        }
        // 内容
        .ContentBox{
            width: 100%;
            height:175px;
            box-shadow: 0 2px 15px #EAEAEA;
            .Contents{
                float: left;
                width: 20%;
                height: 61px;
                margin: 16px 8.6px 0;
                div{
                    width: 42px;
                    height: 100%;
                    margin: 0 auto;
                    background: url('../../assets/sortsImg/01.png') no-repeat;
                    background-size: 245px;
                }
                // 魅力彩妆
                .MeiLiPic1{
                    background-position: 1px 3px;
                }
                .MeiLiPic2{
                    background-position: -68px 3px;
                }
                .MeiLiPic3{
                    background-position: -137px 3px;
                }
                .MeiLiPic4{
                    background-position: -206px 3px;
                }
                .MeiLiPic5{
                    background-position: 1px -71px;
                }
                // 面部护理
                .HuliPic1{
                    background-position: 1px -189px;
                }
                .HuliPic2{
                    background-position: -68px -189px;
                }
                .HuliPic3{
                    background-position: -135px -189px;
                }
                .HuliPic4{
                    background-position: -204px -189px;
                }
                .HuliPic5{
                    background-position: 1px -263px;
                }   
                .HuliPic6{
                    background-position: -68px -263px;
                }

                // 香水
                .XiangShuiPic1{
                    background-position: 1px -381px;
                }
                .XiangShuiPic2{
                    background-position: -68px -381px;
                }
                .XiangShuiPic3{
                    background-position: -135px -381px;
                }
                .XiangShuiPic4{
                    background-position: -203px -381px;
                }
                
                
            }
        }
        
    }
</style> 
