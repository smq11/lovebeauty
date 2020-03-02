<template>
  <div>
    <div class="vcrBox">
      <div class="vcrlist" v-for="(item,i) in vcrList" :key="i">
        <video :id="'myVideo'+item.id" class="video-js">
          <source :src="item.src" type="video/mp4" />
        </video>
        <p>{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vcr",
  data() {
    return {
      vcrList: [
        {
          src: "http://img.yopoo.cn/banner_video.mp4 ",
          id: 0,
          content: "今日推荐|底妆全靠它 春日幻彩",
          pic:
            "https://c.vpimg1.com/upcb/2020/02/23/129/ias_158242239512159_570x273_90.jpg"
        },
        {
          src: "http://img.yopoo.cn/banner_video.mp4 ",
          id: 1,
          content: "今日推荐|女生必备——67KINSD",
          pic:
            "https://d.vpimg1.com/upcb/2020/02/19/107/ias_158212795335445_570x273_90.jpg"
        },
        {
          src: "http://img.yopoo.cn/banner_video.mp4 ",
          content: "今日推荐|底妆全靠它 春日幻彩",
          id: 2,
          pic:
            "https://d.vpimg1.com/upcb/2020/02/17/50/ias_33ed2745-cd62-4876-be5c-a3a3331315d6_570x273_90.jpg"
        },
        {
          src: "http://img.yopoo.cn/banner_video.mp4 ",
          id: 3,
          content: "今日推荐|女生必备——67KINSD",
          pic:
            "https://d.vpimg1.com/upcb/2020/01/19/112/ias_929eccdf-1c06-490b-9c0b-c7864bd74eaa_570x273_90.jpg"
        },
        {
          src: "http://img.yopoo.cn/banner_video.mp4 ",
          id: 4,
          content: "今日推荐|底妆全靠它 春日幻彩",
          pic:
            "https://d.vpimg1.com/upcb/2019/12/04/45/ias_438f6ea4-5fbf-4c37-9c36-7d59a3e7f742_570x273_90.jpg"
        },
        {
          src: "http://img.yopoo.cn/banner_video.mp4 ",
          id: 5,
          content: "今日推荐|女生必备——67KINSD",
          pic:
            "https://d.vpimg1.com/upcb/2019/11/25/87/ias_eee7eb59-050a-4779-bc09-9de05d6530b2_570x273_90.jpg"
        },
        {
          src: "http://img.yopoo.cn/banner_video.mp4 ",
          id: 6,
          content: "今日推荐|底妆全靠它 春日幻彩",
          pic:
            "https://c.vpimg1.com/upcb/2020/01/07/136/ias_c1f916aa-4a10-41c3-a3b9-ef6b8b928742_570x273_90.jpg"
        },
        {
          src: "http://img.yopoo.cn/banner_video.mp4 ",
          id: 7,
          content: "今日推荐|女生必备——67KINSD",
          pic:
            "https://d.vpimg1.com/upcb/2020/02/05/152/ias_384ea974-cf40-4366-93c7-26413029ec9c_570x273_90.jpg"
        }
      ]
    };
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      //初始化视频方法 循环列表获取每个视频的id
      this.vcrList.map((item, i) => {
        let myPlayer = this.$video("myVideo" + item.id, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          width: "375px",
          poster: item.pic
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.vcrBox {
  padding: 30px 0;
  width: 100%;
  .vcrlist {
    margin-bottom: 30px;
    width: 100%;
    p{
      text-align: left;
      padding: 5px 0 5px 3px;
      font-size: 14px;
      letter-spacing: 1.2px;
    }
  }
}
</style>