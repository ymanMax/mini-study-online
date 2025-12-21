// pages/Course-detail/course-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course: null,
    chapters: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadCourseData()
  },

  // 加载课程数据
  loadCourseData: function() {
    // Mock课程和章节数据
    const course = {
      id: 1,
      title: '前端开发入门课程',
      description: '从零开始学习前端开发，掌握HTML、CSS、JavaScript核心知识'
    }

    const chapters = [
      {
        id: 1,
        title: '第一章 HTML基础',
        content: '介绍HTML的基本结构和常用标签',
        hasExercise: true
      },
      {
        id: 2,
        title: '第二章 CSS样式',
        content: '学习CSS选择器、盒模型和布局',
        hasExercise: true
      },
      {
        id: 3,
        title: '第三章 JavaScript语法',
        content: '掌握JavaScript变量、函数和控制流',
        hasExercise: false
      }
    ]

    this.setData({
      course: course,
      chapters: chapters
    })
  },

  // 开始章节练习
  startChapterExercise: function(e) {
    const chapterId = e.currentTarget.dataset.chapterId
    wx.navigateTo({
      url: `/pages/exam/take?type=chapter&chapterId=${chapterId}`
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

  }
})