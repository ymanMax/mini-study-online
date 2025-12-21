// pages/exam/take.js
const { mockRequest } = require('../../utils/mock.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    exam: null,
    currentQuestionIndex: 0,
    userAnswers: {},
    timeRemaining: 0,
    timer: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { type = 'chapter' } = options
    this.loadExamData(type)
  },

  // 加载考试数据
  loadExamData: function(type) {
    let apiUrl = ''
    switch(type) {
      case 'simulate':
        apiUrl = 'exam/simulate'
        break
      case 'real':
        apiUrl = 'exam/real'
        break
      default:
        apiUrl = 'exam/chapter-exercises'
    }

    mockRequest(apiUrl).then(res => {
      if (res.data.status === 0) {
        const exam = res.data.message
        this.setData({
          exam: exam,
          timeRemaining: exam.duration || 60 // 默认60分钟
        })
        this.startTimer()
      }
    })
  },

  // 开始倒计时
  startTimer: function() {
    this.data.timer = setInterval(() => {
      this.setData({
        timeRemaining: this.data.timeRemaining - 1
      })
      if (this.data.timeRemaining <= 0) {
        this.submitExam()
      }
    }, 60000) // 每分钟更新一次
  },

  // 选择答案
  selectAnswer: function(e) {
    const questionId = e.currentTarget.dataset.questionId
    const answer = e.currentTarget.dataset.answer
    const questionType = e.currentTarget.dataset.type

    let userAnswers = this.data.userAnswers
    if (questionType === 'multiple') {
      // 多选题处理
      if (!userAnswers[questionId]) {
        userAnswers[questionId] = []
      }
      const index = userAnswers[questionId].indexOf(answer)
      if (index > -1) {
        userAnswers[questionId].splice(index, 1)
      } else {
        userAnswers[questionId].push(answer)
      }
    } else {
      // 单选题和判断题处理
      userAnswers[questionId] = answer
    }
    this.setData({ userAnswers })
  },

  // 下一题
  nextQuestion: function() {
    if (this.data.currentQuestionIndex < this.data.exam.questions.length - 1) {
      this.setData({
        currentQuestionIndex: this.data.currentQuestionIndex + 1
      })
    }
  },

  // 上一题
  prevQuestion: function() {
    if (this.data.currentQuestionIndex > 0) {
      this.setData({
        currentQuestionIndex: this.data.currentQuestionIndex - 1
      })
    }
  },

  // 跳转到指定题目
  jumpToQuestion: function(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      currentQuestionIndex: index
    })
  },

  // 提交考试
  submitExam: function() {
    clearInterval(this.data.timer)

    mockRequest('exam/submit', {
      examId: this.data.exam.examId,
      userAnswers: this.data.userAnswers
    }, 'POST').then(res => {
      if (res.data.status === 0) {
        const result = res.data.message
        wx.setStorageSync('examResult', result)
        wx.redirectTo({
          url: '/pages/exam/report'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    if (this.data.timer) {
      clearInterval(this.data.timer)
    }
  }
})
