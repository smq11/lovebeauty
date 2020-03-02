<template>
    <div>
        <div class="productMsgTitle">
            <span>{{this.title}}</span>
            <i class='iconfont productBack' @click="back">&#xe691;</i>
        </div> 
        <GzAndFsList :data='this.data'/>
    </div>
</template>

<script>
    import GzAndFsList from './GzAndFsList'
    export default {
        name:'GzAndFs',
        data(){
            return {
                title:'',
                data:[]
            }
        },
        methods:{
            back(){
                this.$router.replace('/mine')
            }
        },
        components:{
            GzAndFsList
        },
        mounted(){
            this.$api.getFsAndGz({id:this.$route.params.id})
            .then(res=>{
                if(res.status === 200){
                    console.log(res.data.data);
                    if(res.data.type==1){
                        this.title='关注'
                    } else {
                        this.title='粉丝'
                    }
                    this.data = res.data.data;
                }else {
                    console.log('请求失败')
                }
            })
            .catch(error =>{
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
        top:1px;
        left:15px;
    }

</style>