<template>
    <div>
        <Header title="联系方式" />
        <div id="contact">
            <div class="top">
                <img src="../../assets/tx.png" alt=""/>
                <div>
                    <p class="name">{{data[0].XM}}</p>
                    <p class="sfzh">{{data[0].SFZHM}}</p>
                </div>
            </div>
            <div class="msg" v-show="hasData">
                <h3>联系方式详情</h3>
                <div class="msg-list-gxry">
                    <ul v-for="(item, index) in data" :key="index">
                        <li>
                            <span>联系方式</span>
                            <span>{{item.LXFS}}</span>
                        </li>
                        <li>
                            <span>联系电话</span>
                            <span>{{item.LXHM}}</span>
                        </li>
                        <li>
                            <span>登记时间</span>
                            <span>{{item.XGSJ}}</span>
                        </li>
                        <li>
                            <span>登记单位</span>
                            <span>{{item.DJDWMC}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <noData v-show="!hasData" />
        </div>
    </div>
</template>
<script>
import Header from '../../components/Header'
import noData from '../../components/noData'

export default {
    name: 'contact',
    data(){
        return {
            data: {},
            hasData: true
        }
    },
    components: {
        Header,
        noData
    },
    methods: {
        getLxfs(){
            let data = {
                dbtype: 'rylxfs',
                searchword: this.$route.params.sfzh,
                usfzh: this.$api.usfzh,
                pageNo: 1,
                pageSize: 200
            }
            this.$post(this.$api.getList, JSON.stringify(data))
            .then( res => {
                if(res.errCode == "000"){
                    if(res.records.length > 0){
                        this.data = res.records
                    }else{
                        this.hasData = false
                    }
                }
            })
        }
    },
    mounted(){
        this.getLxfs()
    }
}
</script>
<style lang="less" scope>
    #contact{
        padding-top: 48px;
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
                font-size: 1.8rem;
                color: #1a1a1a;
            }
            .msg-list-gxry{
                padding: 5px 10px 40px 10px;
                ul{
                    margin-top: 10px;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    border-radius: 8px;
                    background-color: #fff;
                    box-shadow: 1px 1px 8px rgba(0,0,0,.3);
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
                            color: #1a1a1a;
                        }
                    }
                }
            }
        }
    }
</style>

