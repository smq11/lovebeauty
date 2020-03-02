<template>
  <!-- <div class="homeBox">
    <div class="homeNavBox">
      <div class="home_nav">
        <router-link exact to="/">
        </router-link>
        <router-link to="/beauty">
        </router-link>
        <router-link to="/scan">
          <span class="scanicon">🍒</span>
        </router-link>
      </div>
    </div> -->
    <div>

     <div class="head">
            <div class="head-left" >
                    <i class="iconfont" @click="goSerach">&#xe624;</i>
            </div>
            <div class="head-center">
                <ul>
                  <li class="list">

                   <router-link exact tag="li" to="/">

                    <p>美丽推荐</p>
        </router-link>
                  </li>
                  <li class="list">

        <router-link tag="li" to="/beauty">
                    <p>学变美</p>

        </router-link>
                  </li>
                </ul>
            </div>
            <router-link exact to="/scan">
                <div class="head-right">
                  <i class="iconfont">&#xe65c;</i>
                </div>

            </router-link>
        </div>
        <div class="nav">
           <Swiper/>
        </div>

    <router-view></router-view>
  </div>
  
</template>

<script>
import Swiper from './commend/swiper'
export default {
  name: "Home",
  methods: {
    goSerach(){
      this.$router.push('/serach')
    }
  },
  components:{
Swiper
  },
  mounted(){
    
    
  }
};
</script>

<style lang="less" scoped>

.head{
    padding-top: 10px;
    display: flex;
    height: 150px;
    background: #FF406F;
    i{
        font-size: 24px;
        color: white;
    }
    .head-left{
        flex: 1;
    }
    .head-center{
            flex: 8;
            // ul{
            //     text-align: center;
            //     li:nth-child(1){
            //         border-bottom: 2px solid white;
            //     }
            // }
            // p{
            //     font-size: 20px;
            //     color: white;
            // }
            .list{
              font-size: 20px;
                float: left;
                color: white;
                margin-left: 50px;
            }
        }
    .head-right{
        flex: 1;
        padding-right: 5px;

    }
}
    .nav{
        width: 97%;
        margin: 0 1.5%;
        height: 170px;
        background: white;
        position: absolute;
        top: 80px;
        box-shadow: 5px 10px 30px rgba(0,0,0,.2);
        border-radius: 5px;
        overflow: hidden;

            img{
                width: 100%;
                height: 130px;
            }
        
        div{
            /*padding: 10px 0 10px 10px;*/
            /*box-sizing: border-box;*/
            float: left;
        }

        p{
            color: #FF406F;
            font-size: 14px;
        }
    }
.router-link-active {
  font-size: 20px;
  border-bottom: 2px solid white
}
</style>