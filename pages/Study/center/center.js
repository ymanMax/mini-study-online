// pages/study/center/center.js
const { mockRequest } = require('../../../utils/mock.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    studyData: {
      total_courses: 0,
      in_progress_courses: 0,
      completed_courses: 0,
      courses: []
    },
    certificates: [],
    inProgressCourses: [],
    completedCourses: [],
    notStartedCourses: [],
    hasInProgressCourses: false,
    hasCompletedCourses: false,
    hasNotStartedCourses: false,
    hasAnyCourses: false,
    hasCertificates: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadStudyData()
    this.loadCertificates()
  },

  /**
   * 加载学习数据
   */
  loadStudyData: function() {
    wx.showLoading({
      title: '加载中...'
    })

    mockRequest('study/center').then(res => {
      wx.hideLoading()
      if (res.data.status === 0) {
        const studyData = res.data.message
        this.setData({ studyData })
        this.processCourseData(studyData.courses)
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
      console.error('加载学习数据失败:', err)
    })
  },

  /**
   * 加载证书数据
   */
  loadCertificates: function() {
    mockRequest('certificate/list').then(res => {
      if (res.data.status === 0) {
        const certificates = res.data.message
        this.setData({
          certificates,
          hasCertificates: certificates.length > 0
        })
      }
    }).catch(err => {
      console.error('加载证书数据失败:', err)
    })
  },

  /**
   * 处理课程数据，分类为不同状态
   */
  processCourseData: function(courses) {
    const inProgressCourses = courses.filter(course => course.status === 'in_progress')
    const completedCourses = courses.filter(course => course.status === 'completed')
    const notStartedCourses = courses.filter(course => course.status === 'not_started')

    this.setData({
      inProgressCourses,
      completedCourses,
      notStartedCourses,
      hasInProgressCourses: inProgressCourses.length > 0,
      hasCompletedCourses: completedCourses.length > 0,
      hasNotStartedCourses: notStartedCourses.length > 0,
      hasAnyCourses: courses.length > 0
    })
  },

  /**
   * 课程点击事件
   */
  onCourseTap: function(e) {
    const course = e.currentTarget.dataset.course
    console.log('点击课程:', course)

    // 跳转到课程详情页
    wx.navigateTo({
      url: `/pages/Course-detail/course-detail?courseId=${course.id}`
    })
  },

  /**
   * 证书点击事件
   */
  onCertificateTap: function(e) {
    const certificate = e.currentTarget.dataset.certificate
    console.log('点击证书:', certificate)

    // 模拟查看证书
    wx.showModal({
      title: '证书详情',
      content: `课程: ${certificate.course_name}\n颁发日期: ${certificate.issue_date}\n证书编号: ${certificate.id}`,
      showCancel: false,
      confirmText: '确定'
    })
  },

  /**
   * 去选课按钮点击事件
   */
  onBrowseCourses: function() {
    wx.navigateTo({
      url: '/pages/Course/course'
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
    // 页面显示时重新加载数据，确保数据最新
    this.loadStudyData()
    this.loadCertificates()
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
    this.loadStudyData()
    this.loadCertificates()
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
      title: '我的学习中心',
      path: '/pages/study/center/center'
    }
  }
})
