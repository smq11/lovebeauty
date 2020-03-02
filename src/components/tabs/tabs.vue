

<script>
    import Content from './contents'
    export default {
        name:'Tabs',
        props:{
            currentIndex:{
                type:[Number,String],
                default:'1'
            }
        },
        data(){
            return {
                showContent:[]
            }
        },
        components:{
            Content,
        },
        methods:{
            updateCurrentIndex(index){
                // console.log(this.currentIndex)
                // console.log(index);
                this.$emit('changeCurrentIndex',index)
            }
        },
        mounted(){
            // console.log(this.showContent);
        },
        render(){
            return (
                 <div class='box'> 
                    <ul class='tabs-header'>{ this.$slots.default }</ul>
                    <Content  contents={this.showContent}/>
                </div>
            )
        }
        
     
    }
</script>

<style lang="less" scoped>
    .box{
        margin-top: 20px;
        width: 100%;
        // box-shadow: 0 2px 15px #EAEAEA;
        padding: 0 10px;
        box-sizing: border-box;  
    }
    .tabs-header {
        width: 355px;
        height: 30px;
        line-height: 30px;
        margin: 0 auto 20px;
        display: flex;
        list-style: none;
        padding: 0;

}
</style>