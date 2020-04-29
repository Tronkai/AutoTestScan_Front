<template>
    <div id="app">
      <div class="header">
        <el-container  style="height: 100vn;border: 1px solid #eee">
  <el-container>
          <el-header height="75px" style="width:1200px;margin: auto; left:0; top:0; right:0; bottom:0; border-left: solid 0px #e6e6e6">
            <el-row type="flex" class="row-bg">
  <el-col :span="6"><div class="grid-content bg-purple"><img style="width:170px;height:40px;margin-top:20px;margin-left:-10px" src="./assets/logo5.png"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"><el-menu style="bottom:-13px" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><router-link to="/scan">处理中心</router-link></el-menu-item>
  <el-menu-item index="4">订单管理</el-menu-item>
</el-menu>
</div></el-col>
</el-row>
  </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
    </el-container>
    </div>
    </div>
  </template>
  
  <script>
  
  </script>
  
  <style scope>
   
  </style>
  