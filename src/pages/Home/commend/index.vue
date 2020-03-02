<template>
  <div class="commendBox">
    <!-- 轮播 -->
    
    <!-- /轮播 -->
    <!-- 列表 -->
    <div class="listBox">
      <ul>
        <li @click="article">
          <p>精选文章</p>
          <p>Selected articles</p>
        </li>
        <li @click="activity">
          <p>活动推荐</p>
          <p>Activity recommended</p>
        </li>
        <li @click="signin">
          <p>每日一签</p>
          <p>Daily sign</p>
        </li>
      </ul>
    </div>
    <!-- /列表 -->
    <!-- 标题 -->
    <p class="title">活动专题</p>
    <!-- /标题 -->
    <div class="userBox" v-for="(item,index) in picList" :key="index">
      <!-- 用户信息 -->
      <div class="userInfo">
        <ul>
          <li>
            <img :src="item.pic" alt />
            <span class="uname">{{item.uname}}</span>
          </li>
          <li class="unumber">♥{{item.u_num}}</li>
        </ul>
      </div>
      <!-- /用户信息 -->
      <!-- 图片列表 -->
      <div class="picBox">
        <img :src="item.pic" alt />
      </div>
      <!-- /图片列表 -->
    </div>
  </div>
</template>

<script>
import Swiper from "./swiper";

export default {
  name: "Commend",
  components: {
    Swiper
  },

  data() {
    return {
      picList: []
    };
  },
  methods: {
    article() {
      const _this = this;
      _this.$router.push("/article");
    },
    activity() {
      const _this = this;
      _this.$router.push("/activity");
    },
    signin() {
      const _this = this;
      _this.$router.push("/signin");
    }
  },
  mounted() {
    this.$api.getPic().then(res => {
      console.log(res.data.data);
      this.picList = res.data.data;
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

<style lang="less">
.commendBox{
  margin-top: 120px
}
.swiperBox{
  padding: 0 0 20px;
}
.listBox {
  padding: 1px;
  ul {
    display: flex;
    li {
      flex: 3;
      font-size: 12px;
      vertical-align: middle;
      color: rgb(114, 111, 111);
    }
    li:nth-child(2) {
      flex: 4;
    }
    li:active{
      border-bottom: solid 2px rgb(5, 197, 117);
    }
  }
}
.title {
  padding: 30px 0 10px;
  color: rgb(114, 111, 111);
}
.userInfo {
  width: 100%;
  height: 70px;
  font-size: 12px;
  color: rgb(114, 111, 111);
  ul {
    display: flex;
    li {
      flex: 1;
      text-align: left;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 10px 10px auto 10px;
      }
    }
    .unumber {
      text-align: right;
      margin-top: 30px;
      margin-right: 10px;
    }
  }
}
.picBox {
  width: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  img {
    width: 100%;
  }
}

.Active{
  font-size: 18px;
}
</style>