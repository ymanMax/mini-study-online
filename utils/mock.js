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
      course_count: 8,
      points: 1250,
      level: '中级学习者',
      isTeacher: false,
      groups: 3
    }
  },

  // 积分记录
  'user/points': {
    status: 0,
    message: [
      {
        id: 1,
        type: '回答问题',
        points: '+50',
        description: '回答了"JavaScript闭包是什么？"问题',
        time: '2小时前'
      },
      {
        id: 2,
        type: '最佳答案',
        points: '+100',
        description: '回答被选为最佳答案',
        time: '昨天'
      },
      {
        id: 3,
        type: '加入小组',
        points: '+20',
        description: '加入了"前端开发交流群"',
        time: '3天前'
      }
    ]
  },

  // 学习小组数据
  'groups/list': {
    status: 0,
    message: [
      {
        id: 1,
        name: '前端开发交流群',
        description: '前端开发者的聚集地，分享最新技术和实战经验',
        avatar: '/assets/group1.png',
        members: 256,
        joined: true,
        creator: '前端大师'
      },
      {
        id: 2,
        name: 'Python学习小组',
        description: 'Python爱好者的乐园，一起学习，共同进步',
        avatar: '/assets/group2.png',
        members: 189,
        joined: true,
        creator: 'Python专家'
      },
      {
        id: 3,
        name: '算法学习小分队',
        description: '攻克数据结构与算法，挑战大厂面试',
        avatar: '/assets/group3.png',
        members: 145,
        joined: false,
        creator: '算法之神'
      }
    ]
  },

  // 社区话题数据
  'community/topics': {
    status: 0,
    message: [
      {
        id: 1,
        title: '如何高效学习前端开发？',
        description: '大家分享一下自己学习前端的方法和技巧，特别是对于零基础的初学者有什么建议？',
        author: {
          id: 101,
          username: '前端大师',
          avatar: '/assets/avatar1.png',
          isTeacher: true
        },
        postTime: '2小时前',
        comments: 23,
        likes: 89,
        views: 523
      },
      {
        id: 2,
        title: 'Python学习心得分享',
        description: '学习Python已经三个月了，感觉这门语言真的很强大。分享一下我整理的学习资料和实战项目。',
        author: {
          id: 102,
          username: 'Python爱好者',
          avatar: '/assets/avatar2.png',
          isTeacher: false
        },
        postTime: '5小时前',
        comments: 15,
        likes: 45,
        views: 312
      }
    ]
  },

  // 课程问答数据
  'course/questions': {
    status: 0,
    message: [
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
      }
    ]
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