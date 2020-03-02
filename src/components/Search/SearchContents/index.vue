<template>
    <div class="SearchContents">
        <tabs  :currentIndex='currentIndex'  @changeCurrentIndex='getIndex'>
            <tab label='话题' index=1> 
                <div>asd</div>
            </tab>
            <tab label='产品' index=2>
                <div>haha</div>
            </tab>
            <tab label='用户' index=3>
                <div>haha2222</div>
            </tab>
        </tabs>
      
    </div>
    
</template>

<script>
    export default {
        name:'SearchContents',
        data(){
            return {
                currentIndex:'1',
                
            }
        },
        methods:{
            getIndex(index){
                this.currentIndex = index;
            }
        },
        mounted(){
            
        }
    }
</script>

<style scoped lang='less'>
    .SearchContents{
        box-shadow: 0 5px 5px rgba(0,0,0,.3);  
    }
</style>