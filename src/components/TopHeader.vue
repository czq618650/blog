<template lang="">
    <div class="sc-dkrFOg iZwoRE flex-wrap hide-animation" ref="myElement" v-scroll-hide>
        <el-header>
          <div class="blog-info">
            <div class="blog-title">ChenZeQuan<span>🌟</span></div>
            <div class="blog-sentence">生于忧患死于安乐</div>
          </div>
        <div class="header-right">
            <el-menu :default-active="activeIndex" class="el-menu-demo tab-list" mode="horizontal" @select="handleSelect" router>
        <el-menu-item index="/home"><i class="el-icon-house"></i>首页</el-menu-item>
        <el-menu-item index="/battle"><i class="el-icon-edit"></i>实战</el-menu-item>
        <el-menu-item index="/life"><i class="el-icon-data-analysis"></i>归档</el-menu-item>
        <el-menu-item index="/interact"><i class="el-icon-chat-dot-round"></i>互动</el-menu-item>
        <el-menu-item index="/about"><i class="el-icon-s-custom"></i>关于</el-menu-item>
        <el-menu-item index="/record"><i class="el-icon-cloudy"></i>图库</el-menu-item>
        <!-- <div class="inverted-triangle"></div> -->
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-caret-bottom"></i>
          </span>

          <template #dropdown>
            <el-dropdown-menu >
              <!-- <el-dropdown-item @click="handleWriteBlog" index="./white-life">编写日记</el-dropdown-item> -->
              <el-menu-item index="./write-life"><i class="el-icon-cloudy"></i>编写日记</el-menu-item>
              <el-menu-item index="./write-blog"><i class="el-icon-cloudy"></i>编写博客</el-menu-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-menu>
          </div>
    </el-header>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    handleWriteBlog() {
      this.$router.push('/write-blog')
    }
  },
  mounted() {
    const header = this.$refs.header
    console.log(header)
  },
  directives: {
    scrollHide: {
      inserted: function (el) {
        window.addEventListener('scroll', function () {
          var scrollDistance = window.pageYOffset || document.documentElement.scrollTop
          if (scrollDistance >= 100) {
            el.classList.add('hidden')
          } else {
            el.classList.remove('hidden')
          }
        })
      }
    }
  }
}
</script>
<style lang="scss">
@media screen and (max-width: 800px) {
  .el-menu {
    display: none !important;
  }
  .blog-sentence {
    display: none;
  }
  .el-header {
    position: relative;
    .blog-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
.hide-animation {
  opacity: 1;
  transition: all 2s ease;
}

.hide-animation.hidden {
  opacity: 0;
}
.iZwoRE {
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  // height: 50px;
  transition: top 0.4s ease-in-out 0s;
  background-color: rgb(255, 255, 255);
  user-select: none;
  z-index: 999;
  .el-header {
    width: 73%;
    height: 100%;
    display: flex;
    -webkit-box-pack: justify;
    place-content: center space-between;
    .blog-info {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      .blog-title {
        cursor: pointer;
        font-size: 22px;
        color: rgb(49, 143, 210);
        font-weight: 700;
      }
      .blog-sentence {
        margin-top: 7px;
        margin-left: 10px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.8);
      }
    }
    .header-right {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      height: 100%;
      width: 50%;
      .el-menu {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        .el-dropdown-menu__item,
        .el-menu-item {
          font-size: 10px;
          padding: 0 5px !important;
          /* margin-right: 2%; */
          cursor: pointer;
          /* right: 2%; */
        }
      }
    }
  }
}
.inverted-triangle {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  // border-top: 8px solid transparent;
  border-top: 8px solid black;
}
.flex-wrap {
  align-items: center;
  display: flex;
  justify-content: center;
}
.el-dropdown {
  font-size: 18px !important;
}
</style>