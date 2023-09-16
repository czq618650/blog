<template lang="">
    <div class="blog-daily">
        <el-divider content-position="center" class="blog-daily-title">我的博客日常</el-divider>
        <!-- 第一次记录自己的日常，哈哈！！ -->
        <div class='daily-content'>
        <ul class="lis">
            <li  class="lis-item" v-for="item in dailyList" :key="item.id">
                <div  class="lis-left">
                  <div v-if="item.direction === 1" class="warp">
                    <div class="lis-left-introduct">{{item.title}}</div>
                    <div class="lis-left-content" v-html="item.content"></div>
                    <div class="lis-left-img"><img v-if="item.img !==''" v-lazy="'http://8.130.106.91:3001'+item.img" alt=""></div>
                    <div class="lis-time">
                      <div>{{formatTime.default.getTime(item.edittime)}}</div>
                      <el-divider></el-divider>
                    </div>
                  </div>
                </div>
                <div class="lis-center">
                    <div class="yuan"></div>
                    <div class="xian"></div>
                </div>
                <div  class="lis-right">
                  <div v-if="item.direction === 2" class="warp">
                    <div class="lis-right-introduct">{{item.title}}</div>
                    <div class="lis-right-content" v-html="item.content"></div>
                    <div class="lis-right-img"><img v-if="item.img !==''" v-lazy="'http://8.130.106.91:3001'+item.img" alt=""></div>
                    <div class="lis-time">
                      <div>{{item.edittime}}</div>
                      <el-divider></el-divider>
                    </div>
                  </div>
                </div>
            </li>

        </ul>
        </div>
    </div>
</template>
<script>
import axios from '../../util/axios.config.js'

export default {
  data() {
    return {
      dailyList: [],
      formatTime: require('../../util/formatTime.js')
    }
  },
  methods: {
    // 获取博客日常列表
    getBLdaily() {
      axios.get('/admin/user/getDailyList').then(res => {
        this.dailyList = res.data
        console.log(this.dailyList)
      })
    }
  },
  mounted() {
    this.getBLdaily()
  }
}
</script>
<style lang="scss">
.daily-content {
  background-color: #fff;
  .lis {
    .lis-item {
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      .lis-left {
        text-align: right;
        width: 46%;
        // background-color: #096;
      }
      .lis-center {
        width: 4%;
        // background-color: #444;
        text-align: center;
        .yuan {
          width: 10px;
          height: 10px;
          margin: auto;
          border: 3px solid rgb(69, 217, 227);
          border-radius: 50%;
          background-color: white;
        }
        .xian {
          margin: auto;
          width: 2px;
          height: calc(100% - 10px);
          background-color: #ccc;
        }
      }
      .lis-right {
        text-align: left;
        width: 46%;
        // background-color: #999;
      }
      .lis-right-img,
      .lis-left-img {
        img {
          width: auto;
          height: 100px;
        }
      }
      .lis-left-introduct,
      .lis-right-introduct {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
// .blog-daily-title {
//   margin: 10px 0;
// }
.warp {
  animation: 0.6s ease 0s 1 normal forwards running appear;
  transition: all 0.6s ease 0s;
  opacity: 0;
}
.el-divider--horizontal {
  margin: 15px 0 !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>