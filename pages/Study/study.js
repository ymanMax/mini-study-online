// pages/Study/study.js
import { mockData } from "../../utils/mock.js";
import { learningService } from "../../utils/learningService.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studyProgresses:[],
    isEmpty:true,
    learningGoals: [],
    learningReminders: [],
    showGoals: false,
    showReminders: false,
    showAddGoalModal: false,
    today: '',
    newGoal: {
      title: '',
      description: '',
      end_date: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化今天的日期
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    this.setData({
      today: todayStr
    });

    this.loadStudyData();
  },

  /**
   * 加载学习数据
   */
  async loadStudyData() {
    try {
      // 加载学习进度
      const progresses = mockData['study/progress'].message;

      // 加载学习目标和提醒
      const [goalsResponse, remindersResponse] = await Promise.all([
        learningService.getLearningGoals(),
        learningService.getLearningReminders()
      ]);

      const learningGoals = goalsResponse.success ? goalsResponse.data : [];
      const learningReminders = remindersResponse.success ? remindersResponse.data : [];

      this.setData({
        isEmpty: progresses.length === 0,
        studyProgresses: progresses,
        learningGoals: learningGoals,
        learningReminders: learningReminders
      });
    } catch (error) {
      console.error('加载学习数据失败:', error);
    }
  },

  /**
   * 切换学习目标显示
   */
  toggleGoals: function () {
    this.setData({
      showGoals: !this.data.showGoals
    });
  },

  /**
   * 切换学习提醒显示
   */
  toggleReminders: function () {
    this.setData({
      showReminders: !this.data.showReminders
    });
  },

  /**
   * 显示添加目标模态框
   */
  showAddGoalModal: function () {
    this.setData({
      showAddGoalModal: true
    });
  },

  /**
   * 隐藏添加目标模态框
   */
  hideAddGoalModal: function () {
    this.setData({
      showAddGoalModal: false,
      newGoal: {
        title: '',
        description: '',
        end_date: ''
      }
    });
  },

  /**
   * 处理目标表单输入
   */
  handleGoalInput: function (e) {
    const { field } = e.currentTarget.dataset;
    const { value } = e.detail;

    this.setData({
      [`newGoal.${field}`]: value
    });
  },

  /**
   * 创建学习目标
   */
  async createLearningGoal: function () {
    try {
      const { newGoal } = this.data;

      // 验证表单
      if (!newGoal.title.trim()) {
        wx.showToast({
          title: '请输入目标标题',
          icon: 'none'
        });
        return;
      }

      if (!newGoal.end_date) {
        wx.showToast({
          title: '请选择截止日期',
          icon: 'none'
        });
        return;
      }

      // 创建目标
      const response = await learningService.createLearningGoal(newGoal);

      if (response.success) {
        wx.showToast({
          title: '目标创建成功',
          icon: 'success'
        });

        // 更新目标列表
        const updatedGoals = [...this.data.learningGoals, response.data];
        this.setData({
          learningGoals: updatedGoals
        });

        // 关闭模态框
        this.hideAddGoalModal();
      } else {
        throw new Error('创建目标失败');
      }
    } catch (error) {
      console.error('创建学习目标失败:', error);
      wx.showToast({
        title: '创建失败',
        icon: 'error'
      });
    }
  },

  /**
   * 标记提醒为已读
   */
  markReminderAsRead: function (e) {
    const { reminderId } = e.currentTarget.dataset;

    // 这里可以添加实际的标记逻辑
    console.log('标记提醒为已读:', reminderId);

    wx.showToast({
      title: '已标记为已读',
      icon: 'success',
      duration: 1000
    });
  },

  /**
   * 阻止事件冒泡
   */
  stopPropagation: function () {
    // 空函数，用于阻止事件冒泡
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.loadStudyData();
    wx.stopPullDownRefresh();
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
