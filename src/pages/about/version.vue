<template>
    <div>
        <Header title="版本介绍"></Header>
        <div class="version">
            <h3 class="banben">1.0.02版本介绍</h3>
            <p class="gxxx">-体验优化与修复bug</p>
            <p class="gxxx">-新增评论功能</p>
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
    .version{
        padding-top: 48px;
        .banben{
            padding: 20px;
            font-size: 1.8rem;
            color: #333;
        }
        .gxxx{
            padding: 10px;
            font-size: 1.2rem;
            color: #999;
        }
    }
</style>
