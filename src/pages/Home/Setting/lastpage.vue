<template>
  <div>
    <div class="header">
      <span class="backTo" @click="backToBtn">&lt;</span>
      <span class="title">ending</span>
    </div>
    <h3>谢谢观看---💗</h3>
    <h3>下次再来---🥂</h3>
    <h3>祝您慢走---🚀</h3>
    <h3>一路顺风---🙆‍♂️</h3>
  </div>
</template>

<script>
export default {
  name: "LastPage",

  methods: {
    backToBtn() {
      this.$router.go(-1);
      console.log(111);
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 55px;
  background-color: rgb(252, 104, 161);
  line-height: 50px;
  .backTo {
    float: left;
    margin-left: 10px;
    font-size: 32px;
    font-weight: 300;
    color: #fff;
  }
  .title {
    color: black;
    font-size: 18px;
    margin-right: 22px;
    color: #fff;
  }
}
</style>