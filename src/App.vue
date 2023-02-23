<template>
    <div id="app">
            

      <el-container style="width:1100px;position:absolute;margin: auto; left:0; top:0; right:0; bottom:0; border: 1px solid #eee">
     <el-container>
      <el-aside width="200px" style="background-color: #fff;border-bottom: 1px solid #dcdfe6">
      <el-menu :default-openeds="['2','3','4']" :router="true"  active-text-color="#42b983" style="margin-top:20px;border-right: solid 0px #e6e6e6;">
        <router-link to="/">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">整体结果</span>
        </el-menu-item>
        </router-link>

        <router-link to="/javatron">
          <el-menu-item index="javatron">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="https://tron.network/static/images/index/ecology/2.png">JavaTron</template>
          </el-menu-item>
        </router-link>

        <router-link to="/bttc">
          <el-menu-item index="bttc">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="./assets/bttc.png">BTTC</template>
          </el-menu-item>
        </router-link>


        <router-link to="/justlendDao">
          <el-menu-item index="justlendDao">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="https://tron.network/static/images/index/ecology/9.png">JustlendDao</template>
          </el-menu-item>
        </router-link>

        <router-link to="/tronlinkAndroid">
          <el-menu-item index="tronlinkAndroid">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="./assets/tronlink.png">TronlinkAndroid</template>
          </el-menu-item>
        </router-link>

        <router-link to="/tronlinkiOS">
          <el-menu-item index="tronlinkiOS">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="./assets/tronlink.png">TronlinkiOS</template>
          </el-menu-item>
        </router-link>

        <router-link to="/tronlinkServer">
          <el-menu-item index="tronlinkServer">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="./assets/tronlink.png">TronlinkServer</template>
          </el-menu-item>
        </router-link>

        <router-link to="/tronscan">
          <el-menu-item index="tronscan">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="https://tron.network/static/images/index/ecology/3.png">Tronscan</template>
          </el-menu-item>
        </router-link>

        <router-link to="/usdd">
          <el-menu-item index="usdd">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="./assets/usdd.svg">USDD</template>
          </el-menu-item>
        </router-link>

        <router-link to="/tronlinkExtension">
          <el-menu-item index="tronlinkExtension">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="./assets/tronlink.png">Tronlink插件</template>
          </el-menu-item>
        </router-link>

        <router-link to="/DEFI">
          <el-menu-item index="DEFI">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="https://tron.network/static/images/index/ecology/4.png">Defi相关监控</template>
          </el-menu-item>
        </router-link>

        <router-link to="/TRONBOX">
          <el-menu-item index="TRONBOX">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="https://tron.network/static/images/index/ecology/4.png">Tronbox</template>
          </el-menu-item>
        </router-link>

        <router-link to="/TRNWB">
          <el-menu-item index="TRNWB">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="https://tron.network/static/images/index/ecology/4.png">Tronweb</template>
          </el-menu-item>
        </router-link>

        <router-link to="/WAT">
          <el-menu-item index="WAT">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="https://tron.network/static/images/index/ecology/4.png">wallet-adapter-tron</template>
          </el-menu-item>
        </router-link>

        <router-link to="/WTS">
          <el-menu-item index="WTS">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="https://tron.network/static/images/index/ecology/4.png">Wallet-Tron SDK</template>
          </el-menu-item>
        </router-link>

        <router-link to="/WEB3">
          <el-menu-item index="WEB3">
            <template slot="title"><img style="width:18px;height:18px;margin-right:8px" src="https://tron.network/static/images/index/ecology/4.png">web3后台管理</template>
          </el-menu-item>
        </router-link>

      </el-menu>
      </el-aside>
      <el-container>

      <el-main>
        <router-link to="/"></router-link>
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
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
    }
    
    .el-aside {
      background-color: #D3DCE6;
      color: #333;
    }
  </style>
  