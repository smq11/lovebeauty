<template>
  <div>
    <!-- <div class="pageNav">
      <p class="backTo" @click="backTo">&lt;</p>
      <p class="title">精选文章</p>
      <p class="shareTo">💕</p>
    </div> -->
     <div class="header">
            <span class="backTo"  @click='backTo'>&lt;</span>
            <span class="title">精选文章</span>
        </div>
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
export default {
  name: "Article",
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
      console.log(res);
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

<style lang="less" scoped>
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

.userBox {
  padding: 30px 10px;

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
    img {
      width: 100%;
    }
  }
}
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
</style>