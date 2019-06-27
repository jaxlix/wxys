<template>
    <div id="head">
        <div class="head-left" @click="back"><i class="iconfont iconfanhui"></i></div>
        <div class="head-title" v-html="title"></div>
        <div class="head-right" v-html="right"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    props: ["title","right"],
    methods: {
        back(){
            this.$router.history.go(-1)
        }
    }
}
</script>

<style scoped>
    #head{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 48px;
        display: flex;
        line-height: 48px;
        background-color: #3274A4;
        color: #fff;
        z-index: 100;
        
    }
    .head-left{
        width: 50px;
    }
    .head-title{
        flex:1;
    }
    .head-right{
        width: 50px;
    }
</style>

