<template>
    <div id="about">
        <Header title="关于"></Header>
        <div class="about">
            <router-link class="item" to="/version">
                <span class="title">版本介绍</span>
                <span class="iconfont iconyou"></span>
            </router-link>
            <router-link class="item" to="/contactUs">
                <span class="title">联系我们</span>
                <span class="iconfont iconyou"></span>
            </router-link>
        </div>
        <div class="about-bottom">
            <div class="about-img">
                <img src="../../assets/icon.png" />
            </div>
            <p class="about-name">云搜</p>
            <p class="about-version">v1.0.02</p>
            <p class="about-kfgs">开发公司：深圳市星火电子工程公司</p>
        </div>
    </div>
</template>
<script>
import Header from '../../components/Header';

export default {
    components: {
        Header
    }
}
</script>
<style lang="less" scoped>
    #about{
        position: relative;
        width: 100%;
        height: 100%;
        .about{
            padding-top: 68px;
        }
        .item{
            position: relative;
            display: flex;
            padding: 15px 20px;
            background-color: #fff;
            font-size: 1.6rem;
            border-bottom: 1px solid #f5f5f5;
            .title{
                flex: 1;
                text-align: left;
            }
            .iconfont{
                width: 40px;
                text-align: right;
            }
        }
        .about-bottom{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            .about-img{
                width: 120px;
                height: 120px;
                margin: 0 auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .about-name{
                padding-top: 20px;
                padding-bottom: 20px;
                font-size: 2rem;
                color: #1a1a1a;
            }
            .about-version{
                color: #999;
                font-size:1.6rem;
            }
            .about-kfgs{
                padding-top: 30px;
                padding-bottom: 20px;
                color: #999;
                font-size:1.6rem;
            }
        }
    }
</style>
