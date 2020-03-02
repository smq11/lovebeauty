<script>
export default {
    name:"Content",
    data(){
        return{}
    },
    props:{
        contents:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    mounted(){
        // console.log(this.contents);
    },
    render(){
        return (
            <div class='content'>
                {this.contents.map((ele,index)=>{
                    return <div>{ele.active?ele.$slots.default: ''}</div>
                })}
            </div>   
        )
    }
}
</script>
<style scoped>
    .content{
        width: 355px;
        margin: 0 auto;
    }
</style>