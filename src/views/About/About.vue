<template lang="">
    <div class="blog-about">
        <div class="about-author">
            <!-- 作者个人信息 -->
            <div class="authorInfo">
                <div class="authorInfo-img">
                    <img src="../../assets/image/bg.jpeg" alt="">
                </div>
                <div class="authorInfo-main">
                    <div class="author-avatar"><img src="../../assets/image/1.jpg" alt=""></div>
                    <div class="author-introduce">
                      <div class="author-name">chenzequan</div>
                      <div class="author-sex">江西  |  男</div>
                      <div class="introduce">Hai!我叫陈某人，来自南昌理工学院，专业是软件工程，这个博客是我个人自己写的第一个全栈项目，用来记录我的日常和心得。</div>
                    </div>
                </div>

            </div>
            <el-divider></el-divider>
            <!-- 主体部分 -->
            <!-- 座右铭部分 -->
            <div class="motto">
              <div class='motto-content'>一分耕耘，一分收获</div>
              <div class="warp-imgs">
        <img id="img-item" src="../../assets/img/1.jpg" alt="">
        <img id="img-item" src="../../assets/img/2.jpg" alt="">
        <img id="img-item" src="../../assets/img/3.png" alt="">
        <img id="img-item" src="../../assets/img/4.jpg" alt="">
        <img id="img-item" src="../../assets/img/5.jpg" alt="">
        <img id="img-item" src="../../assets/img/6.jpg" alt="">
              </div>
            </div>
            <!-- 个人介绍部分 -->
            <div class="person-introduce">
              <div class='text'>关于博主</div>
              <el-divider></el-divider>
              <span class='name-text'>Hi everyone, my name is Chen Zequan</span>
              <ul>
                <li> <i class='el-icon-user-solid'></i>陈某人</li>
                <!-- <li><i class='el-icon-chat-dot-round'></i> 以下是介绍我自己</li> -->
                <li> <i class='el-icon-present'></i>我是即将毕业的大四学生</li>
              </ul>
              <!-- 个人照片 -->
              <div class='author-photos'>
                <img  src="../../assets/img/1.jpg" alt="">
              </div>
              <!-- 关于本站 -->
              <div class="about-website">
                <div class='about-website-title'>关于本站</div>
                <el-divider></el-divider>
                <div>阿婆猪希望认识更多的同等爱好的阿婆猪</div>
                <div>这个博客记录我的成长与心得，希望大佬们给给意见</div>
              </div>
              <!-- 技术栈 -->
              <div class="technology-stack">
                <div class='technology-stack-title'>技术栈</div>
                <el-divider></el-divider>
                <div>vue,mysql,node</div>
                <div>熟悉小程序开发</div>
                <div>熟悉vue与element组件开发</div>
              </div>
              <!-- 联系方式 -->
              <div class="author-tel">
                <div class="author-tel-title">联系方式</div>
                <el-divider></el-divider>
                <div>QQ：2097618650</div>
                <div>微信：czq618650</div>
                <div>电话：13707968967</div>
              </div>
              <!-- 感言 -->
              <div class="reflections">
                <div class="reflections-title">最喜欢的一句话</div>
                <el-divider></el-divider>
                <div class='my-reflections'><svg t="1694094773392" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10836" width="32" height="32"><path d="M435.94752 768m20.48 0l102.4 0q20.48 0 20.48 20.48l0 81.92q0 20.48-20.48 20.48l-102.4 0q-20.48 0-20.48-20.48l0-81.92q0-20.48 20.48-20.48Z" fill="#914C12" p-id="10837"></path><path d="M527.36 208.60928a30.72 30.72 0 0 1 3.80928 3.81952l149.22752 178.10432a30.72 30.72 0 0 1-23.552 50.45248h-19.97824l104.97024 125.27616a30.72 30.72 0 0 1-23.552 50.45248H672.5632l110.2336 131.55328a30.72 30.72 0 0 1-23.552 50.45248H256a30.72 30.72 0 0 1-23.552-50.45248l110.2336-131.56352H296.96a30.72 30.72 0 0 1-23.552-50.44224l104.96-125.2864H358.4a30.72 30.72 0 0 1-23.552-50.44224l149.22752-178.10432a30.72 30.72 0 0 1 43.27424-3.81952z" fill="#0FBA68" p-id="10838"></path><path d="M553.70752 640m-25.6 0a25.6 25.6 0 1 0 51.2 0 25.6 25.6 0 1 0-51.2 0Z" fill="#ABE4FE" p-id="10839"></path><path d="M461.54752 506.88m-25.6 0a25.6 25.6 0 1 0 51.2 0 25.6 25.6 0 1 0-51.2 0Z" fill="#ABE4FE" p-id="10840"></path><path d="M435.2512 274.1248a20.48 20.48 0 0 1 27.136 10.11712c37.6832 82.41152 85.67808 120.99584 146.39104 119.36768l3.29728-0.14336 0.2048-0.03072a204.4928 204.4928 0 0 1 24.9856-3.67616l4.02432-0.33792c25.40544-1.98656 30.88384 34.94912 6.00064 40.41728-7.96672 1.75104-15.79008 3.03104-23.47008 3.82976l-5.98016 0.52224-0.512 0.13312a60.54912 60.54912 0 0 0-4.8128 1.4336l-1.34144 0.49152-0.02048 0.11264c-25.856 100.32128-89.43616 157.00992-187.56608 169.53344l-4.95616 0.57344 1.5872 1.57696c92.2624 90.7264 205.42464 133.8368 340.736 129.72032l6.4512-0.22528a20.48 20.48 0 0 1 1.6896 40.91904c-158.84288 6.5536-291.54304-47.2064-396.52352-160.73728l-3.01056-3.28704-0.4608-0.28672c-2.85696-1.64864-9.13408-3.8912-18.35008-6.0416l-2.36544-0.52224-1.66912-0.3584-1.15712-0.07168a549.84704 549.84704 0 0 1-51.32288-6.62528l-5.35552-0.96256c-25.57952-4.7104-20.48-42.752 5.43744-40.5504 20.5824 1.75104 38.0416 3.86048 52.61312 6.49216l6.48192 1.23904 1.47456 0.11264c117.248 7.94624 187.06432-36.39296 214.76352-133.9392l0.512-1.8432-3.15392-0.7168c-57.2928-13.568-104.31488-59.10528-139.86816-134.77888l-1.9968-4.31104a20.48 20.48 0 0 1 10.10688-27.136z" fill="#09A456" p-id="10841"></path><path d="M507.62752 194.56m-71.68 0a71.68 71.68 0 1 0 143.36 0 71.68 71.68 0 1 0-143.36 0Z" fill="#FC9A24" p-id="10842"></path></svg>
                <div>故天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。</div>
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
.blog-about {
  background-color: #fff;
  perspective: 1000px;
  .about-author {
    width: 96%;
    margin: 0 auto;
    padding-top: 10px;
    // background-color: #096;
    .authorInfo {
      width: 100%;
      height: 310px;
      // background-color: red;
      .authorInfo-img {
        width: 100%;
        height: 200px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .authorInfo-main {
        display: flex;
        margin-top: 10px;
        width: 100%;
        height: 100px;

        .author-avatar {
          width: 15%;
          height: 100%;
          // background-color: blue;
          img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
        }
        .author-introduce {
          margin-left: 10px;
          width: 80%;
          height: 100%;
          // background-color: orange;
          .author-name {
            font-size: 20px;
            font-weight: 700;
            color: #318fd2;
          }
          .author-sex {
            font-size: 14px;
            // color: #ccc;
          }
          .introduce {
            font-size: 16px;
          }
        }
      }
    }
    .el-divider {
      margin: 10px 0;
      // color: blue;
      background-color: #318fd2;
    }
    .motto {
      width: 100%;
      height: 250px;

      .motto-content {
        text-align: center;
        font-size: 26px;
        font-weight: 900;
        color: #7a7a7a;
      }
      .warp-imgs {
        position: relative;
        left: 35%;
        transform: translateX(-50%);
        width: 200px;
        height: 180px;
        transform-style: preserve-3d;
        animation: ani 2s infinite linear;
        #img-item {
          position: absolute;
          width: 200px;
          height: 180px;
          // -webkit-box-reflect: below 15px -webkit-linear-gradient(transparent 10%, rgba(255, 255, 255, 0.3));
        }
      }
      @keyframes ani {
        0% {
          transform: rotateY(0deg);
        }
        100% {
          transform: rotateY(360deg);
        }
      }

      .warp-imgs img:nth-child(1) {
        transform: translateZ(200px);
      }
      .warp-imgs img:nth-child(2) {
        transform: rotateY(60deg) translateZ(200px);
      }
      .warp-imgs img:nth-child(3) {
        transform: rotateY(120deg) translateZ(200px);
      }
      .warp-imgs img:nth-child(4) {
        transform: rotateY(180deg) translateZ(200px);
      }
      .warp-imgs img:nth-child(5) {
        transform: rotateY(240deg) translateZ(200px);
      }
      .warp-imgs img:nth-child(6) {
        transform: rotateY(300deg) translateZ(200px);
      }
    }
    .person-introduce {
      .text {
        font-size: 30px;
        font-weight: bold;
      }
      .name-text {
        background-color: #f3f4f4;
        padding: 5px;
        color: #e82b73;
      }
      ul li {
        font-size: 20px;
        padding-top: 5px;
        i {
          margin-right: 3px;
        }
      }
      .author-photos {
        margin-top: 10px;
        width: 100%;
        height: 600px;
        border-radius: 10px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
      .about-website {
        margin-top: 20px;
        width: 100%;
        .about-website-title {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 10px;
        }
      }
      .technology-stack {
        width: 100%;
        margin-top: 20px;
        .technology-stack-title {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 10px;
        }
      }
      .author-tel {
        width: 100%;
        margin-top: 20px;
        .author-tel-title {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 10px;
        }
      }
      .reflections {
        width: 100%;
        margin-top: 20px;
        .reflections-title {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .my-reflections {
          display: flex;
          font-weight: 700;
          background-color: #fff5eb;
          padding: 20px;
          border: 1px solid salmon;
          svg {
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>