<template>
    <div style='position:relative'>
        <div class="head">
            <i class="iconfont" @click="back">&#xe691;</i>
            <p>{{title}}</p>
        </div>
        
        <SortsContent :cosmetics='data'/>
    </div>
    
</template>

<script>
    import SortsContent from '../SortsContent'
    export default {
        name:'SortsContentView',
        data(){
            return {
                title:'',
                data:[]
            }
        },
        methods:{
            back(){
                this.$router.push('/sorts')
            }
        },
        components:{
            SortsContent
        },
        mounted(){
            console.log(this.$route.params.sortsid)
            this.$api.getSorts({id:this.$route.params.sortsid})
            .then((res)=>{
                if(res.status === 200){
                    this.title = res.data.data.title;
                    var arr=[];
                    if(res.data.data.cosmetics.length<=2){
                        this.data.push(res.data.data.cosmetics)
                    } else {
                        for(var i=0; i<res.data.data.cosmetics.length; i++){
                            if(i%2 == 0){
                                arr.push(res.data.data.cosmetics[i])
                            } else {
                                arr.push(res.data.data.cosmetics[i])
                                this.data.push(arr);
                                arr=[];
                            }
                        }
                        
                    }
                }else {
                    console.log('请求失败')
                }
            })
            .catch(error=>{
                console.log('请求失败')
            })
        }
    }
</script>

<style scoped lang='less'>
    .head{
        padding-top: 10px;
        height: 150px;
        background: #FF406F;
        text-align: center;
        position: relative;
        i{
            font-size: 24px;
            color: white;
            position: absolute;
            top: 18px;
            left:9px;
        }
        p{
            font-size: 20px;
            color: white;
            font-family: '宋体';
            margin-top: 10px;
        }  
    }
 




    
</style>