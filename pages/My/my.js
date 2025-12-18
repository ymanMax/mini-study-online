// pages/my/my.js
import { mockData } from '../../utils/mock.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    // 直接使用mock数据
    this.setData({
      userInfo: mockData['my/info'].message
    })
  },

  // 清除缓存
  clearCache(){
    wx.showToast({
      title: '缓存清理中...', //提示的内容,
      icon: 'loading', //图标,
      duration: 2000, //延迟时间,
      mask: true, //显示透明蒙层，防止触摸穿透,
      success: res => {
        setTimeout(() => {
          wx.showToast({
            title: '清理缓存成功', //提示的内容,
            icon: 'success', //图标,
            duration: 1000, //延迟时间,
            mask: true //显示透明蒙层，防止触摸穿透
          });
        }, 2000)
      }
    })
  },
  
  // 联系客服
  contact(){
    wx.makePhoneCall({
      phoneNumber: '400-618-9090'
    })
  }
})