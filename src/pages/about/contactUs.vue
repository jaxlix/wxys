<template>
    <div>
        <Header title="联系我们"></Header>
        <div class="contact">
            <p class="item">科室电话：<span><a href="tel:0755-84464985">0755-84464985</a></span></p>
            <p class="item">运维支持：<span><a href="tel:0755-84464985">0755-84464985</a></span></p>
            <p class="item">深圳市星火电子工程公司</p>
        </div>
    </div>
</template>
<script>
import Header from '../../components/Header'

export default {
    components: {
        Header
    }
}
</script>
<style lang="less" scoped>
    .contact{
        padding-top: 68px;
        .item{
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 45px;
            text-align: left;
            span{
                color: #3274A4;
            }
        }
    }
</style>
