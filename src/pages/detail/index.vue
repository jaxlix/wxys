<template>
    <div>
        <Header :title="title[dbtype]" />
        <div class="content">
            <ryDetail :data="data" :gxryList="gxryList" v-if="dbtype == 'renkou'"></ryDetail>
            <czryDetail :data="data" v-if="dbtype == 'czrkxx'"></czryDetail>
            <zzryDetail :data="data" v-if="dbtype == 'zzrkxx'"></zzryDetail>
            <jsrDetail :data="data" v-if="dbtype == 'jsrxx'"></jsrDetail>
            <clDetail :data="data" v-if="dbtype == 'jidongche'"></clDetail>
        </div>
    </div>
</template>
<script>
import Header from '../../components/Header'
import ryDetail from './ryDetail'
import clDetail from './clDetail'
import czryDetail from './czryDetail'
import jsrDetail from './jsrDetail'
import zzryDetail from './zzryDetail'

export default {
    name: 'detail',
    data(){
        return {
            data: '',
            gxryList: [],
            dbtype: this.$store.state.dbtype,
            id: this.$route.params.id,
            renyuan: 'renkou,czrkxx,zzrkxx,jzry,jsrxx',
            title: {
                renkou: '人员详情',
                czrkxx: '人员详情',
                zzrkxx: '人员详情',
                jzry: '人员详情',
                jsrxx: '人员详情',
                jidongche: '车辆详情'
            }
        }
    },
    components: {
        Header,
        ryDetail,
        clDetail,
        czryDetail,
        zzryDetail,
        jsrDetail
    },
    methods: {
        getDetail(){
            let data = {
                dbtype: this.dbtype,
                id: this.id,
                usfzh: this.$api.usfzh
            }
            this.$post(this.$api.getDetails, JSON.stringify(data))
            .then( res => {
                if(res.errCode == "000"){
                    let data = res.records[0]
                    this.data = data
                    if(this.dbtype === 'renkou'){
                        this.getGxry(data.SFZHM)
                    }
                }
            })
        },
        getGxry(sfzhm){
            let data = {
                dbtype: 'gxryxx',
                searchword: sfzhm,
                pageNo: 1,
                pageSize: 100,
                usfzh: this.$api.usfzh
            }
            this.$post(this.$api.getList, JSON.stringify(data))
            .then( res => {
                if(res.errCode == "000"){
                    let list = res.records
                    this.gxryList = list
                }
            })
        }
    },
    mounted() {
        this.getDetail()
    }
}
</script>
<style lang="less" scope>
    .content{
        padding-top: 48px;
    }
</style>

