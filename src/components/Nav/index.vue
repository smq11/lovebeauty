<template>
    <div class="NavBox"> 
        <router-link exact to='/' class="Nav" tag='div'>
            <p class="Top"><i class="iconfont NavIcon">&#xe723;</i></p>
            <p class="Bottom">首页</p>
        </router-link>
        <router-link to='/sorts' class="Nav" tag='div'>
            <p class="Top"><i class="iconfont NavIcon1">&#xe66b;</i></p>
            <p class="Bottom">分类</p>
        </router-link>
        <router-link to='/find' class="Nav" tag='div'>
            <p class="Top"><i class="iconfont NavIcon">&#xe6de;</i></p>
            <p class="Bottom">发现</p>
        </router-link>
        <router-link to='/mine' class="Nav" tag='div'>
            <p class="Top"><i class="iconfont NavIcon">&#xe639;</i></p>
            <p class="Bottom">我的</p>
       
        </router-link>
        
    </div>
</template>

<script>
    export default {
        name:'Nav'
    }
</script>

<style lang='less' scoped>
   
    .NavBox{
        background: #ffffff;
        position: fixed;
        bottom: 0;
        z-index: 999;
        display: flex;
        width:100%;
        height: 60px
    }
    .Nav{
        flex:1;
        height: 100%;
        color:#000;
    }
    
    .NavIcon{
        font-size: 25px;
    }
    .NavIcon1{
        font-size: 23px;
    }
    .Top{
      height: 25px;
    
    }
    .Bottom{
        margin: 5px 0 10px;
        height: 20px;
    }
    .Active{
        color:red;
    }
</style>