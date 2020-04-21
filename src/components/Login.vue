<template>
    <div class="login_container">
        <div class="login_box">
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
    </div>    
</template>




<script>
export default {
    data() {
        return {
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
        login(){
            this.$refs.loginFormRef.validate(vail => {
                if(!vail) return;
                this.$axios.post("/login",this.loginForm).
                    then(res=>{
                        console.log(res);
                        return this.$notify({title: '成功',message: '这是一条成功的提示消息',type: 'success'})
                        })
            })
        }
    }
    
}
</script>




<style  scoped>

.login_container {
    background-color: bisque;
    height: 100%;
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