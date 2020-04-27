<template>

    <div>

        <div class="dialog" v-show="logShow">

            <div class="dialog-title-content clearfix"><span class="dialog-title">登录</span>
                <i v-on:click="closeLogPanel" class="fa fa-close dialog-close"></i>
            </div>

            <div class="dialog-body clearfix"><div class="log-content">
                <div class="field-text">
                <span class="input-icon-left">
                    <i class="fa fa-user-circle"></i>
                </span>
                    <input type="text" name="user_name" placeholder="输入你的邮箱账号" v-model="logData.username">
                </div>

                <div class="field-text">
                <span class="input-icon-left">
                    <i class="fa fa-lock"></i>
                </span>
                    <input type="password" name="password" placeholder="输入你的密码" v-model="logData.password">
                </div>
            </div><div class="turn-to"><a href="javascript:void(0);" v-on:click="togglePanel">没有账号? 点此注册</a></div></div>

            <div class="dialog-resize-helper dialog-resize-s"></div>
            <div class="dialog-resize-helper dialog-resize-x"></div>
            <div class="dialog-resize-helper dialog-resize-z"></div>
            <div class="dialog-resize-helper dialog-resize-y"></div>

            <div class="dialog-footer clearfix"><div class="show-msg"></div><div class="dialog-button-content">
                <button v-on:click="login">登录</button>
                <button v-on:click="closeLogPanel">取消</button>
            </div></div>

        </div>



        <div class="dialog" v-show="registerShow">

            <div class="dialog-title-content clearfix"><span class="dialog-title">注册</span>
                <i v-on:click="closeRegisterPanel" class="fa fa-close dialog-close"></i>
            </div>

            <div class="dialog-body clearfix"><div class="log-content">
                <div class="field-text">
                <span class="input-icon-left">
                    <i class="fa fa-user-circle"></i>
                </span>
                    <input type="text" name="nickname" placeholder="给自己取一个昵称" v-model="registerData.nickname">
                </div>
                <div class="field-text">
                <span class="input-icon-left">
                    <i class="fa fa-envelope"></i>
                </span>
                    <input type="text" name="email" placeholder="输入你的邮箱" v-model="registerData.email">
                </div>

                <div class="field-text">
                <span class="input-icon-left">
                    <i class="fa fa-lock"></i>
                </span>
                    <input type="password" name="password" placeholder="设置你的密码" v-model="registerData.password">
                </div>

                <div class="field-text">
                <span class="input-icon-left">
                    <i class="fa fa-lock"></i>
                </span>
                    <input type="password" name="re-password" placeholder="确认你的密码" v-model="registerData.repassword" v-on:blur="registerChecker">
                </div>
            </div>
                <div class="turn-to"><a href="javascript:void(0);" v-on:click="togglePanel">已有账号? 点此登录</a></div></div>

            <div class="dialog-resize-helper dialog-resize-s"></div>
            <div class="dialog-resize-helper dialog-resize-x"></div>
            <div class="dialog-resize-helper dialog-resize-z"></div>
            <div class="dialog-resize-helper dialog-resize-y"></div>

            <div class="dialog-footer clearfix"><div class="show-msg">{{warn}}</div><div class="dialog-button-content">
                <button v-on:click="register">注册</button>
                <button v-on:click="closeRegisterPanel">取消</button>
            </div></div>

        </div>



    </div>

</template>

<script>
    export default {
        name: "LogPanel",
        data (){
            return {
                logShow : false,
                registerShow : false,
                warn : '',
                registerData : {
                    nickname : '',
                    email : '',
                    password : '',
                    repassword : ''
                },
                logData : {
                    username : '',
                    password : ''
                }
            }
        },
        methods : {
            openLogPanel : function () {
                this.logShow = true;
            },
            closeLogPanel : function () {
                this.logShow = false;
            },
            openRegisterPanel : function () {
                this.registerShow = true;
            },
            closeRegisterPanel : function () {
                this.registerShow = false;
            },
            togglePanel (){
                this.logShow = !this.logShow;
                this.registerShow = !this.registerShow;
            },
            login () {
                if(this.loginChecker()){
                    this.$axios({
                        url : "/login",
                        method : "POST",
                        data : this.logData
                    }).then(value => {
                        console.log(value);
                        this.warn = value.data.message;
                        if(value.data.status == 0){
                            alert('登录失败!');
                        }else if(value.data.status == 1){
                            alert('登录成功!');
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }
            },
            register (){

                if(this.registerChecker()){
                    this.$axios({
                        url : "/register",
                        method : "POST",
                        data : this.registerData
                    }).then(value => {
                        console.log(value);
                        this.warn = value.data.message;
                        if(value.data.status == 0){
                            alert('注册失败!');
                        }else if(value.data.status == 1){
                            alert('注册成功!');
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }

            },
            registerChecker(){
                if(!this.registerData.nickname){
                    this.warn = "请填写您的昵称!";
                    return false;
                }
                if(!this.registerData.email){
                    this.warn = "请输入您的邮箱!";
                    return false;
                }

                if(!this.registerData.password){
                    this.warn = "请输入密码!";
                    return false;
                }

                if(this.registerData.password !== this.registerData.repassword){
                    this.warn = "俩次密码输入不相同";
                    return false;
                }

                this.warn = "";
                return true;
            },
            loginChecker(){
                if(!this.logData.username){
                    this.warn = "请输入您的邮箱或用户名!";
                    return false;
                }

                if(!this.logData.password){
                    this.warn = "请输入密码!";
                    return false;
                }
            }

        }
    }
</script>

<style scoped>

</style>