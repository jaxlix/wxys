<template>
    <div>
        <router-link :to="'/detail/'+item.TRSID" class="ry-item" v-for="(item, index) in dataList" :key="index">
            <div class="msg-box">
                <p class="sfzhm">{{item.HPHM}}</p>
                <p><span>车主</span>{{item.SYR}}</p>
                <p><span>车辆类型</span>{{item.CLLX}}</p>
                <p><span>车辆识别代号</span>{{item.CLSBDH}}</p>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'clList',
    props: ['dataList']
}
</script>
<style lang="less" scoped>
    .ry-item{
        display: flex;
        padding: 20px;
        margin: 10px;
        background-color: #fff;
        border-radius: 6px;
        box-shadow: 1px 1px 8px rgba(0,0,0,.5);
        .msg-box{
            flex: 1;
            text-align: left;
            .sfzhm{
                padding-bottom: 10px;
                color: #1a1a1a;
                font-size: 1.6rem;
            }
            p{
                padding-bottom: 5px;
                span{
                    display: inline-block;
                    width: 8.4rem;
                    margin-right: 30px;
                    color: #666;
                    font-size: 1.4rem;
                }
            }
        }
        .img-box{
            width: 100px;
            img{
                width: 100%;
            }
        }
    }
</style>