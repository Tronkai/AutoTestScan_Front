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
        <el-table-column prop="status" label="状态" width="80px"></el-table-column>
<!--        <el-table-column prop="projectStartTime" label="项目开始时间" width="120px"></el-table-column>-->
<!--        <el-table-column prop="testEamilTime" label="提测时间" width="120px"></el-table-column>-->
<!--        <el-table-column prop="testStartTime" label="测试开始时间" width="120px"></el-table-column>-->
<!--        <el-table-column prop="testEndTime" label="测试完成时间" width="120px"></el-table-column>-->
        <el-table-column prop="expectedTime" label="预估上线时间" width="115px"></el-table-column>
        <el-table-column prop="projectEndTime" label="实际上线时间" width="115px"></el-table-column>
        <el-table-column style="text-align:center" prop="businessTime" label="测试周期" width="80px"></el-table-column>
      </el-table>
    </el-card>

  </div>


</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      loading: true,
      projectName:'WAT',
      isThisYearSelected: true,
      selectedTime: "本周",
      items: [],
      date: [],
      projects: []
    }
  },
  methods: {
    tableRowClassName({row}) {
      if (row.status == "已完成"){
        return 'success-row'
      }else if (row.status == "需求暂停"){
        return 'warning-row'
      }
    },
    handleSelect(command) {
      this.selectedTime = command;
      if (command === "本周") {
        this.selectWeek();
      } else if (command === "本月") {
        this.selectMonth();
      } else if (command === "本季度") {
        this.selectQuarter();
      } else if (command === "本年") {
        this.selectYear();
      }
    },
    updateData(val) {
      this.loading = true;
      this.date = val;
      this.fetchProjectStatus(this.projectName,this.date)
      this.fetchProjects(this.projectName,this.date)
    },
    selectWeek() {
      this.loading = true;
      this.selectedTime = "本周";
      this.isThisYearSelected = false;
      const start = moment().startOf("week").format("YYYY-MM-DD");
      const end = moment().endOf("week").format("YYYY-MM-DD");
      this.date = [start, end];
      this.fetchProjectStatus(this.projectName,this.date);
      this.fetchProjects(this.projectName,this.date);

    },
    selectMonth() {
      this.loading = true;
      this.selectedTime = "本月";
      this.isThisYearSelected = false;
      const start = moment().startOf("month").format("YYYY-MM-DD");
      const end = moment().endOf("month").format("YYYY-MM-DD");
      this.date = [start, end];
      this.fetchProjectStatus(this.projectName,this.date);
      this.fetchProjects(this.projectName,this.date);

    },
    selectQuarter() {
      this.loading = true;
      this.selectedTime = "本季度";
      this.isThisYearSelected = false;
      const month = moment().month();
      let quarterStart, quarterEnd;
      if (month < 3) {
        quarterStart = moment().set({ month: 0, date: 1 }).format("YYYY-MM-DD");
        quarterEnd = moment().set({ month: 2, date: 31 }).format("YYYY-MM-DD");
      } else if (month < 6) {
        quarterStart = moment().set({ month: 3, date: 1 }).format("YYYY-MM-DD");
        quarterEnd = moment().set({ month: 5, date: 30 }).format("YYYY-MM-DD");
      } else if (month < 9) {
        quarterStart = moment().set({ month: 6, date: 1 }).format("YYYY-MM-DD");
        quarterEnd = moment().set({ month: 8, date: 30 }).format("YYYY-MM-DD");
      } else {
        quarterStart = moment().set({ month: 9, date: 1 }).format("YYYY-MM-DD");
        quarterEnd = moment().set({ month: 11, date: 31 }).format("YYYY-MM-DD");
      }
      this.date = [quarterStart, quarterEnd];
      this.fetchProjectStatus(this.projectName,this.date)
      this.fetchProjects(this.projectName,this.date);
    },
    selectYear() {
      this.loading = true;
      this.selectedTime = "本年";
      const start = moment().startOf("year").format("YYYY-MM-DD");
      const end = moment().endOf("year").format("YYYY-MM-DD");
      this.date = [start, end];
      this.fetchProjectStatus(this.projectName,this.date);
      this.fetchProjects(this.projectName,this.date);
    },
    getData(){
      const numbers = [];
      this.items = this.items.map((item, index) => {
        return { name: item.name, number: numbers[index].toString() };
      });
    },
    async fetchProjects(project,date) {
      try {
        const response = await this.$axios.get("/epic",{
          params:{
            project: project,
            startDate: date[0],
            endDate: date[1]
          }
        });
        this.projects = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProjectStatus(project,date) {
      try {
        const response = await this.$axios.get("/status",{
          params:{
            project: project,
            startDate: date[0],
            endDate: date[1]
          }
        });
        console.log(response.data)
        this.items = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
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
  width: 856px;
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
