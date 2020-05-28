<template>
  <div class="scan">
<el-row :gutter="12">

<el-col :span="12">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px;margin-right:8px" src="../assets/tronscan.png"><span>TRONSCAN API</span>
    <router-link to="/tronscanapi"><el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button></router-link>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in tronscanapi" :key = "item" class="text item">
    <el-progress  type="circle" :color="tronscanapi[0].status == '1'?'#5cb87a':'#f56c6c'" :percentage="Math.ceil(tronscanapi[0].sucessnum/tronscanapi[0].sum*100)"></el-progress>
    <div style="margin-left:7px;margin-top:10px;margin-bottom:-30px">
      <span>最近一次执行情况</span>
      <br>
      <span>成功用例数:{{tronscanapi[0].sucessnum}}</span>
      <br>
      <span>失败用例数:{{tronscanapi[0].failnum}}</span>
      </div>
    </div>
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
    <router-link to="/tronscanui"><el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button></router-link>
  </div>
  <div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in tronscanui" :key = "item" class="text item">
    <el-progress type="circle" :color="tronscanui[0].status == '1'?'#5cb87a':'#f56c6c'" :percentage="Math.ceil(tronscanui[0].sucessnum/tronscanui[0].sum*100)"></el-progress>
        <div style="margin-left:7px;margin-top:10px;margin-bottom:-30px">
      <span>最近一次执行情况</span>
      <br>
      <span>成功用例数:{{tronscanui[0].sucessnum}}</span>
      <br>
      <span>失败用例数:{{tronscanui[0].failnum}}</span>
      </div>

    </div>
  </div>
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
    <router-link to="/trongridapi"><el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button></router-link>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in tronlinkui" :key = "item" class="text item">
    <el-progress type="circle" :color="tronlinkui[0].status == '1'?'#5cb87a':'#f56c6c'" :percentage="Math.ceil(tronlinkui[0].sucessnum/tronlinkui[0].sum*100)"></el-progress>
  <div style="margin-left:7px;margin-top:10px;margin-bottom:-30px">
      <span>最近一次执行情况</span>
      <br>
      <span>成功用例数:{{tronlinkui[0].sucessnum}}</span>
      <br>
      <span>失败用例数:{{tronlinkui[0].failnum}}</span>
      </div>
    </div>
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
    <router-link to="/tronlinkapi"><el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button></router-link>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in tronlinkapi" :key = "item" class="text item">
    <el-progress type="circle" :color="tronlinkapi[0].status == '1'?'#5cb87a':'#f56c6c'" :percentage="Math.ceil(tronlinkapi[0].sucessnum/tronlinkapi[0].sum*100)"></el-progress>
    <div style="margin-left:7px;margin-top:10px;margin-bottom:-30px">
      <span>最近一次执行情况</span>
      <br>
      <span>成功用例数:{{tronlinkapi[0].sucessnum}}</span>
      <br>
      <span>失败用例数:{{tronlinkapi[0].failnum}}</span>
      </div>
    </div>
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
    <img style="width:18px;height:18px;margin-right:8px" src="../assets/djed.png"><span>DJED API</span>
    <router-link to="/djedapi"><el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button></router-link>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in djedapi" :key = "item" class="text item">
    <el-progress type="circle" :color="djedapi[0].status == '1'?'#5cb87a':'#f56c6c'" :percentage="Math.ceil(djedapi[0].sucessnum/djedapi[0].sum*100)"></el-progress>
  <div style="margin-left:7px;margin-top:10px;margin-bottom:-30px">
      <span>最近一次执行情况</span>
      <br>
      <span>成功用例数:{{djedapi[0].sucessnum}}</span>
      <br>
      <span>失败用例数:{{djedapi[0].failnum}}</span>
      </div>
    </div>
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
    <img style="width:18px;height:18px;margin-right:8px" src="../assets/djed.png"><span>DJED UI</span>
    <router-link to="/djedui"><el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button></router-link>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in djedui" :key = "item" class="text item">
    <el-progress type="circle" :color="djedui[0].status == '1'?'#5cb87a':'#f56c6c'"  :percentage="Math.ceil(djedui[0].sucessnum/djedui[0].sum*100)"></el-progress>
  <div style="margin-left:7px;margin-top:10px;margin-bottom:-30px">
      <span>最近一次执行情况</span>
      <br>
      <span>成功用例数:{{djedui[0].sucessnum}}</span>
      <br>
      <span>失败用例数:{{djedui[0].failnum}}</span>
      </div>
    </div>
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


</el-row>
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
  export default {
    data() {
      return {
        tronscanui :[{}],
        tronscanapi :[{}],
        tronlinkui :[{}],
        tronlinkapi :[{}],
        djedapi :[{}],
        djedui :[{}],
        tronscanuiToday :[{}],
        tronscanapiToday :[{}],
        tronlinkuiToday :[{}],
        tronlinkapiToday :[{}],
        djedapiToday :[{}],
        djeduiToday :[{}],
      
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
      }
    },
    mounted:function(){
      this.getList();
      this.getToday();
    }
  };
</script>