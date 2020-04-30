<template>
  <div class="runtronscanui">
      <div style="margin-bottom:15px">
      <span>选择IP：</span>
 <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
  <div>
  <span>选择用例：</span>
 <el-select v-model="value1" placeholder="请选择">
    <el-option
      v-for="item in cases"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        </div>
        <div style="margin-top:25px">
          <el-button  type="primary">执行用例</el-button>
        </div>
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
        options: [{
          value: '选项1',
          label: '44.2.33.123'
        }, {
          value: '选项2',
          label: 'http://tronscan.org'
        }, {
          value: '选项3',
          label: '32.298.37.1'
        }],
        cases: [{
          value: '选项1',
          label: '主功能'
        }, {
          value: '选项2',
          label: '全量'
        }],
        value: '',
        value1: ''
      }
    }
  }
</script>
