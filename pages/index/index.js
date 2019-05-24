//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        app.fly.post('/wechat/auth/login', {
          code: res.code
        }).then(response => {
          app.globalData.userInfo = response.data.user_info
          app.setAuthorization(response.data.token)
          wx.switchTab({ url: '/pages/lock/lock' });
        }).catch(error => {
          console.log(error);
          wx.redirectTo({ url: '/pages/need_auth/need_auth' });
        });
      }
    })
  }
})
