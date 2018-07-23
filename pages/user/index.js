const app = getApp()

Page({
  data: {
    createCodeShow: false,
    createCode: "",
    userInfo: {},
    chooseaddress: "",
    latitude: "点击获取",
    longitude: "点击获取",

    maxlength: 11,
    mobileLocation: {//移动选择位置数据
      longitude: 0,
      latitude: 0,
      address: '',
    },
    inputValue: '',
    showWriteFalse: false
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  //事件处理函数
  onLoad: function () {
    var user = (wx.getStorageSync("user") || []);
    this.setData({
      userInfo: user.userinfo,
    })
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
         wx.openSetting()
        }
      }
    })
  },
  //获取经纬度
  getaddress: function () {
    wx.showLoading({
      title: '获取中...',
    })
    var _this = this;
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        var accuracy = res.accuracy;
        _this.setData({
          latitude: latitude,
          longitude: longitude
        })
        wx.showToast({
          title: '获取成功',
        })
      },
      fail: function () {
        wx.showLoading({
          title: '获取失败...',
          icon: 'success',
          mask: true
        })
      },
      complete: function () {
        wx.hideLoading();
      }
    })

  },
  //废弃事件
  chooseaddress: function (e) {
    var _this = this;
    var laNum = e.currentTarget.dataset.laNum;
    var loNum = e.currentTarget.dataset.loNum;
    if (laNum) {
      wx.showLoading({
        title: '请获取当前位置...',
      }),
        setTimeout(function () {
          wx.hideLoading()
        }, 2000)
    }
    wx.openLocation({
      latitude: laNum,
      longitude: loNum
    })
  },
  // 点击选择收货地址
  moveToLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        let mobileLocation = {
          longitude: res.longitude,
          latitude: res.latitude,
          address: res.address,
        };

        that.setData({
          mobileLocation: mobileLocation,
        });
      },
      fail: function (err) {
        console.log(err)

      }
    });
  },
  //点击生成图片验证码
  createPicCode: function () {
    var _this = this;
    wx.request({
      url: 'http://route.showapi.com/26-4',
      data: {
        "showapi_appid": "44736",
        "showapi_sign": "19fd12051a254503a657b7ed6ccb2dc5"
      },
      success: function (res) {
        console.log(res.data.showapi_res_body);
        _this.setData({
          createCode: res.data.showapi_res_body,
          createCodeShow: true
        })
      }
    })
  },
  //实时绑定input输入的数据
  bindKeyInput: function (e) {
    // console.log(e.detail.value, e.target.dataset.code);
    //判断是否输入正确,显示输入错误提示信息
    if (e.detail.value !== e.target.dataset.code) {
      this.setData({
        showWriteFalse: true
      })
    } else {
      this.setData({
        showWriteFalse: false
      })
    }
    // if(e.detail.value !== list.text)
    this.setData({
      inputValue: e.detail.value
    })
  },

})

