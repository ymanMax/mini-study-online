// pages/Study/study.js
import { mockData } from "../../utils/mock.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studyProgresses: [],
    studyPlans: [],
    studyAnalytics: null,
    isEmpty: true,
    activeTab: 'progress' // 'progress', 'plans', 'analytics'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载所有学习相关数据
    this.loadStudyData();
  },

  /**
   * 加载学习数据
   */
  loadStudyData: function() {
    // 学习进度数据
    const progresses = mockData['study/progress'].message;

    // 学习计划数据
    const plans = mockData['study/plans'].message;

    // 学习分析数据
    const analytics = mockData['study/analytics'].message;

    this.setData({
      isEmpty: progresses.length === 0,
      studyProgresses: progresses,
      studyPlans: plans,
      studyAnalytics: analytics
    });
  },

  /**
   * 切换标签页
   */
  onTabChange: function(e) {
    this.setData({
      activeTab: e.currentTarget.dataset.tab
    });
  },

  /**
   * 跳转到学习日历
   */
  goToCalendar: function() {
    wx.navigateTo({
      url: '/pages/Study/calendar'
    });
  },

  /**
   * 创建新学习计划
   */
  createPlan: function() {
    wx.showModal({
      title: '创建学习计划',
      content: '此功能将引导您创建个性化的学习计划',
      confirmText: '开始创建',
      success: function(res) {
        if (res.confirm) {
          // 这里可以跳转到计划创建页面或显示创建表单
          wx.showToast({
            title: '计划创建功能开发中',
            icon: 'none'
          });
        }
      }
    });
  },

  /**
   * 调整学习计划
   */
  adjustPlan: function(e) {
    const planId = e.currentTarget.dataset.planId;
    wx.showModal({
      title: '调整学习计划',
      content: '您可以调整计划的任务安排和时间',
      confirmText: '开始调整',
      success: function(res) {
        if (res.confirm) {
          wx.showToast({
            title: '计划调整功能开发中',
            icon: 'none'
          });
        }
      }
    });
  },

  /**
   * 标记任务完成
   */
  markTaskComplete: function(e) {
    const taskId = e.currentTarget.dataset.taskId;
    wx.showToast({
      title: '任务已标记为完成',
      icon: 'success'
    });
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