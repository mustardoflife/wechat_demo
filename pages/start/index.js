// pages/start/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad:function(){  
      var user = wx.getStorageSync("user");
      if(user){
        setTimeout(function () {
          wx.switchTab({
            url: '../index/index',
          })
        }, 1000)
      }else{
        setTimeout(function () {
          wx.redirectTo({
            url: '../login/index',
          })
          // console.log(true)
        }, 1000)
      }
    }
  }
})
