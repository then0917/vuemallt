<template>
  <!-- <div>
      <img src="~assets/img/1.jpg" alt="">
  </div> -->
  <tab-bar>
    <!-- <tab-bar-item v-for="i in menu" :key="i.name">
      <img slot="item-icon" src="~assets/img/home.png" >
      <div slot="item-text">{{i.name}}</div>
    </tab-bar-item> -->
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/home.png" >
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/profile.png" >
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      menu: [
        {
          name: "首页",
          type: "home",
          img: "~assets/img/home.png"
        },
        {
          name: "大屏",
          type: "home",
          img: "~assets/img/home.png"
        },
        {
          name: "客户",
          type: "customer",
          img: "~assets/img/customer.png"
        },{
          name: "项目",
          type: "project",
          img: "~assets/img/project.png"
        },
        {
          name: "我的",
          type: "my",
          img: "~assets/img/my.png"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>