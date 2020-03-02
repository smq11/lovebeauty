<template>
  <div class="beautyBox">
    <div class="titleBox">
      <div class="beauty_nav">
        <router-link to="/beauty/vcr">
          <span>美丽视频</span>
        </router-link>
        <router-link to="/beauty/diary">
          <span>女神日记</span>
        </router-link>
        <span class="blackBox">❤</span>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted(){
    
    
  }
};
</script>

<style lang="less" scoped>
.beautyBox {
  min-height: 500px;
  margin-top: 120px;
  width: 100%;
  .beauty_nav {
    width: 85%;
    background-color: pink;
    span {
      display: inline-block;
      width: 49%;
    }
    .blackBox {
      width: 2%;
      opacity: 0;
      margin-right: -60px;
    }
  }
  .titleBox{
    background-color: pink;
    padding: 10px 0;
  }
}
.Active {
  color: rgb(133, 187, 133);
  font-size: 18px;
}
</style>