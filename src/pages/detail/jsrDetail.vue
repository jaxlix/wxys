<template>
    <div>
        <div class="top">
            <img src="../../assets/mr.png" alt=""/>
            <div>
                <p class="name">{{data.XM}}</p>
                <p class="sfzh">{{data.SFZHM}}</p>
            </div>
            <router-link :to="'/contact/'+data.SFZHM">联系方式</router-link>
        </div>
        <div class="msg">
            <h3>驾驶员信息</h3>
            <div class="msg-list">
                <ul>
                    <li>
                        <span>姓名</span>
                        <span>{{data.XM}}</span>
                    </li>
                    <li>
                        <span>性别</span>
                        <span>{{data.XB}}</span>
                    </li>
                    <li>
                        <span>身份证号</span>
                        <span>{{data.SFZHM}}</span>
                    </li>
                    <li>
                        <span>出生日期</span>
                        <span>{{data.CSRQ}}</span>
                    </li>
                    <li>
                        <span>联系电话</span>
                        <span>{{data.LXDH}}</span>
                    </li>
                    <li>
                        <span>审验日期</span>
                        <span>{{data.SYRQ}}</span>
                    </li>
                    <li>
                        <span>清分日期</span>
                        <span>{{data.QFRQ}}</span>
                    </li>
                    <li>
                        <span>准驾车型</span>
                        <span>{{data.ZJCX}}</span>
                    </li>
                    <li>
                        <span>档案编号</span>
                        <span>{{data.DABH}}</span>
                    </li>
                    <li>
                        <span>发证日期</span>
                        <span>{{data.CCLZRQ}}</span>
                    </li>
                    <li>
                        <span>有效期</span>
                        <span>{{data.YXQZ}}</span>
                    </li>
                    <li>
                        <span>登记住所地址</span>
                        <span>{{data.DJZSXXDZ}}</span>
                    </li>
                    <li>
                        <span>联系住所地址</span>
                        <span>{{data.LXZSXXDZ}}</span>
                    </li>
                    <li class="touxiang">
                        <img src="../../assets/tx.png" alt=""/>
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
        div{
            flex: 1;
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
        a{
            color: #3274a4;
            font-size: 1.8rem;
            line-height: 60px;
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
                .touxiang{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 90px;
                    height: 90px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
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
