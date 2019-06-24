<template>
    <div>
        <div class="top">
            <img src="../../assets/tx.png" alt=""/>
            <div>
                <p class="name">{{data.HPHM}}</p>
                <p class="sfzh">{{data.CLSBDH}}</p>
            </div>
        </div>
        <div class="msg">
            <h3>常住人口信息</h3>
            <div class="msg-list">
                <ul>
                    <li>
                        <span>号牌种类</span>
                        <span>{{data.HPZL}}</span>
                    </li>
                    <li>
                        <span>号牌号码</span>
                        <span>{{data.HPHM}}</span>
                    </li>
                    <li>
                        <span>车辆识别代码</span>
                        <span>{{data.CLSBDH}}</span>
                    </li>
                    <li>
                        <span>车辆颜色</span>
                        <span>{{data.CSYS}}</span>
                    </li>
                    <li>
                        <span>发动机号</span>
                        <span>{{data.FDJH}}</span>
                    </li>
                    <li>
                        <span>车辆所有人</span>
                        <span>{{data.SYR}}</span>
                    </li>
                    <li>
                        <span>身份证号</span>
                        <span>{{data.SFZHM}}</span>
                    </li>
                    <li>
                        <span>地址</span>
                        <span>{{data.ZSXXDZ}}</span>
                    </li>
                    <li>
                        <span>电话</span>
                        <span>{{data.SJHM}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    props: ['data']
}
</script>
<style lang="less" scope>
    .top{
        display: flex;
        padding: 10px;
        background-color: #fff;
        img{
            width: 60px;
            height: 60px;
            margin-left: 10px;
            margin-right: 10px;
        }
        .name{
            font-size: 1.8rem;
            color: #1a1a1a;
            text-align: left;
            line-height: 30px;
        }
        .sfzh{
            font-size: 1.4rem;
            color: #999;
            text-align: left;
            line-height: 30px;
        }
    }
    .msg{
        margin: 10px;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 1px 1px 5px rgba(0,0,0,.5);
        h3{
            padding: 10px;
            border-bottom: 1px solid #d8d8d8;
            text-align: left;
        }
        .msg-list{
            padding: 10px;
            ul{
                position: relative;
                li{
                    display: flex;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    span:first-child{
                        display: inline-block;
                        width: 5.6rem;
                        color: #666;
                        font-size: 1.4rem;
                        text-align: left;
                    }
                    span:last-child{
                        flex: 1;
                        text-align: left;
                        font-size: 1.6rem;
                    }
                }
            }
        }
    }
</style>
