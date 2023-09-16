<template>
  <div>
    <!-- 我是详情页 -->
    <div class="details" v-for="item in details" :key="item.id">
      <!-- 标题 -->
      <h1 class="details-title">{{ item.title }}</h1>
      <!-- 描述 -->
      <div class="details-introduce">
        <el-divider>描述</el-divider>
        <div class="details-introduce-text">
          {{item.introduction}}
        </div>
      </div>
      <!-- 正文 -->
      <div class="details-content">
        <el-divider>正文</el-divider>
        <div class="details-content-text" v-html="item.content">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../util/axios.config.js'
export default {
  data() {
    return {
      Bid: '',
      details: ''
    }
  },
  mounted() {
    console.log(this.$route.params.id)
    this.Bid = this.$route.params.id
    this.getDetailsContent()
  },
  methods: {
    async getDetailsContent() {
      const res = await axios.get(`/admin/user/getDetails/${this.Bid}`)
      this.details = res.data
      console.log(res)
    }
  }
}
</script>
<style lang="scss">
.el-divider__text.is-center {
  left: 50%;
  color: #3c78d8;
  font-size: 20px;
  transform: translateX(-50%) translateY(-50%);
}
.details {
  margin-top: 15px;
  background-color: #fff;
  width: 100%;
  .details-title {
    padding: 20px 0;
    text-align: center;
    color: #209d7b;
  }
  .details-introduce {
    .details-introduce-text {
      padding: 10px 0 10px 10px;
      font-size: 16px;
      line-height: 1.5;
    }
  }
  .details-content {
    .details-content-text {
      padding-bottom: 10px;
    }
  }
}
</style>