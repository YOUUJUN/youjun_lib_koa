<template>
    <div id="app">

        <div class="header">

            <navigation></navigation>

        </div>

        <div class="main-page">

            <div class="yj-view yj-container">

                <div class="yj-view-area cols24">



                </div>
            </div>

        </div>


    </div>
</template>

<style>

    @import "../../assets/css/youjun_base.css";



    /*--------------------页面主体----------------------*/


    /*--------------文章container-------------*/

    .main-page{
        margin-top:25px;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    }


    /*--------热门话题--------*/

    .hot-topic-title{
        position:relative;
        background-color: #fff;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,.15);
        padding: 18px 0;
        margin-bottom:25px;
    }

    .hot-topic-title h4{
        margin: 0 0 10px 10px;
        display: inline-block;
    }

    .hot-topic-box{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        list-style: none;
        height: 100%;
        padding: 0;
        margin:0;
        align-items: center;
    }

    .hot-topic-item a{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 12px;
        box-shadow: 0 2px 8px 0 rgba(0,0,0,.08);
        text-decoration: none;
        color: rgba(0,0,0,0.5);
    }

    .hot-topic-item img{
        width: 50px;
        height: 50px;
        margin-right: 15px;
    }

    .hot-topic-item h2{
        font-size: 18px;
        margin: 0;
        align-self: baseline;
    }

    @media screen and (max-width:768px) {

        .hot-topic-item {
            margin-bottom: 15px;
        }

    }


    /*---------文章展示主体-------*/

    .entry-box ul{
        list-style: none;
        text-decoration: none;
        margin:0;
        padding:0;
    }

    .entry-box li{
        list-style: none;
        display: inline-block;
    }


    .timeline-entry-list{
        background-color: #fff;
        box-shadow: 0 2px 8px 0 rgba(0,0,0,.05);
    }

    .entry-list{
        list-style: none;
        text-decoration: none;
        margin:0;
        padding:0;
    }

    .entry-list .item{
        display:block;
        border-bottom: 1px solid rgba(178,186,194,.15);
    }

    .item a{
        text-decoration: none;
    }

    .item a:hover{
        text-decoration: none;
    }

    .entry-list .item:hover{
        background-color: #fafafa;
    }

    .content-box{
        padding: 18px;
    }

    .meta-list{
        font-size: 0;
    }

    .meta-list li {
        font-size: 14px;
        margin-right:6px;
        color: rgba(0,0,0,0.2);
    }

    .meta-list li span {
        color: rgba(0,0,0,0.5);
    }

    .meta-list a span:hover{
        color:#409eff;
    }

    .info-row .title{
        color:rgba(0,0,0,0.7);
        font-size: 17px;
        font-weight: 600;
        margin: 4px 0 8px 0;
        display: block;
    }

    .action-list li{
        margin-right:5px;
    }

    .btn.diy-btn{
        height: 20px;
        line-height: 16px;
        color: #409eff;
        font-size: 13px;
        background-color: #fff;
        opacity: 0.6;
        padding: 0 4px;
    }

    .btn.diy-btn:hover{
        color:#fff;
        background-color: #409eff;
        border-color: #409eff;
    }

    .btn.diy-btn i{
        margin-right:4px;
    }

    .btn.diy-btn.active{
        background-color: #a0cfff;
        border-color: #a0cfff;
    }

    .btn.diy-btn.active i {
        color: red;
    }


    /*--------------右侧展示栏------------*/

    .profile-container{
        box-shadow: 0 2px 6px 0 rgba(0,0,0,.15);
        background-color: #fff;
        margin-bottom:25px;
    }

    .profile{
        display: flex;
        flex-direction: row;
        padding:18px 0 18px 18px;
    }

    .profile .user-img{
    }

    .user-img img{
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        margin-right: 10px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid #fff;
        box-shadow: 0 2px 6px 0 rgba(0,0,0,.15);
    }

    .user-info{
        height:100%;
    }

    .user-info-list{
        list-style: none;
        padding: 0;
        margin: 0 0 0 10px;
    }

    .user-info-list li{
        display:flex;
        margin-bottom: 10px;
    }

    .user-introduction{
        color: rgba(0,0,0,0.6);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 150px;
    }

    .user-info .user-name{
        font-size: 16px;
        font-weight: 600;
        font-family: -apple-system,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Arial,sans-serif;
        color:rgba(0,0,0,0.6);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 150px;
    }

    .user-name:hover{
        text-decoration: none;
        color:#409eff;
    }





    .stat-list{
        display: flex;
        flex-direction: row;
        list-style: none;
        margin:0;
        padding:18px;
        border-top:1px solid #ddd;
    }

    .stat-list li{
        flex:1 1 auto;
        list-style: none;
        text-align: center;
    }

    .stat-list li a{
        display: block;
        text-decoration: none;
    }

    .stat-list li:nth-child(2){
        border-left:1px solid #ddd;
        border-right:1px solid #ddd;
    }

    .stat-list li div:first-child{
        color:rgba(0,0,0,0.5);
        margin-bottom: 4px;
    }

    .stat-list li div:last-child{
        color:rgba(0,0,0,1);
        font-weight: 600;
    }

    .stat-list li div:first-child:hover, .stat-list li div:last-child:hover{
        color:#409eff;
    }



    /*-----------右侧未登录状态下注册栏----------*/

    .register-head{
        padding: 10px;
        border-bottom: 1px solid #eee;
        font-size: 15px;
        color: rgba(0,0,0,0.8);
    }

    .register-box{
        padding:15px 25px 15px 25px;
    }

    .register-box .field-text input {
        height: 30px;
        line-height: 30px;
        background: #eee;
    }

    .register-box .field-text {
        margin-bottom: 6px;
    }

    .register-box .field-text:last-child {
        margin-bottom: 0;
    }

    .register-box-foot{
        display:flex;
        justify-content: space-between;
    }

    .register-box-foot .show-msg{
        color:red;
    }



</style>

<script>
    const navigation = () => import("../../components/Navigation.vue");
    export default {
        components: { navigation },
        data () {
            return {
                name: 'Demi'
            };
        },
    };
</script>
