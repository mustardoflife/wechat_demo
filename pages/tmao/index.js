// pages/after/index.js
const app = getApp()

Page({
  data:{
    list:""
  },
  onLoad:function(){
    var _this = this;
    wx.request({
      url:"http://route.showapi.com/107-32",
      data:{
        "showapi_appid":"44736",
        "showapi_sign":"19fd12051a254503a657b7ed6ccb2dc5"
      },
      success:function(res){
        // console.log(res.data.showapi_res_body.list);
        _this.setData({
          list: res.data.showapi_res_body.list
        })
      },
      fail:function(res){
        console.log("失败");
        alert("加载失败")
      }
    })
  }
})
