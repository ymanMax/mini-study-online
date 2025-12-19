// pages/community/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKeyword: '',
    topics: [],
    groups: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadTopics();
    this.loadGroups();
  },

  // 加载话题数据
  loadTopics: function() {
    // Mock数据
    const mockTopics = [
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
      },
      {
        id: 3,
        title: '数据结构与算法学习方法探讨',
        description: '数据结构和算法是编程的基础，但学习起来比较困难。大家有什么好的学习资源和方法推荐吗？',
        author: {
          id: 103,
          username: '算法之神',
          avatar: '/assets/avatar3.png',
          isTeacher: true
        },
        postTime: '1天前',
        comments: 41,
        likes: 123,
        views: 897
      }
    ];

    this.setData({
      topics: mockTopics
    });
  },

  // 加载学习小组数据
  loadGroups: function() {
    // Mock数据
    const mockGroups = [
      {
        id: 1,
        name: '前端开发交流群',
        description: '前端开发者的聚集地，分享最新技术和实战经验',
        avatar: '/assets/group1.png',
        members: 256,
        joined: false
      },
      {
        id: 2,
        name: 'Python学习小组',
        description: 'Python爱好者的乐园，一起学习，共同进步',
        avatar: '/assets/group2.png',
        members: 189,
        joined: true
      },
      {
        id: 3,
        name: '算法学习小分队',
        description: '攻克数据结构与算法，挑战大厂面试',
        avatar: '/assets/group3.png',
        members: 145,
        joined: false
      },
      {
        id: 4,
        name: '移动开发交流',
        description: 'iOS、Android开发技术分享和经验交流',
        avatar: '/assets/group4.png',
        members: 167,
        joined: false
      }
    ];

    this.setData({
      groups: mockGroups
    });
  },

  // 搜索输入
  onSearchInput: function(e) {
    this.setData({
      searchKeyword: e.detail.value
    });
  },

  // 搜索
  onSearch: function() {
    wx.showToast({
      title: `搜索关键词: ${this.data.searchKeyword}`,
      icon: 'none'
    });
  },

  // 发布话题
  onPublish: function() {
    wx.showModal({
      title: '发布话题',
      content: '发布功能将在后续版本中实现',
      showCancel: false
    });
  },

  // 进入话题详情
  goToTopicDetail: function(e) {
    const topic = e.currentTarget.dataset.topic;
    wx.showToast({
      title: `查看话题: ${topic.title}`,
      icon: 'none'
    });
  },

  // 进入小组列表
  goToGroups: function() {
    wx.showToast({
      title: '查看更多小组',
      icon: 'none'
    });
  },

  // 加入小组
  joinGroup: function(e) {
    const group = e.currentTarget.dataset.group;
    wx.showToast({
      title: `加入小组: ${group.name}`,
      icon: 'success'
    });
  }
})
