// pages/lock/lock.js
const app = getApp()
import Notify from 'vant-weapp/notify/notify';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_info: {},
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      user_info: app.globalData.userInfo,
      loading: false
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

  unlock: function () {
    let that = this
    if (!this.loading) {
      let latitude = 0, longitude = 0
      let building_id = app.globalData.userInfo.building.id
      this.setData({ loading: true })

      wx.getLocation({
        type: 'wgs84',
        success(res) {
          latitude = res.latitude
          longitude = res.longitude
          app.fly.post('/api/unlock', {
            building_id: building_id,
            latitude: latitude,
            longitude: longitude
          }).then(response => {
            console.log(response)
            that.setData({ loading: false })
            Notify({ text: '开锁成功', backgroundColor: 'green' })
          }).catch(error => {
            console.log(error)
            that.setData({ loading: false })

          })
        }
      })
    }
  }
})