// pages/Course-detail/course-detail.js
const { mockRequest } = require('../../utils/mock.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadCourseDetail()
  },

  /**
   * 加载课程详情数据
   */
  loadCourseDetail: function() {
    wx.showLoading({
      title: '加载中...'
    })

    mockRequest('course/detail').then(res => {
      wx.hideLoading()
      if (res.data.status === 0) {
        this.setData({
          courseData: res.data.message
        })
      } else {
        wx.showToast({
          title: '加载失败',
          icon: 'none'
        })
      }
    }).catch(err => {
      wx.hideLoading()
      wx.showToast({
        title: '加载失败',
        icon: 'none'
      })
      console.error('加载课程详情失败:', err)
    })
  },

  /**
   * 章节点击事件
   */
  onChapterTap: function(e) {
    const chapter = e.currentTarget.dataset.chapter
    console.log('点击章节:', chapter)

    // 跳转到视频播放页面（这里只是模拟）
    wx.showToast({
      title: `正在播放: ${chapter.title}`,
      icon: 'none'
    })

    // 模拟标记章节为已完成
    this.updateChapterCompletion(chapter.id)
  },

  /**
   * 更新章节完成状态
   */
  updateChapterCompletion: function(chapterId) {
    const { courseData } = this.data
    const updatedChapters = courseData.chapters.map(chapter => {
      if (chapter.id === chapterId && !chapter.completed) {
        return {
          ...chapter,
          completed: true
        }
      }
      return chapter
    })

    // 计算新的进度
    const completedChapters = updatedChapters.filter(chapter => chapter.completed).length
    const totalChapters = updatedChapters.length
    const progress = Math.round((completedChapters / totalChapters) * 100)

    this.setData({
      courseData: {
        ...courseData,
        chapters: updatedChapters,
        completed_chapters: completedChapters,
        progress: progress
      }
    })

    // 如果课程完成，显示证书领取提示
    if (progress >= 100) {
      wx.showModal({
        title: '恭喜！',
        content: '您已完成所有课程，可以领取证书了！',
        showCancel: false,
        confirmText: '知道了'
      })
    }
  },

  /**
   * 领取证书按钮点击事件
   */
  onGetCertificate: function() {
    wx.showLoading({
      title: '生成证书中...'
    })

    // 模拟证书生成请求
    setTimeout(() => {
      wx.hideLoading()
      wx.showModal({
        title: '证书领取成功',
        content: '您的课程证书已生成，可在个人中心查看和下载。',
        showCancel: false,
        confirmText: '确定'
      })
    }, 1500)
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
    this.loadCourseDetail()
    wx.stopPullDownRefresh()
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
    return {
      title: this.data.courseData.title || '课程详情',
      path: '/pages/Course-detail/course-detail'
    }
  }
})
