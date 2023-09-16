<template lang="">
    <div>
        <div class="product-item">
            <div class="introduce">实战与生活共几篇</div>
            <div class="product">
                <div class="bgImg">
                    <div class="bgIntroduce">
                      <div class="text">全栈企业门户管理</div>
                    <div class="jsz">基于Vue3+Node+Mongodb的全栈项目</div>
                    </div>

                </div>
            </div>
            <div class="product">
                <div class="bgImg">
                    <div class="bgIntroduce">
                      <div class="text">vue2个人博客</div>
                    <div class="jsz">基于Vue2+MySql的个人博客</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
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
.product-item {
  padding: 15px 0;
  .introduce {
    // background-color: #096;
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 10px 5px;
    width: 100%;
    color: rgb(86, 86, 86);
    font-weight: 600;
  }
  .product {
    margin-top: 10px;
    width: 100%;
    height: 288px;
    border-radius: 10px;
    cursor: pointer;
    animation: 0.7s ease-out 0s 1 normal forwards running leftMove;
    .bgImg {
      border-radius: 10px;
      position: relative;
      text-align: center;
      width: 100%;
      height: 100%;
      position: relative;
      background: url('../../assets/image/bg.jpeg') no-repeat;
      background-size: cover;
      .bgIntroduce {
        border-radius: 10px;
        position: absolute;
        background: rgba($color: #000000, $alpha: 0);
        width: 100%;
        height: 100%;
        transition: all 0.3s;
      }
      .bgIntroduce:hover {
        background: rgba($color: #000000, $alpha: 0.6);
        transition: all 0.3s;
        .text {
          top: 30%;
          transition: all 0.8s;
        }
        .jsz {
          bottom: 40%;
          opacity: 1;
          transition: all 0.8s;
        }
      }
      .jsz {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        color: white;
        font-size: 20px;
        opacity: 0;
      }
      .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 30px;
        font-weight: 700;
      }
    }
  }
}
</style>