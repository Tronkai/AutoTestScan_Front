<template>
  <div class="scan">
<el-row :gutter="12">

<el-col :span="12">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px;margin-right:8px" src="../assets/tronscan.png"><span>TRONSCAN API</span>
<el-button style="float: right; padding: 3px 0" type="text" @click="TronscanAPIdialog = true">查看详情</el-button>
 </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px">
        <div v-for="(item) in tronscanapi" :key = "item" class="text item">
    <el-progress style="margin-top:25px;margin-bottom:20px"  type="circle" :color="tronscanapi[0].status == '1'?'#5cb87a':'#f56c6c'" :percentage="Math.ceil(tronscanapi[0].sucessnum/tronscanapi[0].sum*100)"></el-progress>
    </div>
  </div>
      <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>
<div style="float: left;margin-left:30px;margin-top:15px">
                <h4>最近一次执行情况</h4>
      <span>成功用例数:{{tronscanapi[0].sucessnum}}</span>
                      <br><br>
      <span>失败用例数:{{tronscanapi[0].failnum}}</span>
  </div>
        <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>

  <div style="float: left;margin-left:30px;margin-top:15px">
                <h4>当天执行情况</h4>
                <span>总执行次数：{{tronscanapiToday.todaysum}}次</span>
                      <br><br>
                <span>总成功次数：{{tronscanapiToday.todaysucess}}次</span>
                      <br><br>
                <span>总失败次数：{{tronscanapiToday.todayfail}}次</span>
  </div>
  <div>
  </div>
</el-card>
  </el-col>

  
<el-col :span="12">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px;margin-right:8px" src="../assets/tronscan.png"><span>TRONSCAN UI</span>
<el-button style="float: right; padding: 3px 0" type="text" @click="TronscanUIdialog = true">查看详情</el-button>
  </div>
  <div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in tronscanui" :key = "item" class="text item">
    <el-progress style="margin-top:25px;margin-bottom:20px" type="circle" :color="tronscanui[0].status == '1'?'#5cb87a':'#f56c6c'" :percentage="Math.ceil(tronscanui[0].sucessnum/tronscanui[0].sum*100)"></el-progress>

    </div>
  </div>
    </div>
    <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>
  <div style="float: left;margin-left:30px;margin-top:30px">
  <h4>最近一次执行情况</h4>
      <span>成功用例数:{{tronscanui[0].sucessnum}}</span>
                      <br><br>
      <span>失败用例数:{{tronscanui[0].failnum}}</span>
                      <br><br>
  </div>
  <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>
  <div style="float: left;margin-left:30px;margin-top:30px">
  <h4>当天执行情况</h4>
                <span>总执行次数：{{tronscanuiToday.todaysum}}次</span>
                      <br><br>
                <span>总成功次数：{{tronscanuiToday.todaysucess}}次</span>
                      <br><br>
                <span>总失败次数：{{tronscanuiToday.todayfail}}次</span>
  </div>
  <div>
  </div>
</el-card>
  </el-col>


<el-col :span="12">
    <el-card v-show="tronlinkui[0]" class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px" src="../assets/trongrid.png"><span>TRONGRID API</span>
<el-button style="float: right; padding: 3px 0" type="text" @click="TronGridAPIdialog = true">查看详情</el-button>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in tronlinkui" :key = "item" class="text item">
    <el-progress style="margin-top:25px;margin-bottom:20px" type="circle" :color="tronlinkui[0].status == '1'?'#5cb87a':'#f56c6c'" :percentage="Math.ceil(tronlinkui[0].sucessnum/tronlinkui[0].sum*100)"></el-progress>
    </div>
  </div>
      <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>
    
  <div style="float: left;margin-left:30px;margin-top:30px">
  <h4>最近一次执行情况</h4>
      <span>成功用例数:{{tronlinkui[0].sucessnum}}</span>
                      <br><br>
      <span>失败用例数:{{tronlinkui[0].failnum}}</span>
                      <br><br>
  </div>

  <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>
    
  <div style="float: left;margin-left:30px;margin-top:30px">
  <h4>当天执行情况</h4>
                <span>总执行次数：{{tronlinkuiToday.todaysum}}次</span>
                      <br><br>
                <span>总成功次数：{{tronlinkuiToday.todaysucess}}次</span>
                      <br><br>
                <span>总失败次数：{{tronlinkuiToday.todayfail}}次</span>
  </div>

  <div>
  </div>
</el-card>
  </el-col>


<el-col :span="12">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px" src="../assets/tronlink.png"><span>TRONLINK API</span>
<el-button style="float: right; padding: 3px 0" type="text" @click="TronlinkAPIdialog = true">查看详情</el-button>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in tronlinkapi" :key = "item" class="text item">
    <el-progress style="margin-top:25px;margin-bottom:20px" type="circle" :color="tronlinkapi[0].status == '1'?'#5cb87a':'#f56c6c'" :percentage="Math.ceil(tronlinkapi[0].sucessnum/tronlinkapi[0].sum*100)"></el-progress>
    
    </div>
  </div>
      <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>

  <div style="float: left;margin-left:30px;margin-top:30px">
    <h4>最近一次执行情况</h4>
      <span>成功用例数:{{tronlinkapi[0].sucessnum}}</span>
                      <br><br>
      <span>失败用例数:{{tronlinkapi[0].failnum}}</span>
                      <br><br>
  </div>
  <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>

  <div style="float: left;margin-left:30px;margin-top:30px">
    <h4>当天执行情况</h4>
                <span>总执行次数：{{tronlinkapiToday.todaysum}}次</span>
                      <br><br>
                <span>总成功次数：{{tronlinkapiToday.todaysucess}}次</span>
                      <br><br>
                <span>总失败次数：{{tronlinkapiToday.todayfail}}次</span>
  </div>
  <div>
  </div>
  </el-card>
  </el-col>
  <el-col :span="12">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px" src="../assets/djed.png"><span>JUST API</span>
<el-button style="float: right; padding: 3px 0" type="text" @click="JustAPIdialog = true">查看详情</el-button>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in djedapi" :key = "item" class="text item">
    <el-progress style="margin-top:25px;margin-bottom:20px" type="circle" :color="djedapi[0].status == '1'?'#5cb87a':'#f56c6c'" :percentage="Math.ceil(djedapi[0].sucessnum/djedapi[0].sum*100)"></el-progress>
 
    </div>
  </div>
      <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>

  <div style="float: left;margin-left:30px;margin-top:30px">
  <h4>最近一次执行情况</h4>
      <span>成功用例数:{{djedapi[0].sucessnum}}</span>
                      <br><br>
      <span>失败用例数:{{djedapi[0].failnum}}</span>
                      <br><br>
  </div>

   <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>

  <div style="float: left;margin-left:30px;margin-top:30px">
  <h4>当天执行情况</h4>
                <span>总执行次数：{{djedapiToday.todaysum}}次</span>
                      <br><br>
                <span>总成功次数：{{djedapiToday.todaysucess}}次</span>
                      <br><br>
                <span>总失败次数：{{djedapiToday.todayfail}}次</span>
  </div>
  <div>
  </div>
</el-card>
  </el-col>

  


 <el-col v-show="djedui[0]" :span="12">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px" src="../assets/djed.png"><span>JUST UI</span>
<el-button style="float: right; padding: 3px 0" type="text" @click="JustUIdialog = true">查看详情</el-button>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in djedui" :key = "item" class="text item">
    <el-progress style="margin-top:25px;margin-bottom:20px" type="circle" :color="djedui[0].status == '1'?'#5cb87a':'#f56c6c'"  :percentage="Math.ceil(djedui[0].sucessnum/djedui[0].sum*100)"></el-progress>
  
    </div>
  </div>
      <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>
    
  <div style="float: left;margin-left:30px;margin-top:30px">
          <h4>最近一次执行情况</h4>
      <span>成功用例数:{{djedui[0].sucessnum}}</span>
                      <br><br>
      <span>失败用例数:{{djedui[0].failnum}}</span>
                      <br><br>
  </div>
  <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>
    
  <div style="float: left;margin-left:30px;margin-top:30px">
          <h4>当天执行情况</h4>
                <span>总执行次数：{{djeduiToday.todaysum}}次</span>
                      <br><br>
                <span>总成功次数：{{djeduiToday.todaysucess}}次</span>
                      <br><br>
                <span>总失败次数：{{djeduiToday.todayfail}}次</span>
  </div>
  <div>
  </div>
</el-card>
  </el-col> 


   <el-col v-show="tronweb[0]" :span="12">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px" src="../assets/djed.png"><span>TRONWEB API</span>
<el-button style="float: right; padding: 3px 0" type="text" @click="TronwebAPIdialog = true">查看详情</el-button>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in tronwebapi" :key = "item" class="text item">
    <el-progress style="margin-top:25px;margin-bottom:20px" type="circle" :color="tronwebapi[0].status == '1'?'#5cb87a':'#f56c6c'"  :percentage="Math.ceil(tronwebapi[0].sucessnum/tronwebapi[0].sum*100)"></el-progress>
  
    </div>
  </div>
      <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>
    
  <div style="float: left;margin-left:30px;margin-top:30px">
          <h4>最近一次执行情况</h4>
      <span>成功用例数:{{tronwebapi[0].sucessnum}}</span>
                      <br><br>
      <span>失败用例数:{{tronwebapi[0].failnum}}</span>
                      <br><br>
  </div>
  <div style="float: left;margin-left:20px;width:0;border-left:1px solid;border-color:#EBEEF5;height:220px"></div>
    
  <div style="float: left;margin-left:30px;margin-top:30px">
          <h4>当天执行情况</h4>
                <span>总执行次数：{{tronwebapiToday.todaysum}}次</span>
                      <br><br>
                <span>总成功次数：{{tronwebapiToday.todaysucess}}次</span>
                      <br><br>
                <span>总失败次数：{{tronwebapiToday.todayfail}}次</span>
  </div>
  <div>
  </div>
</el-card>
  </el-col> 


</el-row>
<el-dialog width="70%" title="TRONSCAN UI 最近30次执行结果" :visible.sync="TronscanUIdialog">
  <TronscanUI></TronscanUI>
</el-dialog> 

<el-dialog width="70%" title="TRONSCAN API 最近30次执行结果" :visible.sync="TronscanAPIdialog">
  <TronscanAPI></TronscanAPI>
</el-dialog> 

<el-dialog width="70%" title="TRONLINK API 最近30次执行结果" :visible.sync="TronlinkAPIdialog">
  <TronlinkAPI></TronlinkAPI>
</el-dialog> 

<el-dialog width="70%" title="TRONDRID API 最近30次执行结果" :visible.sync="TronGridAPIdialog">
  <TrongridAPI></TrongridAPI>
</el-dialog> 

<el-dialog width="70%" title="JUST API 最近30次执行结果" :visible.sync="JustAPIdialog">
  <DjedAPI></DjedAPI>
</el-dialog> 

<el-dialog width="70%" title="JUST UI 最近30次执行结果" :visible.sync="JustUIdialog">
  <DjedUI></DjedUI>
</el-dialog> 

<el-dialog width="70%" title="JUST UI 最近30次执行结果" :visible.sync="TronwebAPIdialog">
  <TronwebAPI></TronwebAPI>
</el-dialog> 



  </div>
</template>


<style scoped>
.box-card {
    width: auto;
    margin: 5px 0;

  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 20px 0;
  }

</style>

<script>
import TronscanUI from '../views/TronscanUI.vue'
import TronscanAPI from '../views/TronscanAPI.vue'
import TronlinkAPI from '../views/TronlinkAPI.vue'
import TrongridAPI from '../views/TrongridAPI.vue'
import DjedAPI from '../views/DjedAPI.vue'
import DjedUI from '../views/DjedUI.vue'
import TronwebAPI from '../views/TronwebAPI.vue'

  export default {
    components: {TronscanUI,TronscanAPI,TronlinkAPI,TrongridAPI,DjedAPI,DjedUI,TronwebAPI},
    data() {
      return {
        TronscanUIdialog : false,
        TronscanAPIdialog : false,
        TronlinkAPIdialog : false,
        JustUIdialog : false,    
        JustAPIdialog : false,  
        TronwebAPIdialog : false,      
        TronGridAPIdialog : false,                    
        tronscanui :[{}],
        tronscanapi :[{}],
        tronlinkui :[{}],
        tronlinkapi :[{}],
        djedapi :[{}],
        djedui :[{}],
        tronwebapi :[{}],
        tronscanuiToday :[{}],
        tronscanapiToday :[{}],
        tronlinkuiToday :[{}],
        tronlinkapiToday :[{}],
        djedapiToday :[{}],
        djeduiToday :[{}],
        tronwebapiToday :[{}]
      
      }
    },
    methods:{
      getList(){
        this.$axios.get("/tronscanui/lastest")
        .then(res=>{
          console.log(res);
          this.tronscanui = res.data;
        }),
        this.$axios.get("/tronscanapi/lastest")
        .then(res=>{
          console.log(res);
          this.tronscanapi = res.data;
        }),
        this.$axios.get("/trongridapi/lastest")
        .then(res=>{
          console.log(res);
          this.tronlinkui = res.data;
        }),
        this.$axios.get("/tronlinkapi/lastest")
        .then(res=>{
          console.log(res);
          this.tronlinkapi = res.data;
        }),
        this.$axios.get("/tronwebapi/lastest")
        .then(res=>{
          console.log(res);
          this.tronlinkapi = res.data;
        }),
        this.$axios.get("/djed/lastest")
        .then(res=>{
          console.log(res);
          this.djedapi = res.data;
        }),
        this.$axios.get("/djedui/lastest")
        .then(res=>{
          console.log(res);
          this.djedui = res.data;
        })
      },
      getToday(){
        this.$axios.get("/tronscanui/today")
        .then(res=>{
          console.log(res);
          this.tronscanuiToday = res.data;
        }),
        this.$axios.get("/tronscanapi/today")
        .then(res=>{
          console.log(res);
          this.tronscanapiToday = res.data;
        }),
        this.$axios.get("/trongridapi/today")
        .then(res=>{
          console.log(res);
          this.tronlinkuiToday = res.data;
        }),
        this.$axios.get("/tronwebapi/today")
        .then(res=>{
          console.log(res);
          this.tronlinkuiToday = res.data;
        }),
        this.$axios.get("/tronlinkapi/today")
        .then(res=>{
          console.log(res);
          this.tronlinkapiToday = res.data;
        }),
        this.$axios.get("/djed/today")
        .then(res=>{
          console.log(res);
          this.djedapiToday = res.data;
        }),
        this.$axios.get("/djedui/today")
        .then(res=>{
          console.log(res);
          this.djeduiToday = res.data;
        })
      },
    },
    mounted:function(){
      this.getList();
      this.getToday();
    }
  };
</script>
