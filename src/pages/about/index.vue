<template>
    <div>
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
</style>
