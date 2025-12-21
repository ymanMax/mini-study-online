// pages/exam/错题本.js
const { mockRequest } = require('../../utils/mock.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrongQuestions: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadWrongQuestions()
  },

  // 加载错题本数据
  loadWrongQuestions: function() {
    mockRequest('exam/wrong-questions').then(res => {
      if (res.data.status === 0) {
        this.setData({
          wrongQuestions: res.data.message
        })
      }
    })
  },

  // 重新练习错题
  retryQuestion: function(e) {
    const questionId = e.currentTarget.dataset.questionId
    wx.showToast({
      title: '开始重新练习',
      icon: 'success'
    })
  },

  // 清空错题本
  clearWrongQuestions: function() {
    wx.showModal({
      title: '确认清空',
      content: '您确定要清空所有错题吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({ wrongQuestions: [] })
          wx.showToast({
            title: '错题本已清空',
            icon: 'success'
          })
        }
      }
    })
  }
})
