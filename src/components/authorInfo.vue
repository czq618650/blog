<template lang="">
                <div class="right">
                  <div class="avater"></div>
              <div class="name">ChenZeQuan</div>
              <div class="authorInfo">
                <div class="School">南昌理工学院-软件工程</div>
                <div class="ShYear">2020-2024</div>
                <div class="address">江西-南昌</div>
                <div class="qianduan">前端：vue3</div>
                <div class="houduan">后端：node</div>
                <div class="email">2097618650@qq,com</div>
                <div class="motto">努力是基础</div>
                <div class="accounts">社交账号</div>
                <div class="account-icon">
                  <div class="qq"></div>
                  <div class="weixin"></div>
                </div>
              </div>
                </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.right {
  position: absolute;
  top: 50px;
  right: 50px;
  border-radius: 10px;
  background: red;
  margin-top: 50px;
  padding: 10px 0;
  width: 200px;
  height: calc(100vh - 150px);
  text-align: center;
  .avater {
    margin: 10px auto;
    width: 120px;
    height: 30%;
    border-radius: 50%;
    background: #1890ff;
  }
  .name {
    color: #1890ff;
    height: 10%;
    font-size: 20px;
    font-weight: 700;
  }
  .authorInfo {
    height: 60%;
    .motto {
      margin-top: 10px;
    }
    .accounts {
      margin: 10px 0;
    }
  }
}
</style>