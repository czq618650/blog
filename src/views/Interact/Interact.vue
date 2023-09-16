<template>
  <div class="interaction-box">
    <div class="interaction-header">
      <div class="header-title">
        <h1 class="h1-title">友情链接</h1>
        <div class="tip">(顺序随机,不分先后)</div>
      </div>
      <!-- 分割线 -->
      <div class="fancy-divider"></div>
      <div class="link-content">
        <div class="jKPDNM">
          <div class="jKPDNM-left">
            <div class="top">key Night</div>
            <div class="bottom">生于忧患死于安乐</div>
          </div>
          <div class="jKPDNM-right">
            <img src="../../assets/image/aaa (1).png" alt="" class="avatar">
          </div>
        </div>
      </div>
      <div class="link-apply">
        <div class="apply-tip">
          <span class="apply-tip-title">
            ❤欢迎大家给我评论啊❤
          </span>
        </div>
      </div>
    </div>
    <div class="interaction-fooder">
      <div class="interaction-fooder-comment">
        <div class="comment-input">
          <div class="input-tip">可以在这里发表你的看法或者建议</div>
          <textarea name="" id="" cols="90" rows="10"></textarea>
        </div>
        <!-- 评论区 -->
        <div class="comment-content"></div>

      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@media screen and (max-width: 540px) {
  .interaction-box .interaction-header .link-content .jKPDNM {
    width: 100% !important;
    margin-right: 0% !important;
    margin-top: 20px;
    // z-index: 999;
  }
}
@media screen and (max-width: 720px) {
  .interaction-box .interaction-header .link-content .jKPDNM {
    width: 40%;
    margin-right: 7%;
    margin-top: 20px;
    // z-index: 10;
  }
}
@keyframes linkMove {
  0% {
    opacity: 0;
    transform: translateY(300px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.interaction-box {
  margin-top: 10px;
  box-shadow: white 0px 0px 10px;
  background-color: rgb(255, 255, 255);
  .interaction-header {
    text-align: center;
    padding: 15px 0;
    .header-title {
      color: rgb(122, 122, 122);
      font-weight: 700;
      .h1-title,
      .tip {
        margin: 30px 0px !important;
      }
    }
    .fancy-divider {
      position: relative;
      height: 1px;
      background-color: #000;
      margin: 20px 0;
    }

    .fancy-divider::before {
      content: '';
      position: absolute;
      top: -6px;
      left: 50%;
      width: 20px;
      height: 20px;
      transform: translateX(-50%);
      background-color: #fff;
      border-radius: 50%;
      border: 2px solid #000;
    }
    .link-content {
      font-family: 楷体;
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }
    .link-apply {
      .apply-tip {
        font-weight: 700;
        font-size: 28px;
        color: rgb(122, 122, 122);
        margin: 30px 0px;
      }
    }
  }
  .interaction-fooder {
    .interaction-fooder-comment {
      padding: 15px;
      .comment-input {
        .input-tip {
          padding: 5px 0px;
          text-align: center;
          font-size: 19px;
          font-weight: 600;
          color: rgb(153, 153, 153);
        }
      }
    }
  }
}
.jKPDNM {
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 30%;
  height: 90px;
  margin-top: 10px;
  margin-left: 3%;
  padding: 10px;
  opacity: 0;
  background-color: white;
  border: 1px solid rgba(225, 225, 225, 0.83);
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s linear 0s;
  animation: 0.8s ease 0s 1 normal forwards running linkMove;
  &:hover {
    background-image: linear-gradient(-225deg, rgb(44, 216, 213) 0%, rgb(197, 193, 255) 56%, rgb(255, 186, 195) 100%);
    transition: all 0.3s linear 0s;
    box-shadow: 0 0 10px cyan; /* 鼠标悬停时的边框阴影 */
    .jKPDNM-right {
      .avatar {
        transform: rotate(360deg);
      }
    }
  }
  .jKPDNM-left {
    z-index: 2;
    flex: 1 1 0%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .top {
      padding-bottom: 10px;
      color: rgb(32, 157, 123);
      font-size: 16px;
      font-weight: bold;
    }
    .bottom {
      color: rgb(164, 164, 164);
      padding-top: 10px;
      border-top: 2px dashed rgb(238, 238, 238);
      font-size: 14px;
      white-space: nowrap;
      // 超出文字用省略号
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .jKPDNM-right {
    .avatar {
      position: relative;
      transition: all 0.3s linear 0s;
      z-index: 2;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px dashed rgba(204, 204, 204, 0.63);
      object-fit: contain;
    }
  }
}
</style>