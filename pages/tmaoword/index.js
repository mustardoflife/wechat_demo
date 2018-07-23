const app = getApp()

Page({
  data: {
    list: ""
  },

  onPullDownRefresh: function () {
    var _this = this;
    wx.request({
      url: "http://route.showapi.com/90-87",
      data: {
        "showapi_appid":"44736",
        "showapi_sign": "19fd12051a254503a657b7ed6ccb2dc5",
        "tid":"562",
        "page":"10"
      },
      success: function (res) {
        // console.log(res.data.showapi_res_body.pagebean.contentlist);
        _this.setData({
          list: res.data.showapi_res_body.pagebean.contentlist
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
