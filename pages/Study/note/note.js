// pages/study/note/note.js
const { mockRequest } = require('../../../utils/mock.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    notes: [],
    showModal: false,
    editingNote: null,
    noteTitle: '',
    noteContent: '',
    selectedChapter: 0,
    chapterOptions: [
      '第1章：HTML基础',
      '第2章：CSS样式',
      '第3章：JavaScript入门',
      '第4章：DOM操作',
      '第5章：事件处理',
      '第6章：表单处理',
      '第7章：AJAX请求',
      '第8章：ES6新特性'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadNotes()
  },

  /**
   * 加载学习笔记数据
   */
  loadNotes: function() {
    wx.showLoading({
      title: '加载笔记...'
    })

    mockRequest('study/notes').then(res => {
      wx.hideLoading()
      if (res.data.status === 0) {
        // 处理笔记数据，添加课程名称和标题
        const notes = res.data.message.map(note => ({
          ...note,
          title: this.generateNoteTitle(note),
          course_name: '前端开发入门课程'
        }))
        this.setData({ notes })
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
      console.error('加载学习笔记失败:', err)
    })
  },

  /**
   * 生成笔记标题
   */
  generateNoteTitle: function(note) {
    // 如果笔记有标题则使用，否则从内容中截取
    if (note.title) {
      return note.title
    }
    return note.content.substring(0, 20) + (note.content.length > 20 ? '...' : '')
  },

  /**
   * 打开添加笔记弹窗
   */
  onAddNote: function() {
    this.setData({
      showModal: true,
      editingNote: null,
      noteTitle: '',
      noteContent: '',
      selectedChapter: 0
    })
  },

  /**
   * 打开编辑笔记弹窗
   */
  onEditNote: function(e) {
    const note = e.currentTarget.dataset.note
    this.setData({
      showModal: true,
      editingNote: note,
      noteTitle: note.title,
      noteContent: note.content,
      selectedChapter: note.chapter_id - 1 // 转换为picker的索引
    })
  },

  /**
   * 删除笔记
   */
  onDeleteNote: function(e) {
    const note = e.currentTarget.dataset.note
    const that = this

    wx.showModal({
      title: '确认删除',
      content: `确定要删除笔记 "${note.title}" 吗？`,
      success: function(res) {
        if (res.confirm) {
          // 模拟删除操作
          const updatedNotes = that.data.notes.filter(n => n.id !== note.id)
          that.setData({ notes: updatedNotes })

          wx.showToast({
            title: '删除成功',
            icon: 'success'
          })

          console.log('删除笔记:', note)
        }
      }
    })
  },

  /**
   * 关闭弹窗
   */
  onCloseModal: function() {
    this.setData({ showModal: false })
  },

  /**
   * 保存笔记
   */
  onSaveNote: function() {
    const { editingNote, noteTitle, noteContent, selectedChapter, notes } = this.data

    // 验证输入
    if (!noteTitle.trim()) {
      wx.showToast({
        title: '请输入笔记标题',
        icon: 'none'
      })
      return
    }

    if (!noteContent.trim()) {
      wx.showToast({
        title: '请输入笔记内容',
        icon: 'none'
      })
      return
    }

    // 构造笔记数据
    const noteData = {
      id: editingNote ? editingNote.id : Date.now(),
      course_id: 1,
      chapter_id: selectedChapter + 1,
      title: noteTitle.trim(),
      content: noteContent.trim(),
      create_time: new Date().toLocaleString('zh-CN'),
      course_name: '前端开发入门课程'
    }

    let updatedNotes
    if (editingNote) {
      // 编辑现有笔记
      updatedNotes = notes.map(n => n.id === editingNote.id ? noteData : n)
    } else {
      // 添加新笔记
      updatedNotes = [noteData, ...notes]
    }

    this.setData({
      notes: updatedNotes,
      showModal: false
    })

    wx.showToast({
      title: editingNote ? '保存成功' : '创建成功',
      icon: 'success'
    })

    console.log(editingNote ? '更新笔记:' : '创建笔记:', noteData)
  },

  /**
   * 笔记点击事件
   */
  onNoteTap: function(e) {
    const note = e.currentTarget.dataset.note
    console.log('查看笔记:', note)

    // 可以跳转到笔记详情页，这里简单显示
    wx.showModal({
      title: note.title,
      content: note.content,
      showCancel: false,
      confirmText: '确定'
    })
  },

  /**
   * 章节选择器变化事件
   */
  onChapterChange: function(e) {
    this.setData({
      selectedChapter: parseInt(e.detail.value)
    })
  },

  /**
   * 标题输入事件
   */
  onTitleInput: function(e) {
    this.setData({
      noteTitle: e.detail.value
    })
  },

  /**
   * 内容输入事件
   */
  onContentInput: function(e) {
    this.setData({
      noteContent: e.detail.value
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
    // 页面显示时重新加载笔记
    this.loadNotes()
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
    this.loadNotes()
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
      title: '我的学习笔记',
      path: '/pages/study/note/note'
    }
  }
})
