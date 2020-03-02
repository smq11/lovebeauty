<template>
    <div>
        <Nav />
        <router-view></router-view>
      
    </div>
</template>

<script>
    import Nav from '../components/Nav'
    export default {
        name:'Layout',
        components:{
            Nav
        }
    }
</script>

<style scoped lang='less'>

</style>