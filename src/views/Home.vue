

<template>

  <el-card v-loading="loading">
    <div slot="header" class="clearfix">
      <span style="font-weight: 600;font-size: 18px;">本周线上问题</span>
<!--      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
    </div>
    <div style="margin-bottom: 10px;"  v-for="(item, index) in bugList" :key="index">
      <div style="width: 120px;float: left"><el-tag style="font-weight: 400;font-size: 15px;" v-show="item.projecName" type="success">{{item.projecName}}</el-tag></div>
      <el-tag style="width:41px;font-weight: 400;font-size: 15px;" v-show="item.bugLevel" type="warning">{{item.bugLevel}}</el-tag>
      <el-tag v-show="item.onlinetest" type="info">onlinetest</el-tag>
      <el-button size="small" @click="getmsg(item.key)" type="primary" style="margin-right: 16px;float: right">
        查看详情
      </el-button>
      <el-drawer
          title="标题"
          :visible.sync="drawer"
          :with-header="false"
          size="60%">
        <div style="height:100vh; overflow-y: auto;" v-if="bug">
          <p>{{ bug.summary }}</p>
          <FormattedString :inputString=bug.description />
          <!-- add more data as required -->
        </div>
      </el-drawer>

      <el-popover
          placement="top-start"
          width="300"
          trigger="hover"
          :content="item.content">
        <el-tag effect="plain" style="width:570px;float:right;font-size: 15px;margin-right: 4px" slot="reference" v-show="item.content"><a target="_blank"  :href="'https://troneco.atlassian.net/browse/' +item.key">{{item.content }}</a></el-tag>
      </el-popover>
    </div>


  </el-card>
</template>
<style scoped>

</style>

<script>
  import moment from "moment";
  import FormattedString from '@/components/HelloWorld.vue';

  export default {
    components: {
      FormattedString,
    },
    data() {
      return {
        loading: true,
        bugList : [],
        show3: true,
        drawer: false,
        bug:[],
        imageUrl: ''
      }
    },
    methods:{
      async getBugList() {
        const start = moment().startOf("week").format("YYYY-MM-DD");
        const end = moment().endOf("week").format("YYYY-MM-DD");
        try {
          const response = await this.$axios.get("/online_bug_list", {
            params: {
              startDate: start,
              endDate: end
            }
          });
          this.bugList = response.data;
          this.loading = false;
        } catch (error) {
          console.error(error);
        }

      },
      async getmsg(key) {
        try {
          const response = await this.$axios.get("/online_bug", {
            params: {
              key: key,
            }
          });
          this.bug = response.data;
        } catch (error) {
          console.error(error);
        }
        this.drawer = true;
      }
    },
    created() {
      this.getBugList();
    }
  };
</script>
<style>
.el-tag {
  margin-left: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 542px;
}
</style>