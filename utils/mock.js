// mock数据模块
// 根据页面展示逻辑统一生成mock数据

export const mockData = {
  // 首页轮播图数据
  'home/swipers': {
    status: 0,
    message: [
      {
        id: 1,
        img_url: '/assets/images/logo@2x.png',
        link: '/pages/Course/course'
      },
      {
        id: 2,
        img_url: '/assets/images/mushroom_logo@2x.png',
        link: '/pages/Study/study'
      },
      {
        id: 3,
        img_url: '/assets/images/auto_logo@2x.png',
        link: '/pages/My/my'
      }
    ]
  },

  // 首页推荐课程
  'home/course': {
    status: 0,
    message: [
      {
        id: 1,
        icon: '/assets/images/logo@2x.png',
        title: '前端开发入门',
        subtitle: '从零开始学习前端开发',
        level: 1
      },
      {
        id: 2,
        icon: '/assets/images/mushroom_logo@2x.png',
        title: 'JavaScript进阶',
        subtitle: '深入理解JavaScript核心概念',
        level: 2
      },
      {
        id: 3,
        icon: '/assets/images/auto_logo@2x.png',
        title: 'React实战',
        subtitle: '构建现代化React应用',
        level: 3
      },
      {
        id: 4,
        icon: '/assets/images/wx_pay_logo@2x.png',
        title: 'Vue.js框架',
        subtitle: '掌握Vue.js开发技巧',
        level: 2
      }
    ]
  },

  // 首页热门视频
  'home/video': {
    status: 0,
    message: [
      {
        id: 1,
        cover_photo_url: '/assets/images/play@2x.png',
        name: 'HTML5新特性详解',
        view_count: 1250
      },
      {
        id: 2,
        cover_photo_url: '/assets/images/comment@2x.png',
        name: 'CSS3动画效果',
        view_count: 890
      },
      {
        id: 3,
        cover_photo_url: '/assets/images/like_normal@2x.png',
        name: 'JavaScript闭包原理',
        view_count: 1560
      },
      {
        id: 4,
        cover_photo_url: '/assets/images/share@2x.png',
        name: 'React Hooks实战',
        view_count: 2100
      }
    ]
  },

  // 学习进度数据
  'study/progress': {
    status: 0,
    message: [
      {
        sid: 1,
        icon: '/assets/images/logo@2x.png',
        title: '前端开发入门课程',
        study_hour: 15,
        total_hour: 30,
        study_progress: 50
      },
      {
        sid: 2,
        icon: '/assets/images/mushroom_logo@2x.png',
        title: 'JavaScript进阶课程',
        study_hour: 8,
        total_hour: 20,
        study_progress: 40
      },
      {
        sid: 3,
        icon: '/assets/images/auto_logo@2x.png',
        title: 'React实战项目',
        study_hour: 0,
        total_hour: 25,
        study_progress: 0
      }
    ]
  },

  // 课程列表数据
  'course/list': {
    status: 0,
    message: [
      {
        id: 1,
        icon: '/assets/images/logo@2x.png',
        title: 'HTML5与CSS3基础',
        subtitle: '掌握网页布局和样式设计',
        level: 1
      },
      {
        id: 2,
        icon: '/assets/images/mushroom_logo@2x.png',
        title: 'JavaScript核心语法',
        subtitle: '深入理解JavaScript语言特性',
        level: 2
      },
      {
        id: 3,
        icon: '/assets/images/auto_logo@2x.png',
        title: 'React框架实战',
        subtitle: '构建现代化单页应用',
        level: 3
      },
      {
        id: 4,
        icon: '/assets/images/wx_pay_logo@2x.png',
        title: 'Vue.js开发指南',
        subtitle: '快速上手Vue.js开发',
        level: 2
      },
      {
        id: 5,
        icon: '/assets/images/star_fill@2x.png',
        title: 'Node.js后端开发',
        subtitle: '构建服务器端应用',
        level: 3
      },
      {
        id: 6,
        icon: '/assets/images/evaluate@2x.png',
        title: '小程序开发入门',
        subtitle: '掌握微信小程序开发',
        level: 1
      }
    ]
  },

  // 用户信息数据
  'my/info': {
    status: 0,
    message: {
      avatar: '/assets/images/avatar@2x.png',
      nickname: '酷小鱼',
      study_hour: 23,
      follow_count: 15,
      course_count: 8
    }
  },

  // 课程搜索数据
  'course/search': {
    status: 0,
    message: [
      {
        id: 1,
        icon: '/assets/images/logo@2x.png',
        title: 'HTML5与CSS3基础',
        subtitle: '掌握网页布局和样式设计',
        level: 1
      },
      {
        id: 2,
        icon: '/assets/images/mushroom_logo@2x.png',
        title: 'JavaScript核心语法',
        subtitle: '深入理解JavaScript语言特性',
        level: 2
      }
    ]
  },

  // 微信登录模拟
  'user/wxlogin': {
    status: 0,
    message: '登录成功',
    token: 'mock_token_' + Date.now(),
    res: {
      user_id: 1001,
      nickname: '微信用户'
    }
  },

  // 手机登录模拟
  'user/phonelogin': {
    status: 0,
    message: '登录成功',
    token: 'mock_token_' + Date.now(),
    res: {
      user_id: 1002,
      nickname: '手机用户'
    }
  },

  // 验证码获取模拟
  'user/vcode': {
    status: 0,
    vcode: '123456'
  },

  // 手机登录模拟
  'user/login': {
    status: 0,
    message: '登录成功',
    token: 'mock_token_' + Date.now(),
    res: {
      user_id: 1002,
      nickname: '手机用户'
    }
  },

  // 考试数据 - 章节练习
  'exam/chapter-exercises': {
    status: 0,
    message: {
      examId: 1001,
      title: '第一章 前端基础练习题',
      type: 'chapter',
      questions: [
        {
          id: 1,
          type: 'single',
          content: 'HTML的全称是什么？',
          options: [
            { id: 'A', text: 'Hyper Text Markup Language' },
            { id: 'B', text: 'High Tech Modern Language' },
            { id: 'C', text: 'Hyperlinks and Text Markup Language' },
            { id: 'D', text: 'Home Tool Markup Language' }
          ],
          answer: 'A',
          explanation: 'HTML的正确全称是Hyper Text Markup Language（超文本标记语言）'
        },
        {
          id: 2,
          type: 'multiple',
          content: '以下哪些是CSS的选择器？',
          options: [
            { id: 'A', text: '类选择器' },
            { id: 'B', text: 'ID选择器' },
            { id: 'C', text: '标签选择器' },
            { id: 'D', text: '属性选择器' }
          ],
          answer: ['A', 'B', 'C', 'D'],
          explanation: 'CSS支持类选择器、ID选择器、标签选择器和属性选择器等多种选择器'
        },
        {
          id: 3,
          type: 'judge',
          content: 'JavaScript是一种编译型语言。',
          options: [
            { id: 'A', text: '正确' },
            { id: 'B', text: '错误' }
          ],
          answer: 'B',
          explanation: 'JavaScript是一种解释型语言，不需要预先编译'
        }
      ]
    }
  },

  // 考试数据 - 模拟考试
  'exam/simulate': {
    status: 0,
    message: {
      examId: 2001,
      title: '前端开发模拟考试',
      type: 'simulate',
      duration: 120,
      questions: [
        {
          id: 1,
          type: 'single',
          content: '以下哪个不是JavaScript的数据类型？',
          options: [
            { id: 'A', text: 'String' },
            { id: 'B', text: 'Number' },
            { id: 'C', text: 'Boolean' },
            { id: 'D', text: 'Character' }
          ],
          answer: 'D',
          explanation: 'JavaScript的数据类型包括String、Number、Boolean等，但没有Character类型'
        },
        {
          id: 2,
          type: 'multiple',
          content: '以下哪些方法可以用来操作数组？',
          options: [
            { id: 'A', text: 'push()' },
            { id: 'B', text: 'pop()' },
            { id: 'C', text: 'shift()' },
            { id: 'D', text: 'unshift()' }
          ],
          answer: ['A', 'B', 'C', 'D'],
          explanation: '这些都是JavaScript数组的常用操作方法'
        },
        {
          id: 3,
          type: 'judge',
          content: 'React是由Facebook开发的JavaScript库。',
          options: [
            { id: 'A', text: '正确' },
            { id: 'B', text: '错误' }
          ],
          answer: 'A',
          explanation: 'React确实是由Facebook开发并维护的'
        }
      ]
    }
  },

  // 考试数据 - 真题练习
  'exam/real': {
    status: 0,
    message: {
      examId: 3001,
      title: '前端开发真题练习',
      type: 'real',
      questions: [
        {
          id: 1,
          type: 'single',
          content: '在CSS中，哪个属性用于设置文本颜色？',
          options: [
            { id: 'A', text: 'font-color' },
            { id: 'B', text: 'text-color' },
            { id: 'C', text: 'color' },
            { id: 'D', text: 'text-style' }
          ],
          answer: 'C',
          explanation: 'CSS中使用color属性设置文本颜色'
        }
      ]
    }
  },

  // 考试提交结果
  'exam/submit': {
    status: 0,
    message: {
      score: 85,
      total: 100,
      correctCount: 17,
      totalCount: 20,
      wrongQuestions: [
        {
          id: 5,
          type: 'single',
          content: '以下哪个不是HTTP请求方法？',
          options: [
            { id: 'A', text: 'GET' },
            { id: 'B', text: 'POST' },
            { id: 'C', text: 'PUT' },
            { id: 'D', text: 'FETCH' }
          ],
          userAnswer: 'C',
          correctAnswer: 'D',
          explanation: 'HTTP请求方法包括GET、POST、PUT等，FETCH是JavaScript的API'
        }
      ],
      analysis: {
        strongPoints: ['HTML', 'CSS'],
        weakPoints: ['JavaScript异步编程', '网络请求']
      }
    }
  },

  // 学习报告
  'report/study': {
    status: 0,
    message: {
      totalStudyHours: 45,
      completedCourses: 3,
      totalExams: 5,
      averageScore: 82,
      ranking: '前20%',
      improvement: '+15%',
      weakTopics: ['JavaScript高级', '算法'],
      recentPerformance: [80, 85, 90, 78, 88]
    }
  },

  // 错题本
  'exam/wrong-questions': {
    status: 0,
    message: [
      {
        id: 5,
        type: 'single',
        content: '以下哪个不是HTTP请求方法？',
        options: [
          { id: 'A', text: 'GET' },
          { id: 'B', text: 'POST' },
          { id: 'C', text: 'PUT' },
          { id: 'D', text: 'FETCH' }
        ],
        userAnswer: 'C',
        correctAnswer: 'D',
        explanation: 'HTTP请求方法包括GET、POST、PUT等，FETCH是JavaScript的API',
        date: '2024-01-15'
      },
      {
        id: 8,
        type: 'multiple',
        content: '以下哪些是React Hooks？',
        options: [
          { id: 'A', text: 'useState' },
          { id: 'B', text: 'useEffect' },
          { id: 'C', text: 'useContext' },
          { id: 'D', text: 'useRedux' }
        ],
        userAnswer: ['A', 'B', 'D'],
        correctAnswer: ['A', 'B', 'C'],
        explanation: 'useState、useEffect、useContext是React Hooks，useRedux不是',
        date: '2024-01-12'
      }
    ]
  }
}

// mock请求函数
export const mockRequest = (url, data = {}, method = 'GET') => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockData[url]) {
        resolve({
          data: mockData[url],
          statusCode: 200
        })
      } else {
        reject({
          errMsg: '接口不存在',
          statusCode: 404
        })
      }
    }, 500) // 模拟网络延迟
  })
}

// 判断是否使用mock数据
export const isMockEnabled = true