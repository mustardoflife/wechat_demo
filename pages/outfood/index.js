const app = getApp()

Page({
  data: {
    list: "",
    show:true
  },
  // onLoad: function () {
  //   var _this = this;
  //   wx.request({
  //     url: "http://route.showapi.com/107-33",
  //     data: {
  //       "showapi_appid": "44736",
  //       "showapi_sign": "19fd12051a254503a657b7ed6ccb2dc5"
  //     },
  //     success: function (res) {
  //       // console.log(res.data.showapi_res_body.list);
  //       _this.setData({
  //         list: res.data.showapi_res_body.list
  //       })
  //     },
  //     fail: function (res) {
  //       console.log("失败")
  //     }
  //   })
  // },
  onPullDownRefresh: function () {
    var _this = this;
    wx.request({
      url: "http://route.showapi.com/119-42",
      data: {
        "showapi_appid": "44736",
        "showapi_sign": "19fd12051a254503a657b7ed6ccb2dc5"
      },
      success: function (res) {
        // console.log(res.data.showapi_res_body.list);
        _this.setData({
          list: res.data.showapi_res_body.list,
          show:false
        })
      },
      fail: function (res) {
        console.log("失败")
      }
    })
    // wx.stopPullDownRefresh();
    //   wx.showToast({
    //     title: '数据每天定时刷新',
    //   })

  }

})

