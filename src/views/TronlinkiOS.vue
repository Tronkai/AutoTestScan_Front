<template>
  <div>
    <el-card class="big-card" :body-style="{ padding: '0px' }">
      <div style="display: flex; justify-content: flex-end; margin-top: 15px ;border-bottom: 1px solid #f0f2f3;padding-bottom: 15px">
        <span style="margin-right: 190px;margin-top: 8px;font-weight: bold">关键数据</span>
        <el-button-group class="ml-4">
          <el-button  class="selected-button" size="large" @click="selectWeek">本周</el-button>
          <el-button  class="selected-button" size="large" @click="selectMonth">本月</el-button>
          <el-button  class="selected-button" size="large" @click="selectQuarter">本季度</el-button>
          <el-button  class="selected-button" size="large" @click="selectYear" >本年</el-button>
          <el-date-picker value-format="yyyy-MM-dd"  v-model="date" type="daterange" size="large" @change="updateData" style="margin-left: 3px;margin-right: 10px; width: 225px;" />
        </el-button-group>
      </div>
      <el-row :gutter="20">
        <el-col :span="12" v-for="item in items" :key="item.name">
          <div class="item-content">
            <p>{{item.name}}</p>
            <p>{{item.number}}</p>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-card>

      <el-table :data="projects" border stripe>
        <el-table-column prop="content" label="项目内容" width="500px">
          <template slot-scope="scope">
            <a :href="'https://troneco.atlassian.net/browse/' +scope.row.key">{{ scope.row.content }}</a>
          </template>
        </el-table-column>
        <el-table-column prop="startTime" label="开始时间" width="120px">
        </el-table-column>
        <el-table-column prop="expectedTime" label="预计上线时间" width="120px"></el-table-column>
        <!--      <el-table-column prop="bugCount" label="Bug数" width="80px"></el-table-column>-->
        <el-table-column prop="status" label="状态" width="80px"></el-table-column>
      </el-table>
    </el-card>

  </div>


</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      projectName:'TIN',
      isThisYearSelected: true,
      selectedTime: "本年",
      items: [],
      date: [],
      projects: []
    }
  },
  methods: {
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
      this.date = val;
      this.fetchProjectStatus(this.projectName,this.date)
    },
    selectWeek() {
      this.isThisYearSelected = false;
      const start = moment().startOf("week").format("YYYY-MM-DD");
      const end = moment().endOf("week").format("YYYY-MM-DD");
      this.date = [start, end];
      this.fetchProjectStatus(this.projectName,this.date)

    },
    selectMonth() {
      this.isThisYearSelected = false;
      const start = moment().startOf("month").format("YYYY-MM-DD");
      const end = moment().endOf("month").format("YYYY-MM-DD");
      this.date = [start, end];
      this.fetchProjectStatus(this.projectName,this.date)


    },
    selectQuarter() {
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


    },
    selectYear() {
      const start = moment().startOf("year").format("YYYY-MM-DD");
      const end = moment().endOf("year").format("YYYY-MM-DD");
      this.date = [start, end];
      this.fetchProjectStatus(this.projectName,this.date)

    },
    getData(){
      const numbers = [1, 200, 4, 832, 221, "560天"];
      this.items = this.items.map((item, index) => {
        return { name: item.name, number: numbers[index].toString() };
      });
    },
    async fetchProjects(project) {
      try {
        // 这里可以使用axios或其他方法发送请求获取数据
        const response = await this.$axios.get("/epic",{
          params:{
            project: project,
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
      } catch (error) {
        console.error(error);
      }
    }
  },
  created() {
    this.selectYear();
    this.fetchProjects(this.projectName);

  }
}
</script>

<style>
.big-card {
  width: 856px;
  height: 350px;
}
.item-content {
  margin-left: 100px;
  border-right: 1px solid #ccc;
}
</style>
