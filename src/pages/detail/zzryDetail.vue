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
            <h3>暂住人口信息</h3>
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
                        <span>年龄</span>
                        <span>{{data.AGE}}</span>
                    </li>
                    <li>
                        <span>现住址</span>
                        <span>{{data.ZKZZXZ}}</span>
                    </li>
                    <li>
                        <span>到达时间</span>
                        <span>{{data.DDSJ}}</span>
                    </li>
                    <li>
                        <span>发证日期</span>
                        <span>{{data.FZRQ}}</span>
                    </li>
                    <li>
                        <span>暂住有效期</span>
                        <span>{{data.YXQX}}</span>
                    </li>
                    <li>
                        <span>暂住处所</span>
                        <span>{{data.ZZCS}}</span>
                    </li>
                    <li>
                        <span>职业类别</span>
                        <span>{{data.ZYLB}}</span>
                    </li>
                    <li>
                        <span>人员状态</span>
                        <span>{{data.ZZZT}}</span>
                    </li>
                    <li>
                        <span>登记日期</span>
                        <span>{{data.DJSJ}}</span>
                    </li>
                     <li>
                        <span>登记单位</span>
                        <span>{{data.DJDW}}</span>
                    </li>
                     <li>
                        <span>注销日期</span>
                        <span>{{data.ZXRQ}}</span>
                    </li>
                    <li>
                        <span>注销原因</span>
                        <span>{{data.ZXYY}}</span>
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
