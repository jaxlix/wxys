<template>
    <div>
        <div class="top">
            <img src="../../assets/mr.png" alt=""/>
            <div>
                <p class="name">{{data.XM}}</p>
                <p class="sfzh">{{data.SFZHM}}</p>
            </div>
            <router-link v-show="data.SFZHM" :to="'/contact/'+data.SFZHM">联系方式</router-link>
        </div>
        <div class="msg">
            <h3>基本信息</h3>
            <div class="msg-list">
                <ul>
                    <li>
                        <span>姓名</span>
                        <span>{{data.XM}}</span>
                    </li>
                    <li>
                        <span>曾用名</span>
                        <span>{{data.CYM}}</span>
                    </li>
                    <li>
                        <span>性别</span>
                        <span>{{data.XB}}</span>
                    </li>
                    <li>
                        <span>民族</span>
                        <span>{{data.MZ}}</span>
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
                        <span>籍贯</span>
                        <span>{{data.JGDQ}}</span>
                    </li>
                    <li>
                        <span>出生地</span>
                        <span>{{data.CSDQ}}</span>
                    </li>
                    <li>
                        <span>职业</span>
                        <span>{{data.ZY}}</span>
                    </li>
                    <li>
                        <span>婚姻状况</span>
                        <span>{{data.HYZK}}</span>
                    </li>
                    <li class="touxiang">
                        <img src="../../assets/tx.png" alt=""/>
                    </li>
                </ul>
            </div>
        </div>
        <div class="msg">
            <h3>关系人员信息</h3>
            <div class="msg-list-gxry">
                <p class="hasno" v-show="gxryList.length === 0">暂无关系人员</p>
                <ul v-for="(item, index) in gxryList" :key="index">
                    <li>
                        <span>{{item.GXRYXM}}</span>
                    </li>
                    <li>
                        <span>性别</span>
                        <span>{{item.XB}}</span>
                    </li>
                    <li>
                        <span>人员关系</span>
                        <span>{{item.RYGX}}</span>
                    </li>
                    <li>
                        <span>关系类别</span>
                        <span>{{item.GXLB}}</span>
                    </li>
                    <li>
                        <span>身份证号</span>
                        <span>{{item.GXRYSFZ}}</span>
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
    props: ['data', 'gxryList']
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
        .msg-list-gxry{
            padding: 5px 10px 40px 10px;
            .hasno{
                padding: 20px;
            }
            ul{
                margin-top: 10px;
                border-radius: 8px;
                background-color: #fff;
                box-shadow: 1px 1px 8px rgba(0,0,0,.3);
                li:first-child{
                    height: 26px;
                    margin-bottom: 10px;
                    background-color: #f2f2f2;
                    color: #1a1a1a;
                    font-size: 1.8rem;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                }
                li{
                    display: flex;
                    padding: 5px 10px;
                    span:first-child{
                        display: inline-block;
                        width: 6rem;
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
