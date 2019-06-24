<template>
    <div>
        <Header :title="title[dbtype]" />
        <div class="content">
            <ryDetail :data="data" v-if="dbtype == 'renkou'"></ryDetail>
            <clDetail :data="data" v-if="dbtype=='jidongche'"></clDetail>
        </div>
    </div>
</template>
<script>
import Header from '../../components/Header'
import ryDetail from './ryDetail'
import clDetail from './clDetail'

export default {
    name: 'detail',
    data(){
        return {
            data: '',
            dbtype: this.$store.state.dbtype,
            title: {
                renkou: '人员详情',
                jidongche: '车辆详情'
            }
        }
    },
    components: {
        Header,
        ryDetail,
        clDetail
    },
    methods: {
        getDetail(){
            let data = {
                dbtype: this.$store.state.dbtype,
                id: this.$route.params.id,
                usfzh: this.$api.usfzh
            }
            this.$post(this.$api.getDetails, JSON.stringify(data))
            .then( res => {
                if(res.errCode == "000"){
                    let data = res.records[0];
                    this.data = data
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
        margin-top: 48px;
    }
</style>

