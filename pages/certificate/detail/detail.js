// pages/certificate/detail/detail.js
const { mockRequest } = require('../../../utils/mock.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    certificateData: {
      certificate_id: '',
      user_name: '',
      course_name: '',
      course_desc: '',
      issue_date: '',
      instructor: '',
      signature: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 从参数获取证书ID
    const certificateId = options.id || '1'
    this.loadCertificateDetail(certificateId)
  },

  /**
   * 加载证书详情数据
   */
  loadCertificateDetail: function(certificateId) {
    wx.showLoading({
      title: '加载证书...'
    })

    // 模拟请求证书详情
    setTimeout(() => {
      wx.hideLoading()

      // 构造证书数据
      const certificateData = {
        certificate_id: `CS-${certificateId}-${Date.now().toString().slice(-4)}`,
        user_name: '张三',
        course_name: '前端开发入门课程',
        course_desc: '完成了HTML、CSS和JavaScript的基础学习',
        issue_date: '2024年1月15日',
        instructor: '张老师',
        signature: '/assets/images/signature@2x.png'
      }

      this.setData({ certificateData })
    }, 1000)
  },

  /**
   * 下载证书按钮点击事件
   */
  onDownloadCertificate: function() {
    wx.showLoading({
      title: '生成证书...'
    })

    // 模拟证书生成和下载过程
    setTimeout(() => {
      wx.hideLoading()

      // 模拟保存图片到相册
      wx.showModal({
        title: '下载成功',
        content: '证书已生成并保存到您的相册',
        showCancel: false,
        confirmText: '确定'
      })

      // 模拟下载统计
      console.log('证书下载成功:', this.data.certificateData)
    }, 1500)
  },

  /**
   * 分享证书按钮点击事件
   */
  onShareCertificate: function() {
    const { certificateData } = this.data

    // 显示分享选项
    wx.showActionSheet({
      itemList: ['分享给朋友', '分享到朋友圈', '复制链接'],
      success: function(res) {
        switch(res.tapIndex) {
          case 0:
            // 分享给朋友
            console.log('分享给朋友:', certificateData)
            wx.showToast({
              title: '正在分享给朋友',
              icon: 'none'
            })
            break
          case 1:
            // 分享到朋友圈
            console.log('分享到朋友圈:', certificateData)
            wx.showToast({
              title: '正在分享到朋友圈',
              icon: 'none'
            })
            break
          case 2:
            // 复制链接
            console.log('复制链接:', certificateData)
            wx.setClipboardData({
              data: `https://example.com/certificate/${certificateData.certificate_id}`,
              success: function() {
                wx.showToast({
                  title: '链接已复制',
                  icon: 'success'
                })
              }
            })
            break
        }
      }
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
    // 重新加载证书数据
    const certificateId = this.data.certificateData.certificate_id.split('-')[1]
    this.loadCertificateDetail(certificateId)
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
    const { certificateData } = this.data

    return {
      title: `${certificateData.user_name} 的课程证书`,
      desc: `恭喜完成 ${certificateData.course_name}`,
      path: `/pages/certificate/detail/detail?id=1`
    }
  }
})
