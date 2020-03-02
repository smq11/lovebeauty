<template>
  <div>
    <!-- <div class="pageNav">
      <p class="backTo" @click="backTo">&lt;</p>
      <p class="title">活动推荐</p>
      <p class="shareTo">💕</p>
    </div> -->
    <div class="header">
            <span class="backTo"  @click='backTo'>&lt;</span>
            <span class="title">活动推荐</span>
        </div>
    <div class="picBox">
      <ul>
        <li v-for="(item,index) in picList" :key="index">
          <div>
            <img :src="item.pic" alt />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity",
  data() {
    return {
      picList: []
    };
  },
  methods: {
    backTo() {
      this.$router.back();
    }
  },
  mounted() {
    this.$api.getPic().then(res => {
      this.picList = res.data.data;
      console.log(this.picList);
    });
    window.onscroll = () => {
      if (
        document.documentElement.scrollTop + 80 >
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      ) {
        this.$api.getPic().then(res => {
          this.picList = this.picList.concat(res.data.data);
        });
      }
    };
  }
};
</script>

<style lang="less" scoped>
.header{
    height: 60px;
    background-color: #FF406F;
    line-height: 60px;
    .backTo{
        float: left;
        margin-left: 10px;
        font-size: 32px;
        font-weight: 300;
        color: #fff;
    }
    .title{
        color: #fff;
        font-size: 18px;
        margin-right: 22px;
    }
    
}
.pageNav {
  display: flex;
  padding: 10px;
  p {
    flex: 1;
    font-size: 20px;
  }
  .backTo {
    text-align: left;
    font-size: 26px;
  }
  .title {
    color: lightgreen;
  }
  .shareTo {
    text-align: right;
  }
}
.picBox {
  width: 100%;
  padding: 30px 0;
  ul li {
    width: 100%;
    margin: 15px 0;
    div {
      width: 100%;
      height: 200px;
      position: relative;
      border-radius: 8px;
      img {
        width: 90%;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        box-shadow: 5px 5px 15px #909090;
      }
    }
  }
}
</style>