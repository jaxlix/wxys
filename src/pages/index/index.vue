<template>
  <div id="index">
    <div class="top-box">
      <div class="index-top">
        <span class="iconfont iconcha"></span>
        <span class="title">云搜</span>
        <span @click="show" class="iconfont iconguanyu"></span>
      </div>
    </div>
    <div class="index-content">
      <nav class="nav-scroll">
        <div class="nav-scroll-box">
          <a
            v-for="(item, index) in nav"
            :key="index"
            @click="selectNav(item.value)"
            :class="navCheck==item.value?'nav-this':''"
            href="javascript:void(0)"
          >{{item.name}}</a>
        </div>
      </nav>
      <div class="search">
        <input class="search-inp" v-model="kw" type="text" :placeholder="this.navCheck === 'renkou' ? '请输入身份证/姓名' : '请输入车牌'">
        <div v-if="navCheck === 'renkou'" class="search-select" @click="showPickerRenyuan = true">
          <span class="text">{{defaultDataRenyuan[0].label}}</span>
          <span class="xiasanjiao"></span>
        </div>
        <div v-if="navCheck === 'jidongche'" class="search-select" @click="showPicker = true">
          <span class="text">{{defaultData[0].value}}{{defaultData[1].value}}</span>
          <span class="xiasanjiao"></span>
        </div>
      </div>
      <div class="btn-box">
        <button class="btn-block" @click="search">云搜一下</button>
      </div>
    </div>
    <!-- 选择车牌 -->
    <vue-pickers
      :show="showPicker"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="close"
      @confirm="confirmFn"></vue-pickers>
    <!-- 选择人员类型 -->
    <vue-pickers
      :show="showPickerRenyuan"
      :columns="columnsRenyuan"
      :defaultData="defaultDataRenyuan"
      :selectData="pickDataRenyuan"
      @cancel="closeRenyuan"
      @confirm="confirmFnRenyuan"></vue-pickers>
    <!-- 提示框 -->
    <Alert :show.sync="showAlert" :msg="alertMsg" />
    <!-- 菜单 -->
    <div v-show="showDialog" @click="showDialog = false" class="dialog">
      <div class="dialog-box">
        <router-link class="dialog-link" to="/about">
          <span class="iconfont iconren-copy"></span>
          <span class="title">责任民警</span>
        </router-link>
        <router-link class="dialog-link" to="/about">
          <span class="iconfont iconfankui"></span>
          <span class="title">问题反馈</span>
        </router-link>
        <router-link class="dialog-link" to="/about">
          <span class="iconfont iconbangzhu"></span>
          <span class="title">帮助</span>
        </router-link>
        <router-link class="dialog-link" to="/about">
          <span class="iconfont iconiconset0142"></span>
          <span class="title">关于</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Alert from '../../components/Alert'
import vuePickers from 'vue-pickers'
import chepai from '../../assets/chepai.json'

export default {
  name: "index",
  data() {
    return {
      nav: [
        { name: "人员", value: "renkou" },
        { name: "车辆", value: "jidongche" }
        // {name: '吸毒人员', value: 'xdry'},
        // {name: '在逃人员', value: 'qgztry'},
        // {name: '违法犯罪人员', value: 'qgwffzry'},
        // {name: '常住人口', value: 'czrkxx'},
        // {name: '暂住人口', value: 'zzrkxx'},
        // {name: '寄住人口', value: 'jzry'}
      ],
      navCheck: "renkou",
      kw: "",
      showAlert: false,
      alertMsg: '',
      showDialog: false,
      showPicker: false,
      columns: 2,
      defaultData: [{"text": "苏", "value": "苏"},{"text": "B", "value": "B"}],
      pickData: chepai,
      showPickerRenyuan: false,
      columnsRenyuan: 1,
      defaultDataRenyuan: [{'text': '基本人员信息', 'value': 'renkou', 'label': '基本'}],
      pickDataRenyuan: {'data1': [
        {'text': '基本人员信息', 'value': 'renkou', 'label': '基本'},
        {'text': '常住人员信息', 'value': 'czrkxx', 'label': '常住'},
        {'text': '暂住人员信息', 'value': 'zzrkxx', 'label': '暂住'},
        // {'text': '寄住人员信息', 'value': 'jzry', 'label': '寄住'},
        {'text': '驾驶人信息', 'value': 'jsrxx', 'label': '驾驶人'}
      ]}
    }
  },
  components: {
    Alert,
    vuePickers
  },
  methods: {
    selectNav (value) {
      this.navCheck = value
      this.$store.commit('DBTYPE', value)
    },
    search () {
      if (this.kw) {
        let kw = this.kw
        if(this.navCheck === 'jidongche'){
          kw = this.defaultData[0].value + this.defaultData[1].value + kw
        }
        this.$store.commit("KEYWORD", kw)
        this.$router.history.push('/list')
      } else {
        this.alertMsg = '请输入搜索关键字'
        this.showAlert = true
      }
    },
    show (){
      this.showDialog = true
    },
    close () {
      this.showPicker = false
    },
    confirmFn (val) {
      this.showPicker = false
      this.defaultData = [val.select1, val.select2]
    },
    closeRenyuan(){
      this.showPickerRenyuan = false
    },
    confirmFnRenyuan (val) {
      this.showPickerRenyuan = false
      this.defaultDataRenyuan = [val.select1]
      this.$store.commit('DBTYPE', val.select1.value)
    }
  }
}
</script>
<style lang="less" scoped>
.top-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 260px;
  background: url("../../assets/banner.png") no-repeat center center;
  background-size: 100% 100%;
  .index-top {
    height: 48px;
    line-height: 48px;
    text-align: left;
    .iconcha {
      display: inline-block;
      width: 50px;
      text-align: center;
      font-size: 2rem;
      color: #fff;
    }
    .title {
      display: inline-block;
      width: 40px;
      text-align: center;
      color: #fff;
      font-size: 1.8rem;
    }
    .iconguanyu {
      position: absolute;
      right: 0;
      top: 0;
      width: 50px;
      text-align: center;
      font-size: 2rem;
      color: #fff;
    }
  }
}
.index-content {
  position: fixed;
  top: 200px;
  left: 0;
  width: 96%;
  margin-left: 2%;
  margin-right: 2%;
  z-index: 100;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  .search {
    position: relative;
    box-sizing: border-box;
    height: 70px;
    padding: 10px 20px;
    margin-top: 30px;
    input {
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      padding-left: 40px;
      border-radius: 25px;
      background-color: #f2f2f2;
    }
    .iconsousuo {
      position: absolute;
      top: 24px;
      left: 35px;
      font-size: 2.2rem;
      color: #999;
    }
    .search-inp{
      padding-left: 8rem;
    }
    .search-select{
      display: flex;
      position: absolute;
      top: 10px;
      left: 20px;
      width: 8rem;
      height: 50px;
      line-height: 50px;
      .text{
        flex: 1;
        padding-right: 10px;
        font-size: 1.6rem;
        color: #1a1a1a;
        overflow: hidden;
      }
      .xiasanjiao{
        position: relative;
        top: 20px;
        right: 10px;
        border: .6rem solid transparent;
        border-top-color: #999;
      }
    }
  }
  .nav-scroll {
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
  }
  .nav-scroll::-webkit-scrollbar {
    display: none;
  }
  .nav-scroll-box {
    width: 100%;
    white-space: nowrap;
    text-align: left;
  }
  .nav-scroll-box > a {
    position: relative;
    display: inline-block;
    // height: 40px;
    padding: 5px 15px;
    margin-top: 15px;
    margin-left: 5px;
    margin-right: 5px;
    box-sizing: border-box;
    text-align: center;
    font-size: 1.6rem;
    color: #666;
  }
  .nav-this {
    background-color: #f2f2f2;
    border-radius: 20px;
    color: #333 !important;
  }
  .btn-box {
    margin: 40px 20px;
    .btn-block {
      display: block;
      width: 100%;
      height: 40px;
      border-radius: 20px;
      background-color: #3274a4;
      color: #fff;
      font-size: 1.8rem;
    }
  }
}
.dialog{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  .dialog-box{
    position: absolute;
    top: 50px;
    right: 20px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 1px 1px 5px rgba(0,0,0,.3);
    .dialog-link{
      display: flex;
      width: 140px;
      height: 40px;
      line-height: 40px;
      .iconfont{
        width: 40px;
      }
      .title{
        flex: 1;
        border-bottom: 1px solid #f5f5f5;
      }
    }
  }
}
</style>
