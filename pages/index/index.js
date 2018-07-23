// pages/index/index.js
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
    imgUrls: [
      '../../accest/images/index/child_01.png',
      '../../accest/images/index/mentext_01.png',
      '../../accest/images/index/oldmen_01.png',
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
    scrollTop: 100,
    showload:true,
    loading:false,
    menu:{
      imgUrls:[
        'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1PlmNLVXXXXXEXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1RN0HMFXXXXXNXpXXXXXXXXXX-183-129.png?imgtag=avatar',
      ],
      
      path:[
        '../tmao/index',
        '../jhuas/index',
        '../tmaoword/index',
        '../outfood/index',
      ],
      navName:[
        '天猫',
        '聚划算',
        '天猫国际',
        '外卖',

      ]
    },
    winHeight: "475",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    expertList: [ //假数据
      {
          img: "avatar.png",
          name: "欢顔",
          tag: "知名情感博主",
          search: "关注",
          answer: 12, 
          listen: 5231
      },
      {
        img: "avatar.png",
        name: "欢儿",
        tag: "知名大V博主",
        search: "问TA",
        
        answer: 365,
        listen: 63115
      }, {
        img: "avatar.png",
        name: "pony",
        tag: "知名歌曲博主",
        search: "转发",
        answer: 52,
        listen: 8765
      }, {
        img: "avatar.png",
        name: "pih",
        tag: "知名命题博主",
        search: "转发",
        answer: 54,
        listen: 3216
      }
      
    ],
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPullDownRefresh: function () {
      //下拉后的逻辑
      setTimeout(function(){
        wx.stopPullDownRefresh();//停止动画
      },2000)

    },
    showLoading: function () {
      wx.showToast({
        title: '加载中...',
        icon: 'loading'
      });
    },
    cancelLoading: function () {
      wx.hideToast();
    },
    switchTab: function (e) {
      this.setData({
        currentTab: e.detail.current
      });
      this.checkCor();
    },
    // 点击标题切换当前页时改变样式
    swichNav: function (e) {
      var cur = e.target.dataset.current;
      if (this.data.currentTaB == cur) { return false; }
      else {
        this.setData({
          currentTab: cur
        })
      }
    },
    //判断当前滚动超过一屏时，设置tab标题滚动条。
    checkCor: function () {
      if (this.data.currentTab > 4) {
        this.setData({
          scrollLeft: 300
        })
      } else {
        this.setData({
          scrollLeft: 0
        })
      }
    },
    showmore:function(){
      this.setData({
        loading:true
      });
      var _this= this;
      setTimeout(function(){
        _this.setData({
          loading: false
        });
      },1000)
    }
  }, 
})
