<template>
  <div>
    <input type="file" @change="handleChange">
    <div class="Preview" v-if="showPreview">
      <img class="Preview-img" :src="'http://8.130.106.91:3001' +PreviewImg" alt="">
      <button @click="closeImg"><i class="el-icon-close"></i></button>
    </div>
    <ul class="items">
      <li class="lis" v-for="item in imgsList" :key="item.id">
        <img class="imgs" :src="'http://8.130.106.91:3001' + item.imgs" alt="">
        <div class="shadow">
          <!-- 预览 -->
          <span>
            <i class="el-icon-zoom-in" @click="handlePreview(item)">
            </i>
          </span>
          <!-- 下载 -->
          <span>
            <a class="el-icon-download" :href="'http://8.130.106.91:3001' + item.imgs" :download="item.id + '.jpg'" @click="handleDownload(item)"></a>
          </span>
          <!-- 删除 -->
          <span>
            <i class="el-icon-delete" @click="handleDelete(item)"></i>
          </span>
        </div>
      </li>
    </ul>

    <!-- 预览框 -->
  </div>
</template>

<script>
import axios from '../../util/axios.config.js'
import upload from '../../util/upload.js'
export default {
  data() {
    return {
      imgsFiles: {
        imgs: '',
        file: null
      },
      imgsList: [],
      imgsList2: '',
      // 预览开关
      showPreview: false, //控制预览
      PreviewImg: ''
    }
  },
  mounted() {
    // 获取图片数据
    this.getImgs()
  },
  methods: {
    // 每次选完文件后的上传
    async handleChange(e) {
      console.log(e.target.files[0])
      this.imgsFiles.imgs = URL.createObjectURL(e.target.files[0])
      // console.log(this.imgsFiles.imgs)
      this.imgsFiles.file = e.target.files[0]

      // 上传图片并获取响应
      const res = await upload('/admin/user/imgs', this.imgsFiles)
      console.log(res)

      // 将新的图片数据添加到imgsList
      this.imgsList.push({ imgs: res.imgs })
      console.log(this.imgsList)
      // 清空选择的文件
      e.target.value = ''
    },
    // 预览
    handlePreview(item) {
      // 实现预览逻辑，例如显示大图或弹出模态框
      // 使用item.imgs获取预览的图片链接
      this.showPreview = true
      this.PreviewImg = item.imgs
      // console.log(this.PreviewImg)
      // console.log(item)
    },
    // 下载
    handleDownload(item) {},
    // 删除
    async handleDelete(item) {
      console.log(item.id)
      // console.log();
      // 实现删除逻辑，例如发送请求删除图片，然后从imgsList中移除
      const res = await axios.delete(`/admin/user/deleteImgs/${item.id}`)
      this.getImgs()
      console.log(res)
    },
    // 获取文件数据
    async getImgs() {
      const res = await axios.get('/admin/user/getImgs')
      this.imgsList = res.data
      console.log(this.imgsList)
    },
    closeImg() {
      this.showPreview = false
    }
  }
}
</script>
<style lang="scss">
.items {
  margin: 0;
  .lis {
    // overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    margin: 0 8px 8px 0;
    display: inline-block;
    position: relative;
    .imgs {
      width: 100%;
      height: 100%;
    }
    .shadow {
      display: flex;
      position: absolute;
      align-items: center; /* 垂直居中对齐 */
      justify-content: center; /* 水平居中对齐 */
      height: 100vh; /* 设置容器高度为视口高度，可根据需要调整 */
      font-size: 20px !important;
      color: #fff !important;
      top: 0;
      width: 148px;
      height: 148px;
      background-color: rgba($color: #000000, $alpha: 0.6);
      cursor: pointer;
      opacity: 0;
      transition: all 0.3;
      span {
        margin-right: 10px;
        a {
          text-decoration: none !important;
        }
      }
    }
    .shadow:hover {
      opacity: 0.8;
    }
  }
}
.Preview {
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: calc(100vh - 120px);
  background-color: rgba($color: #000000, $alpha: 0.8);
  .Preview-img {
    width: 100%;
    height: 100%;
    // opacity: 0.3;
  }
  button {
    position: absolute;
    right: 0;
  }
}
</style>