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

  // 学习计划数据
  'study/plans': {
    status: 0,
    message: [
      {
        id: 1,
        title: '前端开发学习计划',
        description: '3个月掌握前端开发核心技能',
        type: 'long_term',
        start_date: '2024-01-15',
        end_date: '2024-04-15',
        progress: 65,
        tasks: [
          {
            id: 101,
            title: 'HTML5基础学习',
            start_date: '2024-01-15',
            end_date: '2024-01-30',
            status: 'completed',
            study_hour: 8
          },
          {
            id: 102,
            title: 'CSS3样式与布局',
            start_date: '2024-02-01',
            end_date: '2024-02-15',
            status: 'completed',
            study_hour: 10
          },
          {
            id: 103,
            title: 'JavaScript核心语法',
            start_date: '2024-02-16',
            end_date: '2024-03-15',
            status: 'in_progress',
            study_hour: 12,
            total_hour: 20
          },
          {
            id: 104,
            title: 'React框架实战',
            start_date: '2024-03-16',
            end_date: '2024-04-15',
            status: 'pending',
            study_hour: 0,
            total_hour: 25
          }
        ]
      },
      {
        id: 2,
        title: '每周学习计划',
        description: '本周重点学习JavaScript高级特性',
        type: 'weekly',
        start_date: '2024-03-11',
        end_date: '2024-03-17',
        progress: 45,
        tasks: [
          {
            id: 201,
            title: '闭包与作用域',
            start_date: '2024-03-11',
            end_date: '2024-03-12',
            status: 'completed',
            study_hour: 3
          },
          {
            id: 202,
            title: '原型与继承',
            start_date: '2024-03-13',
            end_date: '2024-03-14',
            status: 'in_progress',
            study_hour: 2,
            total_hour: 4
          },
          {
            id: 203,
            title: '异步编程',
            start_date: '2024-03-15',
            end_date: '2024-03-16',
            status: 'pending',
            study_hour: 0,
            total_hour: 5
          },
          {
            id: 204,
            title: 'ES6+新特性',
            start_date: '2024-03-17',
            end_date: '2024-03-17',
            status: 'pending',
            study_hour: 0,
            total_hour: 3
          }
        ]
      }
    ]
  },

  // 学习日历数据
  'study/calendar': {
    status: 0,
    message: {
      current_month: '2024-03',
      events: [
        {
          id: 1,
          date: '2024-03-11',
          title: '闭包与作用域学习',
          type: 'study',
          duration: 3,
          completed: true
        },
        {
          id: 2,
          date: '2024-03-12',
          title: 'JavaScript练习',
          type: 'practice',
          duration: 2,
          completed: true
        },
        {
          id: 3,
          date: '2024-03-13',
          title: '原型与继承学习',
          type: 'study',
          duration: 2,
          completed: true
        },
        {
          id: 4,
          date: '2024-03-14',
          title: '原型链深入理解',
          type: 'study',
          duration: 2,
          completed: false
        },
        {
          id: 5,
          date: '2024-03-15',
          title: '异步编程学习',
          type: 'study',
          duration: 5,
          completed: false
        },
        {
          id: 6,
          date: '2024-03-16',
          title: 'Promise和async/await',
          type: 'study',
          duration: 4,
          completed: false
        },
        {
          id: 7,
          date: '2024-03-17',
          title: 'ES6+新特性总结',
          type: 'review',
          duration: 3,
          completed: false
        }
      ]
    }
  },

  // 学习数据分析
  'study/analytics': {
    status: 0,
    message: {
      total_study_hours: 45,
      weekly_hours: [8, 10, 12, 6, 5, 2, 2],
      completed_courses: 2,
      in_progress_courses: 1,
      completion_rate: 75,
      study_goals: [
        {
          id: 1,
          title: '每日学习2小时',
          current: 1.5,
          target: 2,
          achieved: false
        },
        {
          id: 2,
          title: '每周完成3个任务',
          current: 2,
          target: 3,
          achieved: false
        },
        {
          id: 3,
          title: '本月学习40小时',
          current: 35,
          target: 40,
          achieved: false
        }
      ],
      recommendations: [
        "您本周学习时长有所下降，建议合理安排学习时间",
        "JavaScript原型部分掌握不够牢固，建议多加练习",
        "已完成HTML和CSS学习，可开始React框架学习",
        "建议每周进行一次学习总结，巩固所学知识"
      ]
    }
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