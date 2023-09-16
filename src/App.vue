<template>
  <div id="app">
    <TopHeader></TopHeader>
    <!-- <AuthorInfo></AuthorInfo> -->
    <div class="flex-wrap jbAPyy">
      <div class="left-content">
        <div class="ant-spin-nested-loading css-ua2002">
          <div class="ant-spin-container">
            <router-view />
          </div>

        </div>
      </div>
      <div class="right-info">
        <div class="sc-jSUZER leQUZu">
          <div class="avatar">
            <img src="./assets/image/1.jpg" alt="">
          </div>
          <div class="person-name">
            ChenZe
          </div>
          <div class="person-info">
            <div class="school-info">
              <div class="major">
                南昌理工学院-软件工程
              </div>
              <div class="duration">2020-2024</div>
            </div>
            <div class="location">
              <span>江西-南昌</span>
            </div>
            <div class="qianduan">前端：vue3</div>
            <div class="houduan">后端：node</div>
            <div class="email">2097618650@qq,com</div>
            <div class="motto">努力是基础</div>
            <div class="accounts">社交账号</div>
            <div class="account-icon">
              <div class="qq"><img src="./assets/image/qq.jpg" alt=""></div>
              <div class="weixin"><img src="./assets/image/weixin.jpg" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import TopHeader from '../src/components/TopHeader.vue'
import AuthorInfo from '../src/components/authorInfo.vue'
import Footer from '../src/components/BottomFooter.vue'
export default {
  components: {
    TopHeader,
    AuthorInfo,
    Footer
  }
}
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .jbAPyy .left-content {
    width: 100% !important;
    margin: 0px !important;
    padding: 0px !important;
  }
  .jbAPyy .right-info {
    display: none;
  }
}
@media screen and (max-width: 960px) {
  .jbAPyy .right-info {
    width: 25%;
  }
  .jbAPyy .left-content {
    width: 70%;
  }
}
#app {
  background-color: #f0f2f5;
}
.jbAPyy .left-content {
  width: 57%;
  // min-height: 900px;
  border-radius: 5px;
  margin-right: -80px;
}
:where(.css-ua2002).ant-spin-nested-loading {
  position: relative;
}
:where(.css-ua2002)[class^='ant-spin'],
:where(.css-ua2002)[class*=' ant-spin'] {
  font-family: dengxian, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol, 'Noto Color Emoji';
  font-size: 14px;
  box-sizing: border-box;
}
:where(.css-ua2002)[class^='ant-spin']::before,
:where(.css-ua2002)[class*=' ant-spin']::before,
:where(.css-ua2002)[class^='ant-spin']::after,
:where(.css-ua2002)[class*=' ant-spin']::after {
  box-sizing: border-box;
}
:where(.css-ua2002).ant-spin-nested-loading .ant-spin-container::after {
  position: absolute;
  top: 0;
  inset-inline-end: 0;
  bottom: 0;
  inset-inline-start: 0;
  z-index: 10;
  width: 50%;
  height: 100%;
  background: #ffffff;
  opacity: 0;
  // transition: all 0.3s;
  content: '';
  pointer-events: none;
}
.jbAPyy {
  margin-top: 60px;
  align-items: flex-start;
  background: #f0f2f5 no-repeat;
}
.flex-wrap {
  // align-items: stretch;
  display: flex;
  justify-content: space-evenly;
  align-content: flex-start;
}
// 右侧信息
.jbAPyy .right-info {
  min-width: 200px;
  background-color: rgb(255, 255, 255);
  animation: 0.6s ease-in 0s 1 normal none running move_Animation;
  border: 1px solid rgb(242, 235, 235);
  box-shadow: white 0px 0px 10px;
  border-radius: 10px;
  width: 15%;
  margin-top: 75px;
}
@keyframes move_Animation {
  0% {
    transform: translateX(110%);
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0px);
  }
}
.leQUZu {
  user-select: none;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 15px 10px;
  .avatar {
    background: red;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .person-name {
    padding: 7px 0px;
    font-size: 19px;
    font-weight: 600;
    color: rgb(24, 144, 255);
  }
  .person-info {
    width: 100%;
    text-align: center;
    color: rgb(127, 127, 127);
    font-size: 13px;
    .school-info {
      font-size: 13px;
      color: rgb(17, 158, 130);
      padding: 5px 0px;
    }
    .account-icon {
      display: flex;
      justify-content: space-between;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
::-webkit-scrollbar-track {
  background-color: #912323;
  border-radius: 3px;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background-color: #491897;
  border-radius: 3px;
}

/* 滚动条悬停时的滑块样式 */
::-webkit-scrollbar-thumb:hover {
  background-color: #212a74;
  border-radius: 3px;
}
</style>
