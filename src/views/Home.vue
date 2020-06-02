<template>

    <div id="home">
      <el-container style="width:1200px;margin: auto; left:0; top:0; right:0; bottom:0; border-left: solid 0px #e6e6e6">
        
     <el-container>
      <el-aside width="200px" style="background-color: #fff">
      <el-menu :default-openeds="['2','3','4','5']" :router="true"  active-text-color="#42b983" style="margin-top:20px;border-right: solid 0px #e6e6e6;border-left: solid 0px #e6e6e6">
        <el-menu-item index="/scan">
          <i class="el-icon-menu"></i>
          <span slot="title">整体结果</span>
        </el-menu-item>
        <el-submenu index="2">  
          <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="../assets/tronscan.png">TRONSCAN</template>
          <el-menu-item-group>
             <el-menu-item index="/tronscanui">TRONSCAN UI</el-menu-item>
             <el-menu-item index="/tronscanapi">TRONSCAN API</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
  
        <el-submenu index="3">  
          <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="../assets/tronlink.png">TRONLINK</template>
          <el-menu-item-group>
             <!-- <el-menu-item index="/tronlinkui">TRONLINK UI</el-menu-item> -->
             <el-menu-item index="/tronlinkapi">TRONLINK API</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
  
        <el-submenu index="4">  
          <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="../assets/djed.png">JUST</template>
          <el-menu-item-group>
             <el-menu-item index="/djedui">JUST UI</el-menu-item>
             <el-menu-item index="/djedapi">JUST API</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="5">  
          <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="../assets/trongrid.png">TRONGRID</template>
          <el-menu-item-group>
             <el-menu-item index="/trongridapi">TRONGRID API</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      </el-aside>
      <el-container>
<el-main>
     <router-view></router-view>
      </el-main>
      
      </el-container>
    </el-container>
    
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
  