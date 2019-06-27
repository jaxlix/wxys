<template>
    <div class="no-data">
        <div class="nd-img">
            <img src="../assets/noData.png" alt="">
        </div>
        <p class="nd-text">暂无数据</p>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>
<style lang="less" scope>
    .no-data{
        padding-top: 30px;
        .nd-img{
            width: 100px;
            height: 100px;
            margin: 0 auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .nd-text{
            margin-top: 20px;
            font-size: 1.8rem;
            text-align: center;
            color: #999;
        }
    }
</style>