<template>
  <div class="write-life">
    <div class="write-life-title">日记</div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="方向" prop="direction">
        <el-select v-model="ruleForm.direction" class="m-2" placeholder="Select" style="width: 100%;">
          <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input type="text" v-model="ruleForm.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <Editor @event="handleContant"></Editor>
      </el-form-item>
      <el-form-item label="上传图片" prop="img">
        <Update :avatar="ruleForm.img" @chenzeChange="handleChange"></Update>
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
      ruleForm: {
        title: '',
        content: '',
        img: '',
        direction: 1,
        file: null
      },
      options2: [
        { label: '左', value: 1 },
        { label: '右', value: 2 }
      ],
      rules: {
        direction: [
          {
            required: true,
            message: '请选择日记方向',
            trigger: 'blur'
          }
        ],
        title: [
          {
            // required: true,
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
        img: [{ message: '请上传图片', trigger: 'blur' }]
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
          const res = await upload('/admin/user/addBLlife', ruleForm)
          console.log(res)
          alert('submit!')
          console.log(ruleForm)
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
.write-life {
  .write-life-title {
    margin-left: 60px;
    width: 100%;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
}
</style>