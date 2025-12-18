// pages/search/search.js
import { mockData } from "../../utils/mock.js";
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    courses:[]
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  confirm: function(e){
    // 直接使用mock数据，模拟搜索功能
    const searchTerm = e.detail.value.toLowerCase();
    const allCourses = mockData['course/list'].message;
    const filteredCourses = allCourses.filter(course => 
      course.title.toLowerCase().includes(searchTerm) || 
      course.subtitle.toLowerCase().includes(searchTerm)
    );
    
    this.setData({
      courses: filteredCourses.length > 0 ? filteredCourses : mockData['course/search'].message
    })
  }
})