// pages/Login/login.js
const app = getApp();
import { mockData } from "../../utils/mock.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 微信授权登陆
  wxLogin(e) {
    if (e.detail.errMsg == "getUserInfo:fail auth deny") return;

    // 把用户的微信登陆信息保存下来
    const {
      nickName,
      avatarUrl
    } = e.detail.userInfo;
    
    // 直接使用mock数据模拟登录
    const loginResult = mockData['user/wxlogin'];
    if (loginResult.status == 0) {
      // 登陆成功， 保存token到本地
      wx.setStorageSync('my_token', loginResult.token)
      // 提示用户登录成功
      wx.showToast({
        icon: 'none',
        duration:1000,
        title: loginResult.message,
      })
      // 跳转到首页
      wx.reLaunch({
        url: '/pages/Home/home',
      })
      // 登陆成功，把token保存到全局变量
      app.globalData.my_token = loginResult.res;
    }
  },
  // 跳转到手机号登录页
  phoneLogin() {
    wx.reLaunch({
      url: '/pages/Phone_login/phone_login',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})