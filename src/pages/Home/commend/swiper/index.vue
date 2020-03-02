<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
          <img :src="item" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
     
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";


export default {
  data() {
    return {
      banners: []
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: 2000,
      observer: true,
      observerParents: true,
      onSlideChangeEnd: function(swiper) {
        swiper.update();
        mySwiper.startAutoplay();
        mySwiper.reLoop();
      },
      
      // 分页器
      pagination: '.swiper-pagination',
      paginationClickable: true,
      
    });
    this.$api.getBanner().then(res => {
      this.banners = res.data.data;
      console.log(this.banners.length);
    });
  }
};
</script>

<style scope>
.swiper-container {
  width: 365px;
  /* height: 200px; */
}
.swiper-wrapper .swiper-slide img {
  width: 365px;
  /* height: 200px; */
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: green;
}
</style>