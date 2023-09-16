<template lang="">
    <div>
        <div>
            <el-card class="box-card">
                <el-button type="text" icon="el-icon-arrow-left" @click="backLg()">返回登录</el-button>
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                  <el-input type="username" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                  <el-input type="email" v-model="ruleForm.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="submit"> 
                  <el-button type="primary" @click="submitForm('ruleForm',ruleForm)">提交</el-button>
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
        password: '',
        email: ''
      },
      //   验证规则
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
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    // 注册
    submitForm(DomName, ruleForm) {
      this.$refs[DomName].validate(async valid => {
        if (valid) {
          const params = new URLSearchParams()
          params.append('username', ruleForm.username)
          params.append('password', ruleForm.password)
          params.append('email', ruleForm.email)
          // const res = await axios.post('/admin/user/login', params)
          const res = await axios.post('/admin/user/register', params)
          console.log(res)
          if (res.data.status === 200) {
            Message.success('注册成功')
            this.$router.push('/login')
          } else {
            console.log('注册失败')
            return false
          }
        }
      })
    },
    backLg() {
      this.$router.push('/login')
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
  position: relative;
  width: 480px;
  .box-card {
    position: absolute;
    top: 0;
    left: 10px;
  }
  .submit {
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>