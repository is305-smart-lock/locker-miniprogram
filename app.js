//app.js
var Fly = require("flyio")
var fly = new Fly

const baseUrl = 'https://lock.dy.tongqu.me/'

fly.interceptors.request.use((request) => {
  request.baseURL = baseUrl
  // request.headers["X-Tag"]="flyio";
  return request;
})

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },
  globalData: {
    userInfo: null,
    code: ''
  },
  fly,
  setAuthorization(token) {
    this.fly.interceptors.request.use((request) => {
      request.baseURL = baseUrl
      request.headers["Authorization"] = "Bearer " + token;
      return request;
    })
  }
})