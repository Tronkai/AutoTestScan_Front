<template>

    <div id="home">
      <el-container style="width:1200px;margin: auto; left:0; top:0; right:0; bottom:0; border-left: solid 0px #e6e6e6">
    <el-main>
     <router-view></router-view>
      </el-main>
  </el-container>

    </div>
  </template>
  
  <script>
  </script>
  
  <style scope>
    *{
      text-decoration: none;
    }
  
    .el-header {
      border-bottom: 2px solid #eee;
      background-color: #fff;
      color: #333;
      line-height: 60px;
    }
    
    .el-aside {
      background-color: #D3DCE6;
      color: #333;
    }
  </style>
  