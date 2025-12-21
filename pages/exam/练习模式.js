// pages/exam/练习模式.js
const { mockRequest } = require('../../utils/mock.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    practiceModes: [
      {
        id: 'simulate',
        title: '模拟考试',
        desc: '全真模拟考试环境，检验学习成果',
        questions: 50,
        duration: 120,
        icon: '📝'
      },
      {
        id: 'real',
        title: '真题练习',
        desc: '历年真题练习，熟悉考试题型',
        questions: 30,
        duration: 90,
        icon: '📚'
      },
      {
        id: 'chapter',
        title: '章节练习',
        desc: '按章节进行专项练习，巩固知识点',
        questions: 20,
        duration: 60,
        icon: '📖'
      },
      {
        id: 'mistake',
        title: '错题重做',
        desc: '针对错题进行强化练习',
        questions: 15,
        duration: 45,
        icon: '🔄'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 开始练习
  startPractice: function(e) {
    const mode = e.currentTarget.dataset.mode
    wx.navigateTo({
      url: `/pages/exam/take?type=${mode}`
    })
  }
})
