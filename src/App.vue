<template>
    <div id="app">
      <div class="header">
        <el-container  style="height: 100vn;border: 1px solid #eee">
  <el-container>
          <el-header height="75px" style="width:1200px;margin: auto; left:0; top:0; right:0; bottom:0; border-left: solid 0px #e6e6e6">
            <el-row type="flex" class="row-bg">
  <el-col :span="6"><div class="grid-content bg-purple"><img style="width:170px;height:40px;margin-top:20px;margin-left:-10px" src="./assets/logo5.png"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"><el-menu :default-openeds="['1']" style="bottom:-13px" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><router-link to="/scan">处理中心</router-link></el-menu-item>
  <el-menu-item index="2">订单管理</el-menu-item>
  <el-menu-item @click="isdia" index="3">订单管理</el-menu-item>
</el-menu>
</div></el-col>
</el-row>
  </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
    </el-container>
    </div>
    <el-dialog
  :visible.sync="dialogVisible"
  width="0%"
  top="40vh"
  center>
  <div class="login_box">
            <div class="avator_box">
                <img id="img" src="./assets/tronscan.png" alt="">
            </div>
            <el-form ref="loginFormRef" :rules="rules" :model="loginForm" class="login_form" label-width="0px">
            <el-form-item prop="username">
            <el-input v-model="loginForm.username" prefix-icon="el-icon-user" clearable></el-input>
            </el-form-item>
            <el-form-item prop="password">
            <el-input  v-model="loginForm.password"  prefix-icon="el-icon-lock" show-password></el-input>
            </el-form-item>
             <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetForm">重置</el-button>
            </el-form-item>
            </el-form>
        </div>    
</el-dialog>
    </div>
  </template>
  
<script>
export default {
    data() {
        return {
            dialogVisible: false,
            loginForm : {
                username:"",
                password:""
        },
        rules :{
            username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
            password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        }
        }
    },
    methods: {
        resetForm(){
            this.$refs.loginFormRef.resetFields();
        },
        isdia(){
            if (window.sessionStorage.getItem('token')){
                this.$router.push("/scan");
                return this.dialogVisible = false;
            }else{
                return this.dialogVisible = true;
            }
        },
        login(){
            this.$refs.loginFormRef.validate(vail => {
                if(!vail) return;
                this.$axios.post("/login",this.loginForm).
                    then(res=>{
                        console.log(res);
                        if(res.data.status == 0){
                            this.dialogVisible = false;
                            window.sessionStorage.setItem('token',res.data.token);
                            this.$router.push("/scan")
                            return this.$notify({title: '成功',message: '登录成功',type: 'success'})
                        }else if(res.data.status == 2){
                            return this.$notify({title: '失败',message: '密码错误',type: 'error'})
                        }else if(res.data.status == 1){
                            return this.$notify({title: '失败',message: '用户不存在',type: 'error'})
                        }
                        })
            })
        }
    }
    
}
</script>
  
<style scope>
html,body {
    margin: 0px;
}
.login_container {
    background-color: bisque;
    height: 100vh;
}

.avator_box {
    position: absolute;
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #eee;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;

}
#img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #eee;
    }
.login_box {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

.btns {
    display: flex;
    justify-content: flex-end;
}

.login_form {
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>