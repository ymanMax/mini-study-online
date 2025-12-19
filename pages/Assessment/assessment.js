// pages/Assessment/assessment.js
import { learningService } from "../../utils/learningService.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    questions: [],
    totalQuestions: 0,
    currentQuestionIndex: 0,
    currentQuestion: null,
    selectedAnswer: null,
    selectedAnswers: [],
    userAnswers: [],
    showResult: false,
    assessmentResult: null,
    loading: false,
    canProceed: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAssessmentQuestions();
  },

  /**
   * 加载测评题目
   */
  async loadAssessmentQuestions() {
    try {
      this.setData({ loading: true });

      const response = await learningService.getAssessmentQuestions();
      if (response.success) {
        const questions = response.data;
        this.setData({
          questions: questions,
          totalQuestions: questions.length,
          currentQuestion: questions[0],
          loading: false
        });
      } else {
        throw new Error('加载题目失败');
      }
    } catch (error) {
      console.error('加载测评题目失败:', error);
      wx.showToast({
        title: '加载失败',
        icon: 'error'
      });
      this.setData({ loading: false });
    }
  },

  /**
   * 选择答案（单选题）
   */
  selectAnswer: function (e) {
    const option = e.currentTarget.dataset.option;

    this.setData({
      selectedAnswer: option,
      canProceed: true
    });
  },

  /**
   * 切换答案选择（多选题）
   */
  toggleAnswer: function (e) {
    const option = e.currentTarget.dataset.option;
    let selectedAnswers = [...this.data.selectedAnswers];

    const index = selectedAnswers.indexOf(option);
    if (index > -1) {
      selectedAnswers.splice(index, 1);
    } else {
      selectedAnswers.push(option);
    }

    this.setData({
      selectedAnswers: selectedAnswers,
      canProceed: selectedAnswers.length > 0
    });
  },

  /**
   * 下一题
   */
  async nextQuestion() {
    // 保存当前答案
    this.saveCurrentAnswer();

    const currentIndex = this.data.currentQuestionIndex;
    const totalQuestions = this.data.totalQuestions;

    if (currentIndex < totalQuestions - 1) {
      // 继续下一题
      this.setData({
        currentQuestionIndex: currentIndex + 1,
        currentQuestion: this.data.questions[currentIndex + 1],
        selectedAnswer: null,
        selectedAnswers: [],
        canProceed: false
      });
    } else {
      // 提交测评
      await this.submitAssessment();
    }
  },

  /**
   * 保存当前答案
   */
  saveCurrentAnswer() {
    const currentQuestion = this.data.currentQuestion;
    let answer;

    if (currentQuestion.type === 'single_choice') {
      answer = this.data.selectedAnswer;
    } else {
      answer = this.data.selectedAnswers;
    }

    const userAnswer = {
      question_id: currentQuestion.id,
      answer: answer,
      question_type: currentQuestion.type
    };

    let userAnswers = [...this.data.userAnswers];
    userAnswers[this.data.currentQuestionIndex] = userAnswer;

    this.setData({
      userAnswers: userAnswers
    });
  },

  /**
   * 提交测评
   */
  async submitAssessment() {
    try {
      this.setData({ loading: true });

      const response = await learningService.submitAssessmentAnswers(this.data.userAnswers);

      if (response.success) {
        this.setData({
          assessmentResult: response.data,
          showResult: true,
          loading: false
        });
      } else {
        throw new Error('提交测评失败');
      }
    } catch (error) {
      console.error('提交测评失败:', error);
      wx.showToast({
        title: '提交失败',
        icon: 'error'
      });
      this.setData({ loading: false });
    }
  },

  /**
   * 生成个性化学习路径
   */
  async generateLearningPath() {
    try {
      wx.showLoading({
        title: '生成路径中...'
      });

      const response = await learningService.getLearningPath();

      wx.hideLoading();

      if (response.success) {
        // 可以跳转到学习路径页面
        wx.showToast({
          title: '学习路径已生成',
          icon: 'success'
        });

        // 这里可以跳转到学习路径页面
        console.log('学习路径:', response.data);
      } else {
        throw new Error('生成学习路径失败');
      }
    } catch (error) {
      console.error('生成学习路径失败:', error);
      wx.showToast({
        title: '生成失败',
        icon: 'error'
      });
    }
  },

  /**
   * 重新测评
   */
  retryAssessment() {
    this.setData({
      questions: [],
      totalQuestions: 0,
      currentQuestionIndex: 0,
      currentQuestion: null,
      selectedAnswer: null,
      selectedAnswers: [],
      userAnswers: [],
      showResult: false,
      assessmentResult: null,
      loading: false,
      canProceed: false
    });

    this.loadAssessmentQuestions();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 不允许下拉刷新
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 不需要上拉加载
  }
})
