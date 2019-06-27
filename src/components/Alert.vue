<template>
    <transition name="fade">
        <div v-if="show" class="alert">
            <div class="alert-box">
                <h3 class="title">{{title || '提示'}}</h3>
                <div class="msg">{{msg}}</div>
                <div class="btns">
                    <a @click="confirm" class="queding" href="javascript:void(0)">确定</a>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return {
            // showAlert: this.show
        }
    },
    props: ['show', 'title', 'msg'],
    methods: {
        confirm(){
            this.$emit('update:show', false)
        }
    }
}
</script>
<style lang="less" scoped>
    .alert{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 101;
        width: 100%;
        height: 100%;
        display: flex;
        background-color: rgba(0,0,0,.6);
        .alert-box{
            margin: auto;
            width: 80%;
            border-radius: 6px;
            background-color: #fff;
            .title{
                padding: 2rem 2.5rem .8rem 2.5rem;
                line-height: 2rem;
                font-size: 1.6rem;
                text-align: center;
            }
            .msg{
                padding: 0 2.4rem 1.2rem 2.4rem;
                min-height: 40px;
                color: #999;
                text-align: center;
                font-size: 1.5rem;
            }
            .btns{
                display: flex;
                height: 48px;
                border-top: 1px solid #f5f5f5;
                .queding{
                    flex: 1;
                    color: #f90;
                    text-align: center;
                    line-height: 48px;
                    font-size: 1.6rem;
                }
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>


