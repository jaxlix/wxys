<template>
    <div>
        <router-link :to="'/detail/'+item.TRSID" class="ry-item" v-for="(item, index) in dataList" :key="index">
            <div class="msg-box">
                <p class="sfzhm">{{item.SFZHM}}</p>
                <p><span>姓名</span>{{item.XM}}</p>
                <p><span>性别</span>{{item.XB}}</p>
                <p><span>籍贯</span>{{item.HJQH}}</p>
            </div>
            <div class="img-box">
                <img src="../../assets/tx.png" alt=""/>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'ryList',
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
                span{
                    margin-right: 30px;
                    color: #666;
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