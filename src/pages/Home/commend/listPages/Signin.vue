<template>
  <div>
    <!-- <div class="pageNav">
      <p class="backTo" @click="backTo">&lt;</p>
      <p class="title">每日一签</p>
      <p class="shareTo">💕</p>
    </div> -->
     <div class="header">
            <span class="backTo"  @click='backTo'>&lt;</span>
            <span class="title">每日一签</span>
        </div>

    <Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
      :sundayStart="true"
    ></Calendar>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component";

export default {
  name: "Signin",
  components: {
    Calendar
  },
  data() {
      return{}
  },
  methods: {
    backTo() {
      this.$router.back();
    },
    clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
  }
};
</script>

<style lang="less" scoped>
.pageNav {
  display: flex;
  padding: 10px;
  padding-bottom: 30px;
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