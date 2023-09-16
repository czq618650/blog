<template lang="">
    <div class="footer">
        <div>本系统由vue2 + element + mysql制作</div>
        <div>陈某人的博客</div>
        <div class='dance-icon'>ｸﾞｯ!(๑•̀ㅂ•́)و✧</div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.footer {
  width: 100%;
  height: 100px;
  bottom: 0;
  text-align: center;
  background-color: #f0f2f5;
  margin-top: 20px;
}
@keyframes dance {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(5px) rotate(-5deg);
  }
  70% {
    transform: translateY(0px) rotate(-5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}
</style>