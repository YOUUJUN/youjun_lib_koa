<template>

    <nav class="main-navigation">

        <div class="view-container navigation-container">

            <div class="view-area cols24">

                <div class="logo">
                    <img id="logo" src="../assets/images/logo.png" style=""  />

                </div>



                <div id="main-menu">
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


                <div class="user-logger">


                    <ul class="user-box">
                        <!--<li>
                            <div class="btn-group">
                                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">发起
                                    <span class="caret"></span>
                                </button>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="/editor">分享经验</a></li>
                                    <li><a href="#">发起问题</a></li>
                                    <li><a href="#">Bug反馈</a></li>
                                    <li><a href="/editor/document">编写文档</a></li>
                                </ul>
                            </div>

                        </li>-->

                        <li>
                            <a id="selectMenu" href="javascript:void(0);" onclick="doAsk(userMenu);">
                                <i class="fa fa-user-circle resize"></i>
                                <span class="log-btn">登录/注册</span>

                                <!--<img class="header-portrait" src="<%- msg.userData.portrait %>">
                                <span class="log-btn"></span>-->
                            </a>
                            <dl class="select-board board-closed">
                                <dd><a href="/personal/<%- msg.userData.userid %>">个人中心</a></dd>
                                <dd><a onclick="users.logout();">退出登录</a></dd>
                            </dl>
                        </li>
                    </ul>


                </div>




            </div>

        </div>

    </nav>

</template>

<script>
    export default {
        name: "navigation",
        methods : {

        }
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

    .navigation-container{
        width :1170px;
        margin:0 auto;
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
        margin-right: 8px;
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




</style>