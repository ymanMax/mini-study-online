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

  // 用户学习行为数据
  'user/learning-behavior': {
    status: 0,
    message: {
      user_id: 1001,
      study_records: [
        {
          course_id: 1,
          course_name: '前端开发入门',
          study_time: 120,
          progress: 85,
          completed: false,
          last_study_time: '2025-12-18 14:30:00'
        },
        {
          course_id: 2,
          course_name: 'JavaScript进阶',
          study_time: 80,
          progress: 45,
          completed: false,
          last_study_time: '2025-12-17 16:45:00'
        },
        {
          course_id: 8,
          course_name: 'Python基础',
          study_time: 150,
          progress: 100,
          completed: true,
          last_study_time: '2025-12-15 10:20:00'
        }
      ],
      interests: [
        {
          tag: '前端开发',
          score: 0.92
        },
        {
          tag: 'JavaScript',
          score: 0.85
        },
        {
          tag: 'Python',
          score: 0.78
        },
        {
          tag: 'React',
          score: 0.65
        }
      ],
      learning_preferences: {
        preferred_time: 'evening',
        study_duration: 45,
        learning_style: 'visual'
      }
    }
  },

  // 学习能力测评题目
  'assessment/questions': {
    status: 0,
    message: [
      {
        id: 1,
        question: '您对编程的了解程度如何？',
        type: 'single_choice',
        options: [
          {
            key: 'A',
            text: '完全零基础',
            score: 1
          },
          {
            key: 'B',
            text: '了解基本概念',
            score: 2
          },
          {
            key: 'C',
            text: '有一定编程经验',
            score: 3
          },
          {
            key: 'D',
            text: '熟练掌握多种语言',
            score: 4
          }
        ]
      },
      {
        id: 2,
        question: '您每天能投入多少时间学习？',
        type: 'single_choice',
        options: [
          {
            key: 'A',
            text: '30分钟以内',
            score: 1
          },
          {
            key: 'B',
            text: '30-60分钟',
            score: 2
          },
          {
            key: 'C',
            text: '1-2小时',
            score: 3
          },
          {
            key: 'D',
            text: '2小时以上',
            score: 4
          }
        ]
      },
      {
        id: 3,
        question: '您学习编程的主要目标是什么？',
        type: 'multiple_choice',
        options: [
          {
            key: 'A',
            text: '兴趣爱好',
            score: 1
          },
          {
            key: 'B',
            text: '职业发展',
            score: 2
          },
          {
            key: 'C',
            text: '项目开发',
            score: 3
          },
          {
            key: 'D',
            text: '升学考试',
            score: 2
          }
        ]
      },
      {
        id: 4,
        question: '您更倾向于哪种学习方式？',
        type: 'single_choice',
        options: [
          {
            key: 'A',
            text: '视频教程',
            score: 3
          },
          {
            key: 'B',
            text: '文字教程',
            score: 2
          },
          {
            key: 'C',
            text: '实践项目',
            score: 4
          },
          {
            key: 'D',
            text: '在线互动',
            score: 3
          }
        ]
      }
    ]
  },

  // 学习能力测评结果
  'assessment/result': {
    status: 0,
    message: {
      user_id: 1001,
      assessment_id: 1,
      total_score: 12,
      level: ' intermediate',
      strengths: [
        '学习动力强',
        '实践能力突出',
        '自主学习能力强'
      ],
      weaknesses: [
        '理论基础需要加强',
        '知识体系不够系统',
        '缺乏项目经验'
      ],
      recommendations: [
        '建议选择系统的前端开发课程',
        '注重理论知识与实践相结合',
        '参与实际项目提升实战能力'
      ]
    }
  },

  // 个性化学习路径
  'learning-path/personalized': {
    status: 0,
    message: {
      user_id: 1001,
      path_id: 1,
      title: '前端开发工程师成长路径',
      description: '根据您的学习能力和兴趣定制的个性化学习路径',
      duration: 120,
      total_courses: 8,
      progress: 25,
      courses: [
        {
          id: 1,
          name: '前端开发入门',
          status: 'in_progress',
          progress: 85,
          estimated_time: 30
        },
        {
          id: 2,
          name: 'JavaScript进阶',
          status: 'pending',
          progress: 0,
          estimated_time: 40
        },
        {
          id: 3,
          name: 'React实战',
          status: 'pending',
          progress: 0,
          estimated_time: 50
        },
        {
          id: 9,
          name: '前端工程化',
          status: 'pending',
          progress: 0,
          estimated_time: 45
        }
      ]
    }
  },

  // 猜你喜欢课程推荐
  'recommend/guess-you-like': {
    status: 0,
    message: [
      {
        id: 5,
        icon: '/assets/images/star_fill@2x.png',
        title: 'Node.js后端开发',
        subtitle: '构建服务器端应用',
        level: 3,
        match_score: 0.95,
        tags: ['后端开发', 'Node.js', 'JavaScript']
      },
      {
        id: 7,
        icon: '/assets/images/evaluate@2x.png',
        title: 'TypeScript实战',
        subtitle: '类型安全的JavaScript',
        level: 2,
        match_score: 0.88,
        tags: ['前端开发', 'TypeScript', 'JavaScript']
      },
      {
        id: 9,
        icon: '/assets/images/logo@2x.png',
        title: '前端工程化',
        subtitle: '现代化前端开发流程',
        level: 3,
        match_score: 0.82,
        tags: ['前端开发', '工程化', '工具链']
      },
      {
        id: 10,
        icon: '/assets/images/mushroom_logo@2x.png',
        title: 'Python数据分析',
        subtitle: '用Python处理和分析数据',
        level: 2,
        match_score: 0.76,
        tags: ['Python', '数据分析', '数据科学']
      }
    ]
  },

  // 热门课程推荐
  'recommend/hot-courses': {
    status: 0,
    message: [
      {
        id: 8,
        icon: '/assets/images/auto_logo@2x.png',
        title: 'Python基础',
        subtitle: '从零开始学习Python',
        level: 1,
        popularity: 98,
        enroll_count: 2540,
        rating: 4.8
      },
      {
        id: 1,
        icon: '/assets/images/logo@2x.png',
        title: '前端开发入门',
        subtitle: '从零开始学习前端开发',
        level: 1,
        popularity: 95,
        enroll_count: 2100,
        rating: 4.7
      },
      {
        id: 6,
        icon: '/assets/images/evaluate@2x.png',
        title: '小程序开发入门',
        subtitle: '掌握微信小程序开发',
        level: 1,
        popularity: 92,
        enroll_count: 1850,
        rating: 4.6
      },
      {
        id: 4,
        icon: '/assets/images/wx_pay_logo@2x.png',
        title: 'Vue.js框架',
        subtitle: '掌握Vue.js开发技巧',
        level: 2,
        popularity: 88,
        enroll_count: 1620,
        rating: 4.5
      }
    ]
  },

  // 学习目标管理
  'learning-goal/management': {
    status: 0,
    message: {
      user_id: 1001,
      goals: [
        {
          id: 1,
          title: '3个月内掌握前端开发',
          description: '系统学习HTML、CSS、JavaScript和React',
          start_date: '2025-10-01',
          end_date: '2026-01-01',
          progress: 65,
          status: 'in_progress',
          courses: [1, 2, 3]
        },
        {
          id: 2,
          title: '学习Python数据分析',
          description: '掌握Python数据处理和分析技能',
          start_date: '2025-12-01',
          end_date: '2026-03-01',
          progress: 15,
          status: 'in_progress',
          courses: [10]
        },
        {
          id: 3,
          title: '完成JavaScript进阶课程',
          description: '深入理解JavaScript核心概念',
          start_date: '2025-12-10',
          end_date: '2026-01-10',
          progress: 40,
          status: 'in_progress',
          courses: [2]
        }
      ]
    }
  },

  // 学习进度提醒
  'learning-reminder/progress': {
    status: 0,
    message: [
      {
        id: 1,
        type: 'course_deadline',
        title: 'JavaScript进阶课程即将到期',
        message: '您的JavaScript进阶课程还有15天到期，请抓紧学习',
        deadline: '2026-01-05',
        priority: 'high',
        course_id: 2
      },
      {
        id: 2,
        type: 'goal_progress',
        title: '前端开发学习目标进度提醒',
        message: '您的"3个月内掌握前端开发"目标已完成65%，继续加油',
        progress: 65,
        priority: 'medium',
        goal_id: 1
      },
      {
        id: 3,
        type: 'recommendation',
        title: '为您推荐新课程',
        message: '根据您的学习情况，推荐您学习"Node.js后端开发"课程',
        priority: 'low',
        course_id: 5
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