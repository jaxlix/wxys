<template>
  <div id="index">
    <div class="top-box">
      <div class="top">
        <span class="iconfont iconcha"></span>
        <span class="title">云搜</span>
        <span @click="sheetVisible = true" class="iconfont iconguanyu"></span>
      </div>
    </div>
    <div class="content">
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
        <input v-model="kw" @change="changeKw" type="text" placeholder="请输入搜索关键字">
        <span class="iconfont iconsousuo"></span>
      </div>
      <div class="btn-box">
        <button class="btn-block" @click="search">云搜一下</button>
      </div>
    </div>
    <wv-actionsheet type="android" :actions="actions" cancel-text="取消" v-model="sheetVisible"/>
  </div>
</template>
<script>
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
      sheetVisible: false,
      actions: [
        {
          name: "示例菜单1",
          method: () => {
            console.log("menu1 clicked");
          }
        },
        {
          name: "示例菜单2",
          method: () => {
            console.log("menu2 clicked");
          }
        },
        {
          name: "示例菜单3",
          method: () => {
            console.log("menu3 clicked");
          }
        }
      ]
    };
  },
  components: {},
  methods: {
    selectNav(value) {
      this.navCheck = value;
      this.$store.commit("DBTYPE", value);
    },
    search() {
      if (this.kw) {
        this.$router.history.push("/list");
      } else {
        alert("请输入搜索关键字");
      }
    },
    changeKw() {
      this.$store.commit("KEYWORD", this.kw);
    }
  }
};
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
  .top {
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
.content {
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
</style>

