<template>
    <div>
        <div class="SearchTitle">
            <div style="margin:20px 0 0 12px;  overflow: hidden;">
                 <input type="text" class="SearchInput" v-model="msg" @focus="ClearInput">
                <i class='iconfont SearchIcon' >&#xe624;</i>
                <button class="SearchButton" @click="Search">搜索</button> 
            </div>
        </div>
        <div class="SearchOurs">
            <p>大家爱搜</p>
            <ul class="LoveSearch">
                <router-link tag="li" class="LoveSearchContent" to='/'>
                    身体乳 
                </router-link>
                <router-link tag="li" class="LoveSearchContent" to='/'>
                    口红 
                </router-link>
                <router-link tag="li" class="LoveSearchContent" to='/'>
                    控油 
                </router-link>
                <router-link tag="li" class="LoveSearchContent" to='/'>
                    粉底 
                </router-link>
                <router-link tag="li" class="LoveSearchContent" to='/'>
                    精华 
                </router-link>
            </ul>
            <SearchContents />
        </div>
    </div>
</template>

<script>
    import SearchContents from './SearchContents'
    export default {
        name:'Search',
        data(){
            return{
                msg:'请输入要输入的内容'
            }
        },
        methods:{
            ClearInput(){
                this.msg='';
            },
            Search(){
                console.log(1)
            }
        },
        components:{
            SearchContents
        }
    }
</script>

<style scoped lang='less'>
    .SearchTitle{
         overflow: hidden;
        height: 60px;
        line-height: 60px;
        text-align: center;
        position: relative;
        background: #FF406F;
        position: relative;
        .SearchInput{
            float: left;
            width: 292px;
            height: 23px;
            padding-left: 26px;
            box-sizing: border-box;
            border-radius: 3px; 
            color:#FF406F;
        }
        .SearchIcon{
            color:#FF406F;
            font-size: 25px;
            font-weight: 666;
            position: absolute;
            top:3px;
            left: 12px;
        }
        .SearchButton{
            float: left;
            margin-left: 10px;
            width: 48px;
            height: 23px;
            font-family: '宋体';
            font-size: 12px;
            border-radius: 5px;
            color:#FF9AB3;
            background: #ffffff;
        }
    }
    // 大家都爱搜
    .SearchOurs>p{
           text-align: left;
           margin: 8px 0; 
           font-size: 16px;
           color:#939393;
    }
    .LoveSearch{
        width: 100%;
        display: flex;
        justify-content:space-around;
        
        .LoveSearchContent{
            color:#939393;
            flex:1;
            font-size: 12px;
            margin: 0 10px;
            border: 1px solid #FF9AB3;
            border-radius: 5px;
        }
    }

</style>