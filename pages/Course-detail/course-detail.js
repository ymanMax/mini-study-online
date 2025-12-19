// pages/Course-detail/course-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course: {},
    questions: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadCourseData();
    this.loadQuestions();
  },

  // 加载课程数据
  loadCourseData: function() {
    const mockCourse = {
      id: 1,
      title: 'Web前端开发实战',
      teacher: '张老师',
      cover: '/assets/course-cover1.png',
      description: '从零基础开始学习Web前端开发，掌握HTML、CSS、JavaScript等核心技术，完成实战项目',
      students: 1234,
      rating: 4.8
    };

    this.setData({
      course: mockCourse
    });
  },

  // 加载问答数据
  loadQuestions: function() {
    const mockQuestions = [
      {
        id: 1,
        content: '请问JavaScript中的闭包是什么？如何正确使用？',
        asker: {
          id: 201,
          username: '初学者小王',
          avatar: '/assets/avatar4.png'
        },
        askTime: '2小时前',
        answers: 8,
        likes: 15,
        bestAnswer: {
          id: 101,
          content: '闭包是指有权访问另一个函数作用域中变量的函数...',
          answerer: {
            id: 101,
            username: '前端大师',
            avatar: '/assets/avatar1.png',
            isTeacher: true
          },
          answerTime: '1小时前',
          likes: 32,
          rewardPoints: 50
        }
      },
      {
        id: 2,
        content: 'CSS中flex布局的常用属性有哪些？',
        asker: {
          id: 202,
          username: '设计爱好者',
          avatar: '/assets/avatar5.png'
        },
        askTime: '昨天',
        answers: 5,
        likes: 8,
        bestAnswer: null
      },
      {
        id: 3,
        content: '如何优化网站的加载性能？',
        asker: {
          id: 203,
          username: '性能优化师',
          avatar: '/assets/avatar6.png'
        },
        askTime: '3天前',
        answers: 12,
        likes: 45,
        bestAnswer: {
          id: 102,
          content: '网站性能优化可以从多个方面入手...',
          answerer: {
            id: 103,
            username: '算法之神',
            avatar: '/assets/avatar3.png',
            isTeacher: true
          },
          answerTime: '2天前',
          likes: 67,
          rewardPoints: 100
        }
      }
    ];

    this.setData({
      questions: mockQuestions
    });
  },

  // 我要提问
  onAskQuestion: function() {
    wx.showModal({
      title: '提问',
      content: '提问功能将在后续版本中实现',
      showCancel: false
    });
  },

  // 查看更多回答
  viewAnswers: function(e) {
    const question = e.currentTarget.dataset.question;
    wx.showToast({
      title: `查看问题 "${question.content}" 的更多回答`,
      icon: 'none'
    });
  }
})
