<template>
  <div>
    <div class="header">
      <span class="backTo" @click="backToBtn">&lt;</span>
      <span class="title">帮助</span>
    </div>
    <div class="helpingBox">
      <ul>
        <li>
          <span>功能介绍</span>
        </li>
        <li>
          <span>常见问题</span>
        </li>
        <li>
          <span>成长值记录与原则</span>
        </li>
        <li>
          <span>loveliness认证说明</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Helping",
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
.helpingBox {
  ul {
    margin-top: 40px;
    box-shadow: 2px 2px 20px #ccc;
    li {
      height: 35px;
      line-height: 35px;
      text-align: left;
      border-top: solid 0.5px #f5f5f5;
      border-bottom: solid 1px #f5f5f5;
      span {
        margin-left: 20px;
        font-size: 14px;
        color: gray;
      }
    }
  }
}
</style>