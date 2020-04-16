<template>
  <div class="home">
<el-row :gutter="12">
<el-col :span="12">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px;margin-right:8px" src="../assets/tronscan.png"><span>TRONSCAN API</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in tronscanapi" :key = "item" class="text item">
    <el-progress type="circle" :color="tronscanapi[0].status == '1'?'#5cb87a':'#f56c6c'" :percentage="Math.ceil(tronscanapi[0].sucessnum/tronscanapi[0].sum*100)"></el-progress></div>
  </div>
  <div style="float: left;margin-left:30px;margin-top:30px">
          <span >成功用例数:{{tronscanapi[0].sucessnum}}</span>
          <br>
          <span >失败用例数:{{tronscanapi[0].failnum}}</span>
  </div>
  <div>
  </div>
</el-card>
  </el-col>
<el-col :span="12">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px;margin-right:8px" src="../assets/tronscan.png"><span>TRONSCAN UI</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in tronscanui" :key = "item" class="text item">
    <el-progress type="circle" :color="tronscanui[0].status == '1'?'#5cb87a':'#f56c6c'" :percentage="Math.ceil(tronscanui[0].sucessnum/tronscanui[0].sum*100)"></el-progress></div>
  </div>
  <div style="float: left;margin-left:30px;margin-top:30px">
          <span >成功用例数:{{tronscanui[0].sucessnum}}</span>
          <br>
          <span >失败用例数:{{tronscanui[0].failnum}}</span>
  </div>
  <div>
  </div>
</el-card>
  </el-col>
<el-col :span="12">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px" src="../assets/tronlink.png"><span>TRONLINK UI</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in tronlinkui" :key = "item" class="text item">
    <el-progress type="circle" :percentage="Math.ceil(tronlinkui[0].sucessnum/tronlinkui[0].sum*100)"></el-progress></div>
  </div>
  <div style="float: left;margin-left:30px;margin-top:30px">
          <span >成功用例数:{{tronlinkui[0].sucessnum}}</span>
          <br>
          <span >失败用例数:{{tronlinkui[0].failnum}}</span>
  </div>
  <div>
  </div>
</el-card>
  </el-col>
  <el-col :span="12">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px" src="../assets/tronlink.png"><span>TRONLINK API</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in tronlinkapi" :key = "item" class="text item">
    <el-progress type="circle" :percentage="Math.ceil(tronlinkapi[0].sucessnum/tronlinkapi[0].sum*100)"></el-progress></div>
  </div>
  <div style="float: left;margin-left:30px;margin-top:30px">
          <span >成功用例数:{{tronlinkapi[0].sucessnum}}</span>
          <br>
          <span >失败用例数:{{tronlinkapi[0].failnum}}</span>
  </div>
  <div>
  </div>
</el-card>
  </el-col>
  <el-col :span="12">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px" src="../assets/djed.png"><span>DJED API</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in djedapi" :key = "item" class="text item">
    <el-progress type="circle" :color="djedapi[0].status == '1'?'#5cb87a':'#f56c6c'" :percentage="Math.ceil(djedapi[0].sucessnum/djedapi[0].sum*100)"></el-progress></div>
  </div>
  <div style="float: left;margin-left:30px;margin-top:30px">
          <span >成功用例数:{{djedapi[0].sucessnum}}</span>
          <br>
          <span >失败用例数:{{djedapi[0].failnum}}</span>
  </div>
  <div>
  </div>
</el-card>
  </el-col>
<el-col :span="12">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
    <img style="width:18px;height:18px;margin-right:8px" src="../assets/djed.png"><span>DJED UI</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
      <div style="float: left;margin-left:20px;margin-bottom:30px"><div v-for="(item) in djedui" :key = "item" class="text item">
    <el-progress type="circle" :percentage="Math.ceil(djedui[0].sucessnum/djedui[0].sum*100)"></el-progress></div>
  </div>
  <div style="float: left;margin-left:30px;margin-top:30px">
          <span >成功用例数:{{djedui[0].sucessnum}}</span>
          <br>
          <span >失败用例数:{{djedui[0].failnum}}</span>
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
        this.$axios.get("/tronlinkui/lastest")
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
      }
    },
    mounted:function(){
      this.getList();
    }
  };
</script>