<template>
  <div class="tronscanui">
<el-table :data="items" :row-class-name="tableRowClassName">
       <el-table-column fixed prop="time" :formatter="test2" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="time" :formatter="test" label="时间" >
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="sucessclass" label="成功用例">
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="failclass" label="失败用例">
        </el-table-column>
        <el-table-column prop="sucessnum" label="成功用例数">
        </el-table-column>
        <el-table-column prop="failnum" label="失败用例数">
        </el-table-column>
        <el-table-column prop="sum" label="总用例数">
        </el-table-column>
        <el-table-column prop="status" :formatter="formatBoolean" label="执行结果">
        </el-table-column>
      </el-table>  
      </div>
</template>
<style scoped>
.el-table .warning-row {
    background: #F56C6C;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
<script>
  export default {
    data() {
      return {
        items :[{}],
      }
    },
    methods:{
      getList(){
        this.$axios.get("/tronscanui")
        .then(res=>{
          console.log(res);
          this.items = res.data;
        })
      },
      formatBoolean: function (row, column, cellValue) {
                var ret = ''  
                if (cellValue == 1) {
                    ret = "成功"  
                } else {
                    ret = "失败"
                }
                return ret;
      },
      test: function (row, column, cellValue) {
                return cellValue.substring(11,19);
      },
      test2: function (row, column, cellValue) {
                return cellValue.substring(0,10);
      },
      tableRowClassName({ row }) {
      if (row.status ==2) {
        return 'warning-row'
      } else {
        return 'success-row'
      }
    }
    },
    mounted:function(){
      this.getList();
    }
  };
</script>