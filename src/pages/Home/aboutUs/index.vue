<template>
  <div>
    <div class="header">
      <span class="backTo" @click="backToBtn">&lt;</span>
      <span class="title">loveliness</span>
    </div>
    <div class="helpingBox">
      <ul>
        <li>
          <span>关于loveliness</span>
        </li>
        <li class="logoBox">
          <img :src="pic" alt />
          <p>当前版本：V1.0.0版</p>
        </li>
        <li>
          <span>分享给朋友</span>
        </li>
        <li>
          <span>免责声明</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import pic from "./logo.png";

export default {
  name: "AboutUs",
  data() {
    return {
      pic: pic
    };
  },
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
  background-color: #FF406F;
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
    li {
      height: 35px;
      line-height: 35px;
      text-align: left;
      border-top: solid 0.5px #f5f5f5;
      border-bottom: solid 0.5px #f5f5f5;
      span {
        margin-left: 20px;
        font-size: 14px;
        color: gray;
      }
    }
    li:first-child {
      text-align: center;
      line-height: 45px;
      height: 45px;
    }
    li:last-child {
      box-shadow: 0 1px 5px #ddd;
    }
    li:nth-child(3) {
      box-shadow: 0px -1px 5px #ddd;
    }
    .logoBox {
      height: 150px;
      text-align: center;
      padding: 40px;
      margin-bottom: 20px;
      box-shadow: 0 1px 8px #ddd;
      img {
        width: 35%;
      }
      p {
        color: gray;
        font-size: 14px;
        margin-top: -15px;
      }
    }
  }
}
</style>