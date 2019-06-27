<template>
    <div>
        <Header title="联系方式" />
        <div class="content">
            <div>
                <h3>详情信息</h3>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../components/Header'

export default {
    data(){
        return {
            data: '',
        }
    },
    components: {
        Header
    }
}
</script>
<style lang="less" scope>
    .content{
        padding-top: 48px;
    }
</style>

