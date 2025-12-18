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

  // 课程详情数据
  'course/detail': {
    status: 0,
    message: {
      id: 1,
      title: '前端开发入门课程',
      subtitle: '从零开始学习HTML、CSS和JavaScript',
      cover: '/assets/images/logo@2x.png',
      total_chapters: 12,
      completed_chapters: 6,
      progress: 50,
      total_duration: 360,
      studied_duration: 180,
      chapters: [
        {
          id: 1,
          title: '第1章：HTML基础',
          duration: 30,
          completed: true,
          video_url: 'mock_video_1'
        },
        {
          id: 2,
          title: '第2章：CSS样式',
          duration: 30,
          completed: true,
          video_url: 'mock_video_2'
        },
        {
          id: 3,
          title: '第3章：JavaScript入门',
          duration: 45,
          completed: true,
          video_url: 'mock_video_3'
        },
        {
          id: 4,
          title: '第4章：DOM操作',
          duration: 45,
          completed: true,
          video_url: 'mock_video_4'
        },
        {
          id: 5,
          title: '第5章：事件处理',
          duration: 30,
          completed: true,
          video_url: 'mock_video_5'
        },
        {
          id: 6,
          title: '第6章：表单处理',
          duration: 30,
          completed: true,
          video_url: 'mock_video_6'
        },
        {
          id: 7,
          title: '第7章：AJAX请求',
          duration: 30,
          completed: false,
          video_url: 'mock_video_7'
        },
        {
          id: 8,
          title: '第8章：ES6新特性',
          duration: 30,
          completed: false,
          video_url: 'mock_video_8'
        }
      ]
    }
  },

  // 学习笔记数据
  'study/notes': {
    status: 0,
    message: [
      {
        id: 1,
        course_id: 1,
        chapter_id: 3,
        content: 'JavaScript的核心概念包括变量、函数、对象和数组。',
        create_time: '2024-01-15 14:30:00'
      },
      {
        id: 2,
        course_id: 1,
        chapter_id: 4,
        content: 'DOM操作可以通过getElementById、querySelector等方法获取元素。',
        create_time: '2024-01-16 10:20:00'
      }
    ]
  },

  // 证书数据
  'certificate/list': {
    status: 0,
    message: [
      {
        id: 1,
        course_id: 2,
        course_name: 'JavaScript进阶课程',
        issue_date: '2024-01-10',
        certificate_url: '/mock/certificate_1.pdf'
      }
    ]
  },

  // 个人学习中心数据
  'study/center': {
    status: 0,
    message: {
      total_courses: 3,
      in_progress_courses: 2,
      completed_courses: 1,
      courses: [
        {
          id: 1,
          title: '前端开发入门课程',
          cover: '/assets/images/logo@2x.png',
          progress: 50,
          status: 'in_progress'
        },
        {
          id: 2,
          title: 'JavaScript进阶课程',
          cover: '/assets/images/mushroom_logo@2x.png',
          progress: 100,
          status: 'completed'
        },
        {
          id: 3,
          title: 'React实战项目',
          cover: '/assets/images/auto_logo@2x.png',
          progress: 0,
          status: 'not_started'
        }
      ]
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