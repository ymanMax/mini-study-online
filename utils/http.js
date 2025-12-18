// 直接使用mock数据
import { mockData } from './mock.js'

export const instance = ({url,data,method="GET",isLogin=false,tips="数据加载中..."})=>{
  // 返回一个promise对象
  return new Promise((resolve,reject)=>{
    wx.showLoading({
      title: tips,
    })
    
    // 直接使用mock数据
    setTimeout(() => {
      if (mockData[url]) {
        resolve({
          data: mockData[url]
        })
      } else {
        reject(new Error(`Mock data not found for URL: ${url}`))
      }
      
      // 隐藏加载提示
      setTimeout(function () {
        wx.hideLoading()
      }, 1000)
    }, 500)
  })
}

