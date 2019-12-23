<template>

    <div class="main-navigation">

        <div class="view-container">

            <div class="view-area cols24">

                <div class="logo">
                    <img id="logo" src="../assets/images/logo.png" style=""  />

                    <div id="hamburger" onclick="trans()">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </div>

                </div>



                <div id="main-menu" class="collapse navbar-collapse">
                    <ul class="menu">
                        <!--<li><a href="/">首页</a><span></span></li>-->
                        <!--<li><a href="/about">关于我们</a><span></span></li>-->
                        <!--<li><a href="/product">产品与服务</a><span></span></li>-->
                        <!--<li><a href="/contacts">联系我们</a><span></span></li>-->
                        <li><a href="/guide">文档</a><span></span></li>
                        <li><a href="/template">模板</a><span></span></li>
                        <li><a href="/community">社区</a><span></span></li>

                        <li class="nav-log">
                            <a href="javascript:void(0);" onclick="doAsk(userMenu);">
                                登录/注册
                                <span></span>
                            </a>
                        </li>

                    </ul>
                </div>



                <%if(logPanel){%>
                <div class="user-logger">


                    <ul class="user-box">
                        <li>
                            <%if(msg.logged == true){%>
                            <div class="btn-group">
                                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">发起
                                    <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="/editor">分享经验</a></li>
                                    <li><a href="#">发起问题</a></li>
                                    <li><a href="#">Bug反馈</a></li>
                                    <%if(msg.ifAdmin){%>
                                    <li><a href="/editor/document">编写文档</a></li>
                                    <%}%>
                                </ul>
                            </div>
                            <%}%>

                        </li>

                        <li>
                            <a id="selectMenu" href="javascript:void(0);" onclick="doAsk(userMenu);">
                                <%if(msg.logged == false){%>
                                <i class="fa fa-user-circle resize"></i>
                                <span class="log-btn">登录/注册</span>
                                <%}%>

                                <%if(msg.logged == true){%>
                                <img class="header-portrait" src="<%- msg.userData.portrait %>">
                                <span class="log-btn"></span>
                                <%}%>
                            </a>
                            <%if(msg.logged == true){%>
                            <dl class="select-board board-closed">
                                <dd><a href="/personal/<%- msg.userData.userid %>">个人中心</a></dd>
                                <dd><a onclick="users.logout();">退出登录</a></dd>
                            </dl>
                            <%}%>
                        </li>
                    </ul>


                </div>
                <%}else{%>
                <%}%>


            </div>

        </div>

    </div>

</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style scoped>

    /*------------导航栏-----------*/


    a{
        text-decoration:none;
    }

    .logo{
        float: left;
    }

    #logo{
        float: left;
        display:block;
        height:64px;
        width:240px;
    }

    #main-menu{
        position:relative;
    }

    .main-navigation{
        text-align:center;
        border-top:1px solid #2188b6;
        border-bottom:2px solid #2188b6;
        background-color: #2188b6;
    }

    .navbar-header i{
        height:56px;
        line-height:56px;
        font-size:2em;
        cursor:pointer;
        float:right;
    }

    .main-navigation .menu{
        padding:0;
        padding-bottom: 2px;
        margin:0;
    }

    .menu li{
        list-style:none;
        display:inline-block;
        position:relative;
    }

    .menu li:after{
        border-bottom:2px solid #e67e22;
        margin-bottom:-2px;
    }



    .menu li a{
        color:white;
        font-size:16px;
        font-weight:400;
        line-height:60px;
        display:block;
        padding:0 21px;
        text-decoration:none;
    }

    .menu li:hover{
        color:#e67e22;
    }

    .nav-log{
        display: none !important;
    }


    .nav-current{
        border-bottom:2px solid #e67e22;
    }

    #main-menu{
        overflow:hidden;
    }

    .navbar-header{
        display:none;
    }


    .menu li span{
        display:block;
        position:absolute;
        width:0px;
        height:0px;
        background:#e67e22;
        top:60px;
        left:50%;
    }

    /*-----汉堡---------*/
    #hamburger{
        display:none;
        float: right;
        width:50px;
        line-height: 50px;
        padding-top: 10px;
    }

    #hamburger:hover{
        cursor:pointer;
        background-color:transparent;
    }

    #hamburger:hover > .line{
        background-color:#E04343;
    }

    #hamburger .line{
        width: 35px;
        height: 5px;
        background-color: rgba(0,0,0,0.4);
        display: block;
        margin: 8px auto;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }


    #hamburger.is-active{
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        -webkit-transition-delay: 0.6s;
        -o-transition-delay: 0.6s;
        transition-delay: 0.6s;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    #hamburger.is-active .line:nth-child(2){
        width: 0;
    }

    #hamburger.is-active .line:nth-child(1),
    #hamburger.is-active .line:nth-child(3){
        -webkit-transition-delay: 0.3s;
        -o-transition-delay: 0.3s;
        transition-delay: 0.3s;
    }

    #hamburger.is-active .line:nth-child(1){
        -webkit-transform: translateY(13px);
        -ms-transform: translateY(13px);
        -o-transform: translateY(13px);
        transform: translateY(13px);
    }

    #hamburger.is-active .line:nth-child(3){
        -webkit-transform: translateY(-13px) rotate(90deg);
        -ms-transform: translateY(-13px) rotate(90deg);
        -o-transform: translateY(-13px) rotate(90deg);
        transform: translateY(-13px) rotate(90deg);
    }



    /*-----------导航栏用户按钮---------*/

    .user-logger{
        position:absolute;
        right: 0;
        top: 16px;
    }

    .user-logger .user-box{
        list-style: none;
        margin:0;
        padding:0;
        vertical-align: middle;
    }

    .user-box a{
        display: block;
        text-decoration: none !important;
        white-space: nowrap;
    }

    .user-logger .user-box > li{
        display:inline-block;
        list-style: none;
        vertical-align: middle;
        margin-right:8px;
    }

    .user-logger .resize{
        font-size: 35px;
        color: #fff;
    }

    .user-logger .log-btn{
        font-size: 17px;
        color:#fff;
        vertical-align: super;
    }

    .user-logger .log-btn:hover{
        text-decoration: none !important;
    }

    .title-username{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 70px;
    }

    .header-portrait{
        display:inline-block;
        width:35px;
        height:35px;
        border-radius: 50%;
    }

    .header-portrait + .log-btn{
        vertical-align: baseline;
    }


    @media screen and (max-width:768px){

        #hamburger{
            display: block;
        }

        .user-logger{
            display: none;
        }

        #main-menu{
            position: absolute;
            left:0;
            right:0;
            background-color: #2188b6;
            width:100%;
            margin:0;
            z-index: 1000;
        }

        .menu li{
            display:block;
        }

        .logo{
            overflow: hidden;
            float:none;
        }

        .main-navigation {
            margin: 0;
        }

        .nav-log{
            display: inline-block !important;
        }

        .icon{
            margin-top:15px;
        }

        .reWidth{
            width: auto;
        }


    }


</style>