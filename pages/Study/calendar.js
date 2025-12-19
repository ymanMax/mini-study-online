// pages/Study/calendar.js
import { mockData } from "../../../utils/mock.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    calendarData: null,
    currentDate: new Date(),
    selectedDate: null,
    showEventDetail: false,
    selectedEvent: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载学习日历数据
    this.loadCalendarData();
  },

  /**
   * 加载日历数据
   */
  loadCalendarData: function() {
    const calendarData = mockData['study/calendar'].message;
    this.setData({
      calendarData: calendarData
    });
  },

  /**
   * 选择日期
   */
  onDateSelect: function(e) {
    const date = e.currentTarget.dataset.date;
    this.setData({
      selectedDate: date
    });

    // 查找当天的事件
    const events = this.data.calendarData.events;
    const selectedEvent = events.find(event => event.date === date);

    if (selectedEvent) {
      this.setData({
        selectedEvent: selectedEvent,
        showEventDetail: true
      });
    }
  },

  /**
   * 关闭事件详情
   */
  closeEventDetail: function() {
    this.setData({
      showEventDetail: false,
      selectedEvent: null
    });
  },

  /**
   * 标记事件完成
   */
  markEventComplete: function() {
    if (this.data.selectedEvent) {
      const updatedEvent = {
        ...this.data.selectedEvent,
        completed: true
      };

      this.setData({
        selectedEvent: updatedEvent
      });

      wx.showToast({
        title: '学习任务已完成',
        icon: 'success'
      });

      // 关闭详情页
      setTimeout(() => {
        this.closeEventDetail();
      }, 1500);
    }
  },

  /**
   * 上一个月
   */
  prevMonth: function() {
    const currentDate = new Date(this.data.currentDate);
    currentDate.setMonth(currentDate.getMonth() - 1);
    this.setData({
      currentDate: currentDate
    });
  },

  /**
   * 下一个月
   */
  nextMonth: function() {
    const currentDate = new Date(this.data.currentDate);
    currentDate.setMonth(currentDate.getMonth() + 1);
    this.setData({
      currentDate: currentDate
    });
  },

  /**
   * 今天
   */
  today: function() {
    this.setData({
      currentDate: new Date()
    });
  },

  /**
   * 检查是否是今天
   */
  isToday: function(day) {
    const today = new Date();
    const current = new Date(this.data.currentDate);
    return day === today.getDate() &&
           current.getMonth() === today.getMonth() &&
           current.getFullYear() === today.getFullYear();
  },

  /**
   * 格式化日期
   */
  formatDate: function(day) {
    const date = new Date(this.data.currentDate);
    date.setDate(day);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${year}-${month}-${dayStr}`;
  },

  /**
   * 检查是否有事件
   */
  hasEvent: function(day) {
    if (!this.data.calendarData || !this.data.calendarData.events) {
      return false;
    }
    const dateStr = this.formatDate(day);
    return this.data.calendarData.events.some(event => event.date === dateStr);
  },

  /**
   * 获取事件
   */
  getEvent: function(day) {
    if (!this.data.calendarData || !this.data.calendarData.events) {
      return null;
    }
    const dateStr = this.formatDate(day);
    return this.data.calendarData.events.find(event => event.date === dateStr);
  },

  /**
   * 阻止事件冒泡
   */
  stopPropagation: function() {
    // 空函数，用于阻止事件冒泡
  }
});
