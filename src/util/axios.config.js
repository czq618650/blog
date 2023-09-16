
import axios from "axios"

// console.log(apiUrl);
const http =  axios.create({
  //  baseURL:apiUrl,
   baseURL:"http://localhost:8002"
//  baseURL:'http://8.130.106.91:3000'
})

export default http  //你发请求，不用这个http，用axios？我换了名字




// console.log(apiUrl);
// console.log(process.env.NODE_ENV);     
// console.log(process.env);

// // 请求拦截器
// axios.interceptors.request.use((config)=>{
//         // 在发送请求之前做些什么
//     // 登录成功后存取的token，在请求接口前带上token
//     // 请求的请求头要加上"Bearer " 
//     // console.log('请求前');
//     const token = localStorage.getItem("token")

//     config.headers.Authorization = "Bearer " + token
//     return config

// },(error)=>{return Promise.reject(error)})

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     console.log(response.headers);
//     // 获取请求响应头
//     const {authorization} = response.headers
//     // 检查是否有响应头
//     authorization && localStorage.setItem("token",authorization)
//     // 2xx 范围内的状态码都会触发该函数。
//     // 对响应数据做点什么
//     return response;
//   }, function (error) {
//     // 超出 2xx 范围的状态码都会触发该函数。
//     // 对响应错误做点什么
//     console.log(error);
//     const {status} = error.response 
//     if(status === 401){
//       // 如果token过期则跳转到登录界面
//       localStorage.removeItem("token")
//       window.location.href = "#/login"
//       console.log(error);
//     }
//     return Promise.reject(error);
//   });
