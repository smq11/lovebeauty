<template>
  <div>
    <div class="tipBox">
      <ul>
        <li v-for="(item,index) in tipList" :key="index">
          <div class="user">
            <img :src="item.pic" alt />
            <span>{{item.uname}}</span>
          </div>
          <div class="tip">{{item.tip}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tipList: []
    };
  },
  mounted() {
    this.$api.getTip().then(res => {
      console.log(res.data.data);
      this.tipList = res.data.data;
    });
    window.onscroll = () => {
      if (
        document.documentElement.scrollTop + 80 >
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      ) {
        this.$api.getTip().then(res => {
          this.tipList = this.tipList.concat(res.data.data);
        });
      }
    };
  }
};
</script>

<style lang="less" scoped>
.tipBox {
  padding: 20px 15px;
  ul li {
    width: 100%;
    padding: 15px 0;
    border-bottom: dotted 1px purple;
    .user {
      width: 100%;
      height: 70px;
      text-align: left;
      img {
        width: 50px;
        border-radius: 50%;
      }
      span {
        color: purple;
      }
    }
    .tip {
      padding: 5px;
      text-align: left;
      text-indent: 2em;
      color: rgb(20, 15, 20);
      font-size: 14px;
      letter-spacing: 1.1px;
      background-color: rgb(208, 224, 248);
      border-radius: 3px;
      box-shadow: 1px 3px 15px #909090;
    }
  }
  .router-link-active {
    color: rgb(133, 187, 133)!important;
    font-size: 18px;
  }
}
</style>