<template>
    <div>   
        <div class="productMsgTitle">
            <span>收藏</span>
            <i class='iconfont productBack' @click="back">&#xe691;</i>
        </div>
          <tabs  :currentIndex='currentIndex'  @changeCurrentIndex='getIndex'>
            <tab label='话题' index=1> 
                <Topic :topic='this.topic'/>
            </tab>
            <tab label='产品' index=2>
                <Xiangguan :related='this.related'/>
            </tab>
            <tab label='视频' index=3>
                <Video :videos='this.videos'/>
            </tab>
        </tabs>
    </div>
</template>

<script>
    import Topic from '../../Sorts/ProductMsg/Topic';
    import Xiangguan from '../../Sorts/ProductMsg/Xiangguan';
    import Video from './Video.vue'
    export default {
        name:'MyCollection',
        data(){
            return {
                currentIndex:1,
                topic:[],
                related:[],
                videos:[]
            }
        },
        components:{
            Topic,
            Xiangguan,
            Video
        },
        methods:{
            back(){
                this.$router.replace('/mine')
            },
            getIndex(index){
                this.currentIndex = index;
            }
        },
        mounted(){
            this.$api.getCollection({id:10001})
            .then(res=>{
                if(res.status === 200){
                    this.topic = res.data.data.topic;
                    this.videos = res.data.data.video;
                    var arr=[];
                    if(res.data.data.product.length<=2){
                        this.related.push(res.data.data.product)
                    } else {
                        for(var i=0; i<res.data.data.product.length; i++){
                            if(i%2 == 0){
                                arr.push(res.data.data.product[i])
                            } else {
                                arr.push(res.data.data.product[i])
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
        top:1px;
        left:15px;
    }
</style>