// pages/Home/home.js
import { mockData } from "../../utils/mock.js";
import { learningService } from "../../utils/learningService.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImages: [],
    course:[],
    videos:[],
    guessYouLike: [],
    hotCourses: [],
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化页面数据
    this.initPageData();
  },

  /**
   * 初始化页面数据
   */
  async initPageData() {
    try {
      this.setData({ loading: true });

      // 初始化用户学习数据
      await learningService.initUserData();

      // 并行获取各种数据
      const [swiperData, courseData, videoData, guessYouLikeData, hotCoursesData] = await Promise.all([
        this.getSwiperData(),
        this.getCourseData(),
        this.getVideoData(),
        this.getGuessYouLikeData(),
        this.getHotCoursesData()
      ]);

      // 设置页面数据
      this.setData({
        swiperImages: swiperData,
        course: courseData,
        videos: videoData,
        guessYouLike: guessYouLikeData,
        hotCourses: hotCoursesData,
        loading: false
      });
    } catch (error) {
      console.error('初始化页面数据失败:', error);
      this.setData({ loading: false });
    }
  },

  /**
   * 获取轮播图数据
   */
  getSwiperData() {
    return mockData['home/swipers'].message;
  },

  /**
   * 获取推荐课程数据
   */
  getCourseData() {
    return mockData['home/course'].message;
  },

  /**
   * 获取热门视频数据
   */
  getVideoData() {
    return mockData['home/video'].message;
  },

  /**
   * 获取猜你喜欢数据
   */
  async getGuessYouLikeData() {
    // 首先获取用户学习行为数据，分析学习效果
    const learningEffect = await this.analyzeLearningEffect();

    // 根据学习效果动态调整推荐
    const response = await learningService.adjustRecommendationsByEffect(learningEffect);
    return response.success ? response.data : [];
  },

  /**
   * 分析用户学习效果
   */
  async analyzeLearningEffect() {
    try {
      // 获取用户学习行为数据
      const behaviorResponse = await mockRequest('user/learning-behavior');
      const studyRecords = behaviorResponse.data.message.study_records || [];

      // 简单的学习效果分析
      let totalProgress = 0;
      let completedCourses = 0;
      let totalStudyTime = 0;

      studyRecords.forEach(record => {
        totalProgress += record.progress;
        totalStudyTime += record.study_time;
        if (record.completed) {
          completedCourses++;
        }
      });

      const averageProgress = studyRecords.length > 0 ? totalProgress / studyRecords.length : 0;
      const completionRate = studyRecords.length > 0 ? completedCourses / studyRecords.length : 0;

      return {
        total_courses: studyRecords.length,
        completed_courses: completedCourses,
        total_study_time: totalStudyTime,
        average_progress: averageProgress,
        completion_rate: completionRate,
        progress: averageProgress // 用于调整推荐的主要指标
      };
    } catch (error) {
      console.error('分析学习效果失败:', error);
      // 返回默认值
      return {
        total_courses: 0,
        completed_courses: 0,
        total_study_time: 0,
        average_progress: 0,
        completion_rate: 0,
        progress: 50 // 默认进度
      };
    }
  },

  /**
   * 获取热门课程数据
   */
  async getHotCoursesData() {
    const response = await learningService.getHotCourses(4);
    return response.success ? response.data : [];
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