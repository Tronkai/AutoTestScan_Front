<template>
  <div>
    <el-card shadow="hover" v-loading="loading" class="big-card" :body-style="{ padding: '0px' }">
      <div style="display: flex; justify-content: flex-end; margin-top: 15px ;border-bottom: 1px solid #f0f2f3;padding-bottom: 15px">
        <span style="margin-right: 110px;margin-top: 8px;font-weight: 700">{{selectedTime}}关键数据</span>
        <el-button-group class="ml-4">
          <el-button autofocus  class="selected-button" size="large" @click="selectWeek">本周</el-button>
          <el-button  class="selected-button" size="large" @click="selectMonth">本月</el-button>
          <el-button  class="selected-button" size="large" @click="selectQuarter">本季度</el-button>
          <el-button  class="selected-button" size="large" @click="selectYear" >本年</el-button>
          <el-date-picker value-format="yyyy-MM-dd"  v-model="date" type="daterange" size="large" @change="updateData" style="margin-left: 3px;margin-right: 10px; width: 225px;" />
        </el-button-group>
      </div>
      <el-row  :gutter="20">
        <el-col  :span="12" v-for="item in items" :key="item.name">
          <div class="item-content">
            <p style="color: #91979d;font-size: 14px;text-align:center;margin-right: 80px">{{item.name}}</p>
            <p style="font-weight: 600;font-size: 15px;text-align:center;margin-right: 80px">{{item.number}}</p>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card shadow="hover">
      <el-table :row-class-name="tableRowClassName" v-loading="loading"  :data="projects" border>
        <el-table-column width="80px" label="时间记录" type="expand">
          <template slot-scope="scope">
            <el-steps :active="scope.row.active" align-center finish-status="success" process-status="process">
              <el-step :title="scope.row.projectStartTime" description="项目开始时间"></el-step>
              <el-step :title="scope.row.testEamilTime" description="提测时间"></el-step>
              <el-step :title="scope.row.testStartTime" description="测试开始时间"></el-step>
              <el-step :title="scope.row.testEndTime"  description="测试完成时间"></el-step>
              <el-step :title="scope.row.projectEndTime" description="实际上线时间"></el-step>
            </el-steps>
          </template>
        </el-table-column>
        <el-table-column  prop="content" label="项目内容" width="345px"><template slot-scope="scope">
          <a :href="'https://troneco.atlassian.net/browse/' +scope.row.key">{{ scope.row.content }}</a>
        </template></el-table-column>
        <el-table-column sortable prop="status" label="状态" width="80px"></el-table-column>
        <el-table-column prop="projectStartTime" label="项目开始时间" width="110px"></el-table-column>


        <!--        <el-table-column prop="testEamilTime" label="提测时间" width="120px"></el-table-column>-->
        <!--        <el-table-column prop="testStartTime" label="测试开始时间" width="120px"></el-table-column>-->
        <!--        <el-table-column prop="testEndTime" label="测试完成时间" width="120px"></el-table-column>-->
        <el-table-column prop="expectedTime" label="预估上线时间" width="110px"></el-table-column>
        <el-table-column prop="projectEndTime" label="实际上线时间" width="110px"></el-table-column>

        <el-table-column style="text-align:center" prop="businessTime" label="测试周期" width="80px"></el-table-column>
      </el-table>
    </el-card>

  </div>


</template>

<script>
import moment from 'moment';
export default {
  props: {
    projectName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: true,
      isThisYearSelected: true,
      selectedTime: "本周",
      items: [],
      date: [],
      projects: []
    }
  },
  methods: {
// 根据行的状态设置表格行的类名
    tableRowClassName({row}) {
      if (row.status == "已完成") {  // 如果行状态为“已完成”
        return 'success-row'  // 返回“success-row”类名
      } else if (row.status == "需求暂停") {  // 如果行状态为“需求暂停”
        return 'warning-row'  // 返回“warning-row”类名
      }
    },

// 处理下拉菜单选择的函数
    handleSelect(command) {
      this.selectedTime = command;  // 将选择的时间设置为“selectedTime”
      if (command === "本周") {  // 如果选择了“本周”
        this.selectWeek();  // 调用“selectWeek()”函数
      } else if (command === "本月") {  // 如果选择了“本月”
        this.selectMonth();  // 调用“selectMonth()”函数
      } else if (command === "本季度") {  // 如果选择了“本季度”
        this.selectQuarter();  // 调用“selectQuarter()”函数
      } else if (command === "本年") {  // 如果选择了“本年”
        this.selectYear();  // 调用“selectYear()”函数
      }
    },

// 更新数据的函数
    updateData(val) {
      this.loading = true;  // 设置加载状态为“true”
      this.date = val;  // 设置日期为传入的值
      this.fetchProjectStatus(this.projectName,this.date)  // 获取项目状态
      this.fetchProjects(this.projectName,this.date)  // 获取项目信息
    },

// 选择本周
    selectWeek() {
      this.loading = true;  // 设置加载状态为“true”
      this.selectedTime = "本周";  // 将选择的时间设置为“本周”
      this.isThisYearSelected = false;  // 设置选择的年份为“false”
      const start = moment().startOf("week").format("YYYY-MM-DD");  // 获取本周的第一天
      const end = moment().endOf("week").format("YYYY-MM-DD");  // 获取本周的最后一天
      this.date = [start, end];  // 设置日期为本周的起止日期
      this.fetchProjectStatus(this.projectName,this.date);  // 获取项目状态
      this.fetchProjects(this.projectName,this.date);  // 获取项目信息
    },

// 选择本月
    selectMonth() {
      this.loading = true;  // 设置加载状态为“true”
      this.selectedTime = "本月";  // 将选择的时间设置为“本月”
      this.isThisYearSelected = false;  // 设置选择的年份为“false”
      const start = moment().startOf("month").format("YYYY-MM-DD");  // 获取本月的第一天
      const end = moment().endOf("month").format("YYYY-MM-DD");  // 获取本月的最后一天
      this.date = [start, end];  // 设置日期为本月的起止日期
      this.fetchProjectStatus(this.projectName,this.date);  // 获取项目状态
      this.fetchProjects(this.projectName,this.date);  // 获取项目信息
    },

// 选择本季度
    selectQuarter() {
      this.loading = true;  // 设置加载状态为“true”
      this.selectedTime = "本季度";  // 将选择的时间设置为“本季度”
      this.isThisYearSelected = false;  // 设置选择的年份为“false”
      const month = moment().month();  // 获取当前月份
      let quarterStart, quarterEnd;
      if (month < 3) {  // 如果当前月份在1~3月
        quarterStart = moment().set({ month: 0, date: 1 }).format("YYYY-MM-DD");  // 获取第一季度的起始日期
        quarterEnd = moment().set({ month: 2, date: 31 }).format("YYYY-MM-DD");  // 获取第一季度的结束日期
      } else if (month < 6) {  // 如果当前月份在4~6月
        quarterStart = moment().set({ month: 3, date: 1 }).format("YYYY-MM-DD");  // 获取第二季度的起始日期
        quarterEnd = moment().set({ month: 5, date: 30 }).format("YYYY-MM-DD");  // 获取第二季度的结束日期
      } else if (month < 9) {  // 如果当前月份在7~9月
        quarterStart = moment().set({ month: 6, date: 1 }).format("YYYY-MM-DD");  // 获取第三季度的起始日期
        quarterEnd = moment().set({ month: 8, date: 30 }).format("YYYY-MM-DD");  // 获取第三季度的结束日期
      } else {  // 如果当前月份在10~12月
        quarterStart = moment().set({ month: 9, date: 1 }).format("YYYY-MM-DD");  // 获取第四季度的起始日期
        quarterEnd = moment().set({ month: 11, date: 31 }).format("YYYY-MM-DD");  // 获取第四季度的结束日期
      }
      this.date = [quarterStart, quarterEnd];  // 设置日期为本季度的起止日期
      this.fetchProjectStatus(this.projectName,this.date);  // 获取项目状态
      this.fetchProjects(this.projectName,this.date);  // 获取项目信息
    },

// 选择本年
    selectYear() {
      this.loading = true;  // 设置加载状态为“true”
      this.selectedTime = "本年";  // 将选择的时间设置为“本年”
      const start = moment().startOf("year").format("YYYY-MM-DD");  // 获取本年的第一天
      const end = moment().endOf("year").format("YYYY-MM-DD");  // 获取本年的最后一天
      this.date = [start, end];  // 设置日期为本年的起止日期
      this.fetchProjectStatus(this.projectName,this.date);  // 获取项目状态
      this.fetchProjects(this.projectName,this.date);  // 获取项目信息
    },

    getData(){
      const numbers = [];
      this.items = this.items.map((item, index) => {
        return { name: item.name, number: numbers[index].toString() };
      });
    },
// 获取项目信息
    async fetchProjects(project,date) {
      try {
        const response = await this.$axios.get("/epic",{
          params:{
            project: project,  // 传入项目名称
            startDate: date[0],  // 传入日期的起始日期
            endDate: date[1]  // 传入日期的结束日期
          }
        });
        this.projects = response.data;  // 将返回的项目信息存储在“projects”中
      } catch (error) {
        console.error(error);  // 打印错误信息
      }
    },

// 获取项目状态
    async fetchProjectStatus(project,date) {
      try {
        const response = await this.$axios.get("/status",{
          params:{
            project: project,  // 传入项目名称
            startDate: date[0],  // 传入日期的起始日期
            endDate: date[1]  // 传入日期的结束日期
          }
        });
        console.log(response.data)  // 打印返回的数据
        this.items = response.data;  // 将返回的项目状态存储在“items”中
        this.loading = false;  // 设置加载状态为“false”
      } catch (error) {
        console.error(error);  // 打印错误信息
      }
    }

  },
  created() {
    this.selectWeek();
    this.fetchProjects(this.projectName,this.date);

  }
}
</script>

<style>
.big-card {
  height: 340px;
}
.item-content {
  margin-left: 100px;
  border-right: 1px solid #ccc;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.el-table .doing-row {
  background: #c6eef8;
}

</style>
