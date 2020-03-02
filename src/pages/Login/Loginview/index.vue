<template>
    <div>
          <div class="head">
              <img :src="pic" alt="">
              <p>LOVELINESS</p>
          </div>
        <div class="nav">
            <i class="iconfont" :class="flag?'active':''">&#xe639;</i>
            <input type="text" placeholder="用户名" @focus="change1" autofocus v-model="username">
            <p>
            <i class="iconfont" :class="flag?'':'active'">&#xe60c;</i>
                <input type="text" placeholder="密码" @focus="change2" v-model="password">

            </p>
            <p style="margin-top: 20px"><button @click="submit">登录</button></p>
        </div>
        <div class="login-bottom">
            <ul>
                <router-link to="">
                    <li style="border-right: 1px solid">
                        忘记密码
                    </li>

                </router-link>
                    <router-link to="">
                        <li>
                            立即注册>
                        </li>

                    </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    import pic from '../../../assets/findimg/9.png'
    import api from '../../../api'
    import store from '../../../store'
    export default {
        name: "index",
        data(){
            return{
                pic:pic,
                flag:true,
                username:'',
                password:'',
            }
        },
        methods:{
            change1(){
                this.flag = true;
            },
            change2(){
                this.flag = false;

            },
            submit(){
            api.getFindlogin({
                username:this.username,
                password:this.password,
            }).then(res=>{
                console.log(res)
                alert(res.data.msg);
                store.commit('setToken',true);
                this.$router.push('/');
                localStorage.setItem('username',this.username);

            })
            }
        }

    }
</script>

<style lang="less" scoped>
    input{
        outline: none;
        cursor: pointer;
    }
.head{
    margin-top: 50px;
}
    .nav{
        margin-top: 50px;
        input{
            border-bottom: 1px solid rgb(166,166,166);
            width: 200px;
            padding: 0 5px;
            height: 25px;
        }
        .active{
            color: red;
        }
        p{
            margin-top: 10px;

        }
        i{
            font-size: 24px;
            position: relative;
            top:5px;
        }
        button{
            width: 230px;
            height: 30px;
            background: #FF406F;
            border-radius: 5px;

        }
    }
    .login-bottom{
        margin-top: 100px;
        ul{
            width: 80%;
            margin: 0 auto;


        }
        li{
            float: left;
            width: 49%;
        }
    }
</style>