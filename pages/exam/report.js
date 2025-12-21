// pages/exam/report.js
const { mockRequest } = require('../../utils/mock.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    examResult: null,
    studyReport: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const examResult = wx.getStorageSync('examResult')
    this.setData({
      examResult: examResult
    })
    this.loadStudyReport()
  },

  // 加载学习报告
  loadStudyReport: function() {
    mockRequest('report/study').then(res => {
      if (res.data.status === 0) {
        this.setData({
          studyReport: res.data.message
        })
      }
    })
  },

  // 查看错题本
  goToWrongQuestions: function() {
    wx.navigateTo({
      url: '/pages/exam/错题本'
    })
  },

  // 重新考试
  retakeExam: function() {
    wx.navigateBack()
  },

  // 继续练习
  continuePractice: function() {
    wx.navigateTo({
      url: '/pages/exam/练习模式'
    })
  }
})
