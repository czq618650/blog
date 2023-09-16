<template>
  <div class="write-blog">
    <div class="write-blog-title">博客</div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input type="text" v-model="ruleForm.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="技术类型" prop="value1">
        <el-select v-model="value1" multiple placeholder="请选择技术类型">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="博客简介" prop="introduction">
        <el-input type="text" v-model="ruleForm.introduction" autocomplete="off"></el-input>
      </el-form-item>
      <!-- 上传 -->
      <el-form-item label="上传封面" prop="img">
        <Update :avatar="ruleForm.img" @chenzeChange="handleChange"></Update>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <Editor @event="handleContant"></Editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm',ruleForm)">提交</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
  <script>
import Editor from '../../components/Editor.vue'
import Update from '../../components/Update.vue'
import axios from '../../util/axios.config.js'
import upload from '@/util/upload'
export default {
  data() {
    return {
      options: [
        { label: 'Java', value: 'Java' },
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'C', value: 'C' },
        { label: 'C#', value: 'C#' },
        { label: 'C++', value: 'C++' },
        { label: 'Python', value: 'Python' },
        { label: 'GO', value: 'GO' },
        { label: 'Vue', value: 'Vue' },
        { label: 'React', value: 'React' },
        { label: 'Angle', value: 'Angle' },
        { label: 'Node', value: 'Node' }
      ],
      value1: [],
      ruleForm: {
        title: '',
        content: '',
        img: '',
        type: '',
        introduction: '',
        file: null
      },

      rules: {
        title: [
          {
            required: true,
            message: '请输入标题',
            trigger: 'blur'
          },
          { min: 3, max: 9, message: 'Length should be 3 to 9', trigger: 'blur' }
        ],
        content: [
          {
            required: true,
            message: '请输入修改内容',
            trigger: 'blur'
          }
        ],
        type: [
          {
            required: true,
            message: '请输入技术类型',
            trigger: 'blur'
          }
        ],
        introduction: [
          {
            required: true,
            message: '请输入博客简介',
            trigger: 'blur'
          }
        ],
        img: [{ required: true, message: '请上传图片', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 获取选择的图片
    handleChange(file) {
      // 把选择的图片显示在上传按钮
      // 因为生成的不带路径
      // 生成的是二进制
      // console.log(URL.createObjectURL(file.raw))
      this.ruleForm.img = URL.createObjectURL(file)
      this.ruleForm.file = file
      console.log(this.ruleForm.file)
    },
    // 获取富文本数据
    handleContant(data) {
      console.log(data)

      this.ruleForm.content = data
    },
    // 提交按钮
    submitForm(DomName, ruleForm) {
      this.$refs[DomName].validate(async valid => {
        if (valid) {
          ruleForm.type = this.$data.value1
          const res = await upload('/admin/user/addBLblog', ruleForm)
          console.log(res)
          // alert('submit!')
          console.log(ruleForm, ruleForm.type)
          this.$router.push('/home')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  components: {
    Editor,
    Update
  }
}
</script>
  <style lang="scss">
.write-blog {
  .write-blog-title {
    margin-left: 60px;
    width: 100%;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
}
.el-option {
  z-index: 999;
}
</style>