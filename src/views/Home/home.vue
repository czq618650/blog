<template lang="">

        <el-main class="sc-csuSiG dNdNsC">
                <div class="sc-ipEyDJ fVsgSy">
        <div class="introduce">博客日志共<span>{{blogList.length}}</span>篇</div>
      <div>
        <input class='search' type='text' placeholder='请输入内容' id="" ref="search" v-model='searchValue' @change='handleSearch'>
      </div>
        </div>
          <el-card class="box-card" v-for="item in blogList.slice((currentPage4-1)*pageSize4,currentPage4*pageSize4)" :key="item.id">
            <div class="blog-item" @click='handleDetails(item)' >
              <div ><span class="CnTitle">{{item.title}}</span></div>
              <div class="blog-time"><span class="time">{{formatTime.default.getTime(item.edittime)}}</span><span class="technology" v-for="types in item.type.split(',')" :key="types">{{types}}</span></div>
              <div class="pic">
                <img :src="'http://8.130.106.91:3001' + item.img" alt="">
              </div>
            </div>          
        </el-card>
        <!-- </div> -->
        <!-- page-size每页个数，pager-count显示的最高页数，total总个数-->
        <el-pagination
  :page-size="pageSize4"
  :pager-count="5"
  layout="prev, pager, next"
  :total="blogList.length" :current-page="currentPage4"     @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
</el-pagination>
        </el-main>
</template>
<script>
// import AuthorInfo from '../../components/authorInfo.vue'
// import axios from 'axios'
import axios from '../../util/axios.config.js' //换了名字，
export default {
  data() {
    return {
      activeIndex: '1',
      blogList: [],
      formatTime: require('../../util/formatTime.js'),
      currentPage4: 1,
      pageSize4: 5,
      searchValue: ''
    }
  },
  methods: {
    // 	pageSize每页条数改变时
    handleSizeChange(val) {
      this.pageSize4 = val
      console.log(`每页 ${val} 条`)
    },
    // 	currentPage当前页改变时会触发
    handleCurrentChange(val) {
      this.currentPage4 = val
      console.log(`当前页: ${val}`)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    //   终检内容部分
    getBlogList() {
      axios.get('/admin/user/getBlogList').then(res => {
        this.$data.blogList = res.data
        this.$data.blogList.type = res.data.map(item => item.type)
        console.log(res.data)
      })
    },
    handleDetails(item) {
      console.log(1)
      console.log(item)
      this.$router.push(`/BlogDetails/${item.id}`)
    },
    // 搜索查询
    async handleSearch() {
      console.log(this.searchValue.trim())
      if (this.searchValue.trim()) {
        let res = await axios.get(`/admin/user/search/${this.searchValue.trim()}`)
        this.blogList = res.data
      } else {
        let res = await axios.get('/admin/user/getBlogList')
        this.blogList = res.data
      }
    }
  },
  mounted() {
    this.getBlogList()
    console.log(this.$refs.search)
    // console.log(this.search)
  }
}
</script>
<style lang="scss">
//   终检内容部分
.dNdNsC {
  padding: 15px 0px;
  // height: 660px;
  .fVsgSy {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 10px 5px;
    width: 100%;
    color: rgb(86, 86, 86);
    font-weight: 600;
    height: 50px;

    .introduce {
      height: 50px;
      line-height: 50px;
      // text-align: center;
      // padding-top: 50%;
      // transform: translateY(50%);
      span {
        color: #1890ff;
      }
    }
    .search {
      width: 150px;
      margin-top: 10px;
    }
  }
  @keyframes leftMove {
    0% {
      opacity: 0;
      transform: translate(-40%, 0px);
    }
    50% {
      opacity: 1;
      transform: translate(3%, 0px);
    }
    65% {
      opacity: 1;
      transform: translate(-2.5%, 0px);
    }
    80% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
    90% {
      opacity: 1;
      transform: translate(-1%, 0px);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
  .box-card {
    width: 100%;
    margin-bottom: 50px;
    cursor: pointer;
    animation: 0.7s ease-out 0s 1 normal forwards running leftMove;

    // 发布标题
    .CnTitle {
      padding: 10px;
      font-size: 20px;
      color: #1890ff;
      font-weight: 600;
    }
    // 文章发布时间
    .blog-item {
      // margin-bottom: 50px;
      .blog-time {
        .time {
          padding: 10px;
          color: #5f6060;
        }
        .technology {
          margin-left: 20px;
          color: #fff;
          display: inline-block;
          padding: 3px 10px;
          border-radius: 5px;
          background: #d71e1e;
        }
      }
      // 文章图片
      .pic {
        width: 100%;
        margin-top: 10px;
        border-radius: 20px;
        // height: calc(100vh - 250px);
        height: 300px;
        background: red;
        overflow: hidden;
        img {
          width: 100%;
          height: 300px;
          transition: transform 0.8s; /* 添加过渡效果 */
        }

        img:hover {
          transform: scale(1.2); /* 鼠标移入时放大1.3倍 */
        }
      }
    }
  }
}
:where(.css-ua2002).ant-input-affix-wrapper {
  position: relative;
  display: inline-flex;
  width: 100%;
  min-width: 0;
  // padding: 4px 11px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  background-color: #ffffff;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 6px;
  // transition: all 0.2s;
}
.el-card {
  border-radius: 10px !important;
}
</style>