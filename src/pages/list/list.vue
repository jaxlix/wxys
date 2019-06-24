<template>
    <div id="list">
        <div class="head">
            <div class="head-left" @click="back"><i class="iconfont iconfanhui"></i></div>
            <div class="head-title">
                <input v-model="searchword" class="input" type='text' />
            </div>
            <div class="head-right" @click="rightClick">
                <span>搜索</span>
            </div>
        </div>
        <pull-to @infinite-scroll="loadMoreData" :bottom-config="BOTTOM_DEFAULT_CONFIG" :is-bottom-bounce="false" :bottom-block-height="120">

            <ryList :dataList="dataList" v-if="dbtype=='renkou'"></ryList>
            <clList :dataList="dataList" v-if="dbtype=='jidongche'"></clList>

            <div @click="loadMoreData" class="loadMore">
                <img v-show="showLoading" src="../../assets/loading.gif" alt="">
                <span>{{loadMoreTip}}</span>
            </div>
        </pull-to>
    </div>
</template>
<script>
import PullTo from 'vue-pull-to';
import ryList from './ryList';
import clList from './clList';
// import {mapGetters} from 'vuex';

export default {
    name: 'list',
    data(){
        return {
            dataList: [],
            loadMoreTip:'加载中',
            showLoading: true,
            BOTTOM_DEFAULT_CONFIG: {
                pullText: '',
                triggerText: '',
                loadingText: '',
                doneText: '',
                failText: '',
                loadedStayTime: 200,
                stayDistance: 100,
                triggerDistance: 10
            },
            dbtype: this.$store.state.dbtype,
            searchword: this.$store.state.keyWord,
            pageNo: 1,
            pageSize: 10
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if(from.name == 'index'){
                vm.dbtype = vm.$store.state.dbtype
                vm.searchword = vm.$store.state.keyWord
                vm.dataList = []
                vm.getDataList()
            }
        })
    },
    // computed: {
    //     ...mapGetters({
    //         dbtype: 'dbtype',
    //         searchword: 'searchword'
    //     })
    // },
    // watch: {
    //     dbtype(){
    //         this.getDataList()
    //     },
    //     searchword(){
    //         this.getDataList()
    //     }
    // },
    components: {
        PullTo,
        ryList,
        clList
    },
    methods: {
        getDataList(){
            let data = {
                dbtype: this.dbtype,
                searchword: this.searchword,
                pageNo: this.pageNo,
                pageSize: this.pageSize,
                usfzh: this.$api.usfzh
            }
            this.$post(this.$api.getList, JSON.stringify(data))
            .then(res => {
                if(res.errCode == "000"){
                    let data = res.records;
                    this.dataList = this.dataList.concat(data);
                    this.showLoading = false;
                    this.loadMoreTip = data.length == 10 ? '加载更多' : '没有更多数据了';
                }
            })
        },
        loadMoreData(){
            if(this.searchword){
                this.showLoading = true
                this.loadMoreTip = '加载中'
                this.pageNo++
                this.getDataList()
            }else{
                this.dataList = [];
                this.loadMoreTip = '请输入搜索关键词';
                this.showLoading = false;
                alert('请输入搜索关键词');
            }
        },
        rightClick(){
            this.dataList = [];
            if(!this.searchword){
                this.loadMoreTip = '请输入搜索关键词';
                this.showLoading = false;
                alert('请输入搜索关键词');
                return false;
            }else{
                this.showLoading = true;
                this.loadMoreTip = '加载中';
                this.pageNo = 1;
                this.getDataList();
                this.$store.commit('KEYWORD', this.searchword);
            }
        },
        back(){
            this.$router.history.go(-1)
        }
    },
    mounted(){
        this.searchword = this.$store.state.keyWord;
        if(!this.$store.state.keyWord){
            this.loadMoreTip = '请输入搜索关键词';
            this.showLoading = false;
            alert('请输入搜索关键词');
            return false;
        }
        this.getDataList()
    }
}
</script>
<style lang="less" scoped>
    #list{
        padding-top: 48px;
    }
    .head{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 48px;
        display: flex;
        line-height: 48px;
        background-color: #3274A4;
        color: #fff;
        z-index: 100;
    }
    .head-left{
        width: 50px;
    }
    .head-title{
        flex:1;
        .input{
            width: 100%;
            height: 30px;
            background-color:transparent;
            border-bottom: 1px solid #f5f5f5;
            color: #fff;
        }
    }
    .head-right{
        width: 50px;
    }
    .search-inp{
        width: 100%;
        height: 30px;
        border-radius: 15px;
    }
    .loadMore{
        height: 50px;
        line-height: 50px;
    }
</style>


