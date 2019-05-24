// pages/auth/auth.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ret_data: {},
    buttons: [{
      text: '去首页',
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success: res => {
        let user_id = options.user_id
        app.fly.post('/wechat/auth/register', {
          code: res.code,
          user_id: user_id
        }).then(response => {
          if (response.data.message == 'has_registered') {
            wx.redirectTo({ url: '/pages/index/index' });
          }
          this.setData({
            ret_data: response.data
          })
        }).catch(error => {
          this.setData({
            ret_data: error.response.data
          })
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  buttonClicked(e) {
    wx.redirectTo({ url: '/pages/index/index' });
  },
})