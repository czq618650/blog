<template lang="">
    <div>
        <div>
            <el-card class="box-card">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                  <el-input type="username" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item> 
                  <el-button type="primary" @click="submitForm('ruleForm',ruleForm)">提交</el-button>
                  <el-button @click="register()">注册</el-button>
                </el-form-item>
              </el-form>
            </el-card>
        </div>
    </div>
</template>
<script>
import axios from '../../util/axios.config.js'
import { Message } from 'element-ui'
export default {
  name: 'login',
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          { min: 3, max: 9, message: 'Length should be 3 to 9', trigger: 'blur' }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          { min: 3, max: 9, message: 'Length should be 3 to 9', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录
    submitForm(DomName, ruleForm) {
      this.$refs[DomName].validate(async valid => {
        if (valid) {
          const params = new URLSearchParams()
          params.append('username', ruleForm.username)
          params.append('password', ruleForm.password)
          // const res = await axios.post('/admin/user/login', params)
          const res = await axios.post('/admin/user/login', params)
          console.log(res)
          // 登陆成功
          if (res.data.status === 200) {
            Message.success('登陆成功！！')
            this.$router.push('/')
          } else {
            Message.error('登陆失败，密码或用户名错误')
            console.log('error submit!!')
            return false
          }
        }
      })
    },
    // 注册
    register() {
      this.$router.push('/register')
    }
  }
}
</script>
<style lang="scss">
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>