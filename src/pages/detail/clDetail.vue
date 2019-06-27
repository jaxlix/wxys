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
            <h3>机动车信息</h3>
            <div class="msg-list">
                <ul>
                    <li>
                        <span>车辆类型</span>
                        <span>{{data.CLLX}}</span>
                    </li>
                    <li>
                        <span>车辆型号</span>
                        <span>{{data.CLXH}}</span>
                    </li>
                    <li>
                        <span>中文品牌</span>
                        <span>{{data.CLPP1}}</span>
                    </li>
                    <li>
                        <span>国产/进口</span>
                        <span>{{data.GCJK}}</span>
                    </li>
                    <li>
                        <span>制造国</span>
                        <span>{{data.ZZG}}</span>
                    </li>
                    <li>
                        <span>核定载客</span>
                        <span>{{data.HDZK}}</span>
                    </li>
                    <li>
                        <span>排量</span>
                        <span>{{data.PL}}</span>
                    </li>
                    <li>
                        <span>燃料种类</span>
                        <span>{{data.RLZL}}</span>
                    </li>
                    <li>
                        <span>发证机关</span>
                        <span>{{data.FZJG}}</span>
                    </li>
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
                        <span>初次登记日期</span>
                        <span>{{data.CCDJRQ}}</span>
                    </li>
                    <li>
                        <span>最近定检日期</span>
                        <span>{{data.DJRQ}}</span>
                    </li>
                    <li>
                        <span>检验有效期</span>
                        <span>{{data.YXQZ}}</span>
                    </li>
                    <li>
                        <span>保险终止日期</span>
                        <span>{{data.BXZZRQ}}</span>
                    </li>
                    <li>
                        <span>抵押标记</span>
                        <span>{{data.DYBJ}}</span>
                    </li>
                    <li>
                        <span>出厂日期</span>
                        <span>{{data.CCRQ}}</span>
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
                        <span>电话</span>
                        <span>{{data.SJHM}}</span>
                    </li>
                    <li>
                        <span>住所行政区划</span>
                        <span>{{data.ZSXZQH}}</span>
                    </li>
                    <li>
                        <span>住所详细地址</span>
                        <span>{{data.ZSXXDZ}}</span>
                    </li>
                    <li>
                        <span>暂住行政区划</span>
                        <span>{{data.ZZXZQH}}</span>
                    </li>
                    <li>
                        <span>暂住详细地址</span>
                        <span>{{data.ZZXXDZ}}</span>
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
